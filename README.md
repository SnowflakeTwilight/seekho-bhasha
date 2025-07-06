# 📚 Seekho Bhasha

reshaping the narrative in learning new regional languages.
learning new languages offers a whole world of experience.

**Seekho Bhasha** is a fun and interactive language learning app designed to build vocabulary through image-based flashcards, pronunciation practice, and active recall. Ideal for school students, Sanskrit learners, and curious polyglots!

🌐 **Live Site**: [https://seekho-bhasha.vercel.app](https://seekho-bhasha.vercel.app)

> ✅ Built using **Next.js App Router**, **Tailwind CSS**, and **Web Speech API**.

---

## ✨ Features at a Glance

- 🧠 **Flashcards with Images**: Learn words by identifying what's in the picture.
- 🔈 **Text-to-Speech (TTS)**: Hear accurate pronunciations.
- 🎙️ **Speech Recognition**: Practice speaking and get real-time feedback.
- 🚦 **Two Learning Modes**:
  - **Learner Mode** – Instant feedback with correct/incorrect highlights.
  - **Check Mode** – Answer first, review correctness at the end.
- 🌍 **Language Toggle**: Switch seamlessly between **English** and **संस्कृतम्**.

---

## 🖼️ Screenshots & Feature Highlights

### 🏠 Home Page – Module Selection
Choose from vocabulary modules like Fruits, Animals, Places, etc., with language toggle and visual card count.

![image](https://github.com/user-attachments/assets/c7ea78e5-55c2-4019-808f-fb3bcdc12952)


---

### 🧠 Flashcard Gameplay
Each card shows an image and a question like _“What is this?”_ or _“एतत् किम् अस्ति?”_. Choose the correct answer from 3 options.

![image](https://github.com/user-attachments/assets/6d0c472f-d436-499c-abc9-479cdf7cfb82)


- ✅ Color-coded feedback (Green = Correct, Red = Incorrect)
- 🔊 Audio playback for question and options
- 🎙️ Speech practice buttons per option

---

### 🎧 Speech Recognition (yet to be deployed)
Practice your pronunciation by speaking out the word. The app compares your speech with the correct answer and gives visual feedback.

![Speech Screenshot](./public/screenshots/speech.png)

- ✅ Good pronunciation: green check
- ❌ Incorrect pronunciation: shows what you said

---

### 📋 Review Summary Page
After completing a set, see which answers were correct, your choices, and retry the quiz if needed.
![image](https://github.com/user-attachments/assets/70e9cad9-a942-42c2-91a6-aa7fe6104079)
![image](https://github.com/user-attachments/assets/6f30bc6c-8a29-4097-803e-3c4c513a952f)

---

## 🛠️ Tech Stack

| Tech           | Description                                      |
|----------------|--------------------------------------------------|
| **Next.js**    | App Router, client components                    |
| **Tailwind CSS** | Utility-first CSS framework                    |
| **Shadcn UI**  | Styled components (Card, Button, Badge, etc.)    |
| **Lucide Icons** | Beautiful icons like `Check`, `Mic`, etc.      |
| **Web Speech API** | Speech recognition & synthesis (TTS)         |
| **Pixabay**    | Image sourcing for vocabulary                    |
| **Vercel**     | Deployment platform                              |

---

## 🧩 Folder Structure Overview

```
/app
├── page.tsx # Main entry and UI layout
└── components/
├── flashcard-game.tsx
└── review-page.tsx
/lib
├── newdata.ts # Flashcard module content
└── speech.ts # TTS helper
/hooks
└── useSpeech.ts # Custom SpeechRecognition hook
/public/screenshots # App screenshots
/components/ui # Shadcn UI library components
```

---

## 🔮 Coming Soon

- 📊 Progress tracker dashboard
- 🔄 Spaced repetition model
- ✨ More languages and themes
- 🧒 Student & Admin login support

---

## 🙏 Acknowledgements

- Sanskrit resources from public domain sources
- [Pixabay](https://pixabay.com) for high-quality images
- [MDN Web Docs](https://developer.mozilla.org/) for Web Speech API

---
