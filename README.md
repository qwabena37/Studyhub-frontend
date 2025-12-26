
# StudyHub
Introduction 
We use to walk several miles to homes of friends to study and collaborate on projects. The rise of tech has come to eradicate this problem. StudyHub provides the platform to resolve this issue digitally. 
The Frontend StudyHub is the user interface of the StudyHub platform where students, teachers and admins can learn, grow, collaborate and build together. It is a responsive, user-friendly web application.

# StudyHub Frontend
StudyHub is a modern, responsive frontend application built with **React**, **Vite**, and **Tailwind CSS**.  
It provides a collaborative learning environment where users can log in, manage projects, and work together efficiently.

---

## 🚀 Features

- ⚡ Fast development with **Vite**
- 🎨 Clean, responsive UI with **Tailwind CSS**
- 🌙 Light & Dark mode (persistent)
- 🔐 Authentication state management (Zustand)
- 🧭 Protected routes for authenticated users
- 📦 Scalable project structure
- ☁️ Ready for **Vercel deployment**

---

## 🗂 Project Structure

studyhub-frontend/
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── vite.config.js
│── index.html
│
└── src/
├── main.jsx
├── App.jsx
│
├── store/
│ └── authStore.js
│
├── api/
│ └── apiClient.js
│
├── components/
│ ├── Navbar.jsx
│ └── PrivateRoute.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│ ├── Projects.jsx
│ ├── SingleProject.jsx
│ └── CreateProject.jsx
│
└── styles/
└── global.css
---


---

## 🛠 Tech Stack

- **React** – UI library
- **Vite** – Fast build tool
- **Tailwind CSS** – Utility-first styling
- **Zustand** – State management
- **Axios** – API communication
- **Vercel** – Deployment

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/qwabena37/studyhub-frontend.git
cd studyhub-frontend



