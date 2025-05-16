# 🧑‍💻 DevBoard – A Personalized Developer Dashboard

**DevBoard** is a fully customizable, developer-focused productivity dashboard. Designed to centralize essential tools and data, it offers everything from GitHub activity and StackOverflow trends to a Pomodoro timer and weather updates — all in one sleek interface.

## 🚀 Features

- ✅ **To-Do List with Prioritization**
- 🔗 **GitHub Integration**
  View recent commits, pull requests, and starred repositories.
- 💡 **StackOverflow Trending Topics**
  Filtered by your favorite programming languages.
- ⏱️ **Pomodoro Clock**
  Boost your focus with a built-in coding timer.
- 🌤️ **Weather & Local Time**
  Stay informed about the environment you're coding in.
- 🎨 **Theme Customization**
  Toggle between dark and light mode.
- 📦 **Drag-and-Drop Widgets**
  Arrange your dashboard to suit your workflow.
- 🔐 **GitHub OAuth Login**
  Secure and personalized dashboard access.
- 🗂️ **User Preferences Stored in DB**
  Preferences saved via Firebase.

---

## 🛠️ Tech Stack

| Frontend                         | Backend           | APIs                                          | Auth          | Storage  |
| -------------------------------- | ----------------- | --------------------------------------------- | ------------- | -------- |
| React + Shadcn UI + Tailwind CSS | Node.js + Express | GitHub API, StackExchange API, OpenWeatherMap | GitHub OAuth2 | Firebase |

---

## 📸 Demo

https://devboard-iota.vercel.app

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/8180e/devboard.git
cd devboard
```

2. **Install dependencies**

```bash
cd backend
npm install
```

```bash
cd ../frontend
npm install
```

3. **Create `.env` files**

In `backend`:

```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_ACCESS_TOKEN=your_github_access_token
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
FRONTEND_URLS=http://localhost:5173
```

In `frontend`:

```env
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_API_URL=http://localhost:3000
```

4. **Run the client and the server in two seperate terminals**

```bash
cd backend
npm run dev
```

```bash
cd frontend
npm run dev
```

---

## 🧭 Project Roadmap

- [x] Core dashboard layout with drag-and-drop
- [x] GitHub OAuth2 and API integration
- [x] To-Do List with persistence
- [x] Weather widget
- [x] StackOverflow feed (via StackExchange API)
- [ ] Notifications & reminders
- [ ] Mobile responsive UI
- [ ] Additional third-party widget support (e.g., Hacker News, Reddit)

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

[MIT](LICENSE)

---

## 🙌 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [StackExchange API](https://api.stackexchange.com/)
- [OpenWeatherMap](https://openweathermap.org/api)
- [Firebase](https://firebase.google.com/)

---

## 💬 Feedback

Have an idea for a new widget or feature? [Open an issue](https://github.com/yourusername/devboard/issues) or drop a message!
