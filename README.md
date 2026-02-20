# GoWell — Цифровой помощник для ментального здоровья

GoWell is a **Progressive Web App (PWA)** designed for schoolchildren to care for their mental health. It provides AI-powered support, mood tracking, a personal journal, wellness exercises, and a gamification system — all in one place.

> **Live Firebase Project:** `gowell-agent` (Firebase / Google Cloud)

---

##  Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Firebase Setup](#-firebase-setup)
- [Cloud Functions Setup](#-cloud-functions-setup)
- [Available Scripts](#-available-scripts)
- [Pages Overview](#-pages-overview)
- [Environment Notes](#-environment-notes)

---

##  Features

| Feature | Description |
|---|---|
|  **AI Chat** | Chat with a Gemini-powered empathetic assistant (with local fallback) |
|  **Mood Tracker** | Log your daily mood (Joy, Sadness, Anxiety, Calm) with optional notes |
|  **Journal** | Write, edit, and delete personal diary entries |
|  **Wellness Hub** | 20+ curated wellness practices (breathing, grounding, affirmations, etc.) |
|  **Profile** | Firebase Auth (email/password), avatar upload, profile save |
| **Emotion Analytics** | Pie chart of emotional patterns from your chat, journal, and mood data |
|  **Gamification** | Earn points (+50 per completed task) stored in Firestore |
|  **Dark / Light Theme** | Persistent theme toggle stored in localStorage |
|  **PWA** | Installable on mobile, works offline with service worker |

---

## 🛠 Tech Stack

### Frontend
- **React 18** with **Vite 7**
- **React Router DOM v6** — client-side routing
- **Recharts** — pie chart for emotion statistics
- **React Icons** — SVG icon library
- **Emotion** (styled components support)
- **vite-plugin-pwa** — PWA manifest & service worker generation

### Backend / Cloud
- **Firebase Firestore** — database for moods, journal, profiles, chat history
- **Firebase Auth** — email/password authentication
- **Firebase Storage** — avatar image uploads
- **Firebase Analytics** — usage analytics
- **Firebase Cloud Functions** (Node.js) — `/chat` endpoint that wraps the Gemini API

### AI
- **Google Gemini 2.0 Flash** (`@google/generative-ai`) — AI chat responses via Cloud Function

---

##  Project Structure

```
goWell/
├── public/
│   ├── icons/              # PWA icons (192x192, 512x512)
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service worker for offline support
│
├── src/
│   ├── App.jsx             # Root component: routing, theme, splash screen
│   ├── main.jsx            # React DOM entry point
│   ├── Firebase.js         # Firebase initialization (db, auth, storage)
│   ├── styles.css          # Global styles (CSS variables, dark mode, cards, etc.)
│   │
│   ├── components/
│   │   ├── Navbar.jsx      # Bottom mobile navigation bar
│   │   └── SplashScreen.jsx # Animated splash screen (shown for 1.2s on load)
│   │
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with links to all features
│   │   ├── Chat.jsx        # AI chat with Gemini (+ local keyword fallback)
│   │   ├── Mood.jsx        # Daily mood logging + history list (Firestore + localStorage)
│   │   ├── Journal.jsx     # Personal diary with add/edit/delete (Firestore + localStorage)
│   │   ├── WellnessHub.jsx # 20 wellness practices + mood-based recommendations
│   │   └── Profile.jsx     # Auth, profile editing, avatar upload, emotion pie chart
│   │
│   └── utils/
│       ├── emotionAnalyzer.js  # Keyword-based emotion scoring + Firestore sync
│       └── gamification.js    # addPoints / getPoints helpers (Firestore + localStorage)
│
├── functions/
│   ├── index.js            # Firebase Cloud Function: POST /chat → Gemini API
│   └── package.json        # Functions dependencies
│
├── index.html              # Vite HTML entry point
├── vite.config.js          # Vite config with React plugin + PWA plugin
├── firebase.json           # Firebase Hosting + Functions config
├── .firebaserc             # Firebase project alias (`gowell-agent`)
└── package.json            # Frontend dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A **Firebase** project (see [Firebase Setup](#-firebase-setup))

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd goWell
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install Cloud Functions dependencies

```bash
cd functions
npm install
cd ..
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

---

##  Firebase Setup

The Firebase config is already inside `src/Firebase.js`. It connects to the `gowell-agent` Firebase project. If you want to use your **own** Firebase project, follow these steps:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable the following services:
   - **Authentication** → Email/Password sign-in method
   - **Firestore Database** → Start in test mode (or configure rules)
   - **Storage** → For avatar uploads
   - **Analytics** (optional)
3. Get your config object from **Project Settings → Your Apps → Web** and replace the values in `src/Firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
}
```

### Firestore Collections Used

| Collection | Purpose |
|---|---|
| `profiles` | User profile data, points, emotional state, metrics history |
| `moods` | All logged mood entries |
| `daily_moods` | One entry per user per day (`uid_YYYY-MM-DD`) |
| `journal` | Journal entries |
| `chat` | Chat messages (referenced in analytics) |

---

##  Cloud Functions Setup

The Cloud Function in `functions/index.js` handles AI chat via Google Gemini.

### 1. Log in to Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### 2. Set the Gemini API Key in Firebase config

```bash
firebase functions:config:set gemini.key="YOUR_GEMINI_API_KEY"
```

You can obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/).

### 3. Deploy the Cloud Function

```bash
firebase deploy --only functions
```

The function will be deployed to:
```
https://us-central1-<your-project-id>.cloudfunctions.net/api/chat
```

> **Note:** If the Cloud Function is unavailable, the Chat page automatically falls back to a local keyword-based reply system. No action needed for offline/fallback mode.

---

## 📜 Available Scripts

Run these from the **root** `goWell/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start the local Vite dev server at `localhost:5173` |
| `npm run build` | Build the production bundle to the `dist/` folder |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build + deploy everything to Firebase Hosting |

To deploy only the frontend (hosting):
```bash
firebase deploy --only hosting
```

To deploy only functions:
```bash
firebase deploy --only functions
```

---

##  Pages Overview

###  Home (`/`)
The main landing page. Displays welcome cards with quick links to Chat, Mood Tracker, Journal, and Wellness Hub.

###  Chat (`/chat`)
AI-powered support chat using **Gemini 2.0 Flash** via Firebase Cloud Functions.
- Messages are persisted in `localStorage` (`gowell_chat`)
- Falls back to keyword-based local replies if the cloud is unavailable
- Analyzes messages using `emotionAnalyzer.js` and syncs emotional state to Firestore

###  Mood Tracker (`/mood`)
Log how you feel today from 4 options: **Joy, Sadness, Anxiety, Calm**.
- Add an optional daily note
- Saves to `localStorage` and Firestore (`daily_moods`, `moods` collections)
- Shows a scrollable history of the last 10 entries

###  Journal (`/journal`)
Personal diary with full CRUD support:
- **Add** new entries
- **Edit** existing entries inline
- **Delete** unwanted entries
- Persisted to `localStorage` and Firestore `journal` collection

###  Wellness Hub (`/hub`)
A curated library of **20 wellness practices** across categories:
- Breathing, Grounding, Mindfulness, Journaling, Sleep, Detox, Active, Uplift
- **Smart Recommendations**: If today's mood is Sad or Anxious, personalized practices are shown at the top
- Completing a practice awards **+50 points** (via `gamification.js`)

###  Profile (`/profile`)
- **Login / Register** with Firebase Authentication (email + password)
- **Edit profile**: name, age, bio
- **Avatar upload** to Firebase Storage
- **GoWell Points** display (synced from Firestore)
- **Light/Dark theme** toggle
- **Emotion Pie Chart** — aggregates emotional data from all your activity using Recharts

---

##  Environment Notes

- **Firebase API keys** are embedded in `src/Firebase.js`. This is standard practice for client-side Firebase apps — access control is managed by **Firebase Security Rules**, not by hiding the key.
- **Gemini API key** is stored server-side only in Firebase Functions config (not exposed to the browser).
- **localStorage keys** used by the app:

| Key | Content |
|---|---|
| `gowell_chat` | Chat message history |
| `gowell_moods` | Mood entry history array |
| `gowell_daily` | Daily mood by date key (`YYYY-MM-DD`) |
| `gowell_journal` | Journal entries array |
| `gowell_points` | Cached gamification points |
| `gowell_theme` | Current theme (`light` / `dark`) |
| `gowell_emotions_cache` | Cached emotion analytics |
| `gowell_emotional_<uid>` | Per-user emotional state from analyzer |

---

##  PWA Support

GoWell is a fully installable **Progressive Web App**:
- Configured via `vite-plugin-pwa` in `vite.config.js`
- Service worker at `public/service-worker.js` handles caching
- App icons at `public/icons/` (192×192 and 512×512)
- Theme color: `#E1027E`

To install: open the app in Chrome/Edge on mobile → **"Add to Home Screen"**

---

##  Contact

This project was built as a digital wellness assistant for students. For questions or contributions, open an issue or reach out to the maintainer.
