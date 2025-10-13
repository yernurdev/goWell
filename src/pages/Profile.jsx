// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { db, storage } from '../Firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function Profile({ theme, setTheme }) {
  const [profile, setProfile] = useState({ name: 'Пользователь', age:'', about:'' , avatar:'' });
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // doc id for now
  const DOC_ID = 'local_user';

  // load from Firestore first, fallback to localStorage
  useEffect(() => {
    async function load() {
      try {
        const d = doc(db, 'profiles', DOC_ID);
        const snap = await getDoc(d);
        if (snap.exists()) {
          setProfile(snap.data());
        } else {
          const local = JSON.parse(localStorage.getItem('gowell_profile') || null);
          if (local) setProfile(local);
        }
      } catch (e) {
        const local = JSON.parse(localStorage.getItem('gowell_profile') || null);
        if (local) setProfile(local);
      }
    }
    load();
  }, []);

  useEffect(() => {
    localStorage.setItem('gowell_profile', JSON.stringify(profile));
  }, [profile]);

  async function saveProfile() {
    setEditing(false);
    // save to Firestore
    try {
      await setDoc(doc(db, 'profiles', DOC_ID), profile, { merge:true });
    } catch(e) {
      console.warn('Save to Firestore failed', e);
    }
  }

  function onFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    // preview via local URL
    const url = URL.createObjectURL(f);
    setProfile(p => ({ ...p, avatar: url }));
  }

  async function uploadAvatar() {
    if (!file) return;
    setUploading(true);
    const storageRef = ref(storage, `avatars/${DOC_ID}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', null, err => {
      console.error(err);
      setUploading(false);
    }, async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      setProfile(p => ({ ...p, avatar: url }));
      // save profile to Firestore with avatar url
      await setDoc(doc(db, 'profiles', DOC_ID), { ...profile, avatar: url }, { merge:true });
      setUploading(false);
    });
  }

  return (
    <div>
      <div className="card">
        <h2>Профиль</h2>

        <div style={{display:'flex',gap:16,alignItems:'center'}}>
          <div style={{width:96,height:96,borderRadius:16,overflow:'hidden',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {profile.avatar ? <img src={profile.avatar} alt="avatar" style={{width:'100%',height:'100%',objectFit:'cover'}} /> :
              <div style={{fontWeight:700,color:'var(--primary)'}}>GW</div>}
          </div>

          <div style={{flex:1}}>
            <div style={{display:'flex',gap:8}}>
              <input className="input" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} disabled={!editing} />
              <input className="input" value={profile.age} onChange={e => setProfile({...profile, age: e.target.value})} disabled={!editing} style={{width:96}} placeholder="Возраст" />
            </div>

            <textarea className="input" style={{marginTop:8}} value={profile.about} onChange={e => setProfile({...profile, about: e.target.value})} disabled={!editing} placeholder="О себе" />

            <div style={{display:'flex',alignItems:'center',gap:8,marginTop:8}}>
              <label className="btn ghost" style={{cursor:'pointer'}}>
                Загрузить аватар
                <input type="file" accept="image/*" onChange={onFile} style={{display:'none'}} />
              </label>

              <button className="btn" onClick={uploadAvatar} disabled={!file || uploading}>{ uploading ? 'Загрузка...' : 'Загрузить' }</button>

              { editing ? (
                <button className="btn ghost" onClick={() => setEditing(false)}>Отмена</button>
              ) : (
                <button className="btn ghost" onClick={() => setEditing(true)}>Редактировать</button>
              )}

              { editing && <button className="btn" onClick={saveProfile}>Сохранить</button> }
            </div>

            <div className="small" style={{marginTop:10}}>
              Данные сохраняются в Firebase и локально.
            </div>

            {/* Тема — прячем в профиль */}
            <div style={{marginTop:12}}>
              <label className="small">Тема</label>
              <div style={{display:'flex',gap:8,marginTop:6}}>
                <button className="btn ghost" onClick={() => setTheme('light')}>Светлая</button>
                <button className="btn" onClick={() => setTheme('dark')}>Тёмная</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
