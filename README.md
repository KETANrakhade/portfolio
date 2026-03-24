# 🔥 Premium MERN Stack Portfolio

A modern, highly interactive developer portfolio with advanced UI/UX, 3D effects, and smooth animations.

## ✨ Features

- 🎨 Premium futuristic design with dark theme
- 🌟 3D effects and smooth transitions
- 🖱️ Interactive cursor effects (glow + trailing)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling with Framer Motion
- 🎭 Page transition animations
- 📝 Dynamic blog system with MongoDB
- 🚀 Optimized performance with lazy loading

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Framer Motion (animations)
- React Router (routing)
- Axios (API calls)
- React Icons
- React Tilt (3D effects)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📦 Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Setup MongoDB:**
   - Install MongoDB locally or use MongoDB Atlas
   - Update connection string in `backend/.env`

3. **Create backend/.env file:**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```

4. **Seed sample blog data:**
   ```bash
   cd backend
   node seedBlogs.js
   ```

## 🚀 Running the Project

**Development mode (runs both frontend and backend):**
```bash
npm run dev
```

**Or run separately:**

Backend:
```bash
npm run server
```

Frontend (in new terminal):
```bash
npm run client
```

**Access:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
mern-portfolio/
├── frontend/           # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
├── backend/            # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── seedBlogs.js
│   └── package.json
└── README.md
```

## 🎯 Sections

1. **Hero** - Animated landing with typing effect
2. **About** - Introduction with current role at Codeberg IT
3. **Skills** - MERN stack skills with animated progress bars
4. **Projects** - Pyramid E-commerce showcase
5. **Blog** - Dynamic blog system with full blog pages
6. **Contact** - Contact form with social links

## 🌟 Advanced Features

- Custom cursor with glow effect
- Parallax scrolling effects
- 3D card tilt on hover
- Smooth page transitions
- Animated skill bars
- Typing animation effect
- Particle background
- Lazy loading images

## 📝 License

MIT
