# LearnBridge AI — Hackathon MVP

A runnable, API-backed starter for an AI career mentor platform. It deliberately focuses on the judging demo: personalised career matching, resume review, skill-gap analysis, roadmap generation, interview feedback, and opportunity matching.

## 1. Requirements

- Node.js 20 or later

## 2. Run locally

Open two terminals.

```powershell
cd server
npm install
npm run dev
```

```powershell
cd client
npm install
npm run dev
```

Then open the URL printed by Vite (normally `http://localhost:5173`). The API runs on `http://localhost:4000`.

## 3. What is real versus demo data

The server implements transparent, deterministic AI-style scoring so the demo works without API keys. Replace the functions in `server/src/index.js` with calls to Gemini/OpenAI plus embeddings when you are ready for production.

| Hackathon module | MVP endpoint | Production upgrade |
|---|---|---|
| Career mentor | `POST /api/career/recommend` | RAG over career dataset + LLM explanation |
| Resume analyser | `POST /api/resume/analyze` | PDF extraction + LLM rubric |
| Skill gap | `POST /api/skills/gap` | Sentence embeddings / cosine similarity |
| Roadmap | `POST /api/roadmap/generate` | LLM tailored to time and baseline |
| Interview coach | `POST /api/interview/evaluate` | Audio transcription + LLM feedback |
| Opportunities | `GET /api/opportunities` | Verified scholarship and internship feeds |

## 4. Deploy

1. Push this folder to GitHub.
2. Deploy `client` to Vercel; set `VITE_API_URL` to the deployed API URL.
3. Deploy `server` to Render; build command: `npm install`, start command: `npm start`.
4. Later add MongoDB Atlas for accounts, saved roadmaps, and history.

## 5. Suggested seven-day build sequence

1. Keep this demo stable and record a walkthrough.
2. Add authentication and a MongoDB `users` collection.
3. Add PDF upload (`multer` + PyMuPDF service).
4. Bring in real career, scholarship, and internship data.
5. Add an LLM provider, rate limits, and moderation.
6. Test with 5–10 students and refine the language.
7. Deploy and prepare metrics: recommendations generated, skills closed, and opportunities matched.
