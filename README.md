# 🏋️‍♂️ MERN Gym Website

A fully functional **Gym Website** built with the **MERN stack**, featuring a working contact form that sends emails using Nodemailer. This project demonstrates real-world backend authentication, frontend–backend API integration, secure environment variables, and deployment-ready practices.

---

## 🚀 Live Preview

> *(Add your deployed link here if deployed, e.g., on Render/Netlify/Vercel)*

---

## 📌 Features

- 📌 Responsive UI built with React + Vite  
- 📌 Backend API using Express & Node.js  
- 📌 Contact form with **email functionality** via Nodemailer  
- 📌 Secure configuration with environment variables  
- 📌 Full frontend ↔ backend integration  
- 📌 Proper folder structure and Git best practices  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, CSS |
| Backend | Node.js, Express |
| Email | Nodemailer (Gmail App Password) |
| Tools | Git, GitHub, Postman/Thunder Client |
| Deployment (optional) | Render, Vercel, Netlify |

---

## 📂 Folder Structure
```
mern-gym-website/
├── backend/
│ ├── utils/
│ │ └── sendEmail.js
│ ├── config.env # (ignored in git)
│ ├── app.js
│ ├── package.json
│ └── package-lock.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
├── .gitignore
└── README.md
```


---

## 🛠️ Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RishiMaskare/mern-gym-website.git
cd mern-gym-website
```

2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a file named .env in the backend folder and add:
```bash
SMTP_MAIL=yourgmail@gmail.com
SMTP_PASSWORD=16characterapppassword
FRONTEND_URL=http://localhost:5173
PORT=4000
```
💡 Make sure to use a Gmail App Password, not your normal password.

Start the backend:
```bash
node app.js
```

3️⃣ Frontend Setup

Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

Your frontend will typically run at:
http://localhost:5173


💬 How Email Functionality Works
The contact form in the frontend sends a POST request to:
POST http://localhost:4000/send/mail


Backend receives:
{
  "name": "User Name",
  "email": "user@gmail.com",
  "message": "Hello!"
}

| Key             | Purpose                               |
| --------------- | ------------------------------------- |
| `SMTP_MAIL`     | The Gmail account used to send emails |
| `SMTP_PASSWORD` | **App Password** for Gmail (16 chars) |
| `FRONTEND_URL`  | Your frontend origin (for CORS)       |
| `PORT`          | Backend server port                   |
