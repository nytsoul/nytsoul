<h1 align="center">Hi 👋, I'm Neshun R</h1>
<h3 align="center">Engineering Student from India 🇮🇳</h3>

<p align="center">
  <a href="https://instagram.com/nyt__soul">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
  </a>
  <a href="mailto:neshun7413@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://linkedin.com/in/neshun-r-309b1b37b">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://github.com/nytsoul">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</p>

---

<h2 align="center">🛠️ Languages, Tools & Databases</h2>

<h3 align="center">Frontend</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,next,tailwind,bootstrap"/>
</p>

<h3 align="center">Backend</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=java,nodejs,python,express,c,cpp"/>
</p>

<h3 align="center">Databases</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=mysql,mongodb,postgresql,sqlite,supabase"/>
</p>

<h3 align="center">Dev Tools</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=git,github,vscode,linux"/>
</p>

---

<h2 align="center">📊 Live GitHub Statistics</h2>

<p align="center">
  All statistics are <strong>updated in real-time</strong> from GitHub API
</p>

### 🔥 Live Contribution Streak
<p align="center">
  <img src="https://streak-stats.demolab.com?user=nytsoul&theme=tokyonight&hide_border=true" width="48%" alt="GitHub Streak Stats"/>
  <img src="https://github-readme-stats.vercel.app/api?username=nytsoul&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" width="48%" alt="GitHub Stats"/>
</p>

### 📈 Contribution Activity Graph
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=nytsoul&theme=tokyo-night&bg_color=1a1b27&color=38bdae&line=38bdae&point=80d4ff&area=true" alt="Contribution Graph" width="100%"/>
</p>

### 🏆 GitHub Achievements
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=nytsoul&theme=tokyonight&no-frame=true&column=5" alt="GitHub Trophies" width="100%"/>
</p>

### 🔝 Most Used Languages
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nytsoul&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages"/>
</p>

---

<h2 align="center">🔥 Live React Components</h2>

<h3 align="center">✨ Features</h3>

- ✅ Real-time GitHub API integration
- ✅ Live contribution tracking (updates every 10 mins)
- ✅ Animated progress ring with bounce animation
- ✅ Live GitHub stats (repos, followers, following)
- ✅ Repository card grid with stars & forks
- ✅ Responsive 3-column layout
- ✅ Dark theme with beautiful gradients
- ✅ Mobile optimized
- ✅ Auto-refreshing all data

<h3 align="center">📁 Live Components</h3>

#### 1. **ContributionCounter** - Live Contribution Tracking
Located in `components/ContributionCounter.jsx`
- Fetches real GitHub events via API
- Updates every 10 minutes
- Shows animated progress ring with fire emoji
- Displays current & longest streaks
- Auto-refresh capabilities

#### 2. **GitHubStats** - Real-time GitHub Metrics
Located in `components/GitHubStats.jsx`
- Public repositories count (Live)
- Followers count (Live)
- Following count (Live)
- Updates every 5 minutes
- Beautiful gradient cards

#### 3. **RepoCard** - Top Repositories
Located in `components/RepoCard.jsx`
- Fetches top 6 repos by stars
- Shows language, stars, and forks
- Direct links to repositories
- Hover effects and animations
- Updates every 30 minutes

#### 4. **StreakCard** - Animated Streak Visualization
Located in `components/StreakCard.jsx`
- 3-column layout with stats
- Animated circular progress ring
- Fire icon with bounce animation
- Customizable colors & values
- Full responsive design

<h3 align="center">🛠 Installation & Setup</h3>

**Prerequisites:**
- Node.js 16+
- npm or yarn

**Install dependencies:**
```bash
npm install
```

**Run development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

**Build for production:**
```bash
npm run build
npm start
```

<h3 align="center">🔄 Live Update Intervals</h3>

| Component | Update Frequency | API Used |
|-----------|------------------|----------|
| ContributionCounter | 10 minutes | GitHub Events API |
| GitHubStats | 5 minutes | GitHub User API |
| RepoCard | 30 minutes | GitHub Repos API |
| Badge Services | Real-time | Various services |

<h3 align="center">🎨 Customization</h3>

**Change username for live data:**
```jsx
const username = "your-github-username"; // Change to your username
```

**Customize update frequency:**
```jsx
// Change interval duration (in milliseconds)
const interval = setInterval(fetchStats, 5 * 60 * 1000); // 5 minutes
```

**Modify theme colors:**
```jsx
// Tailwind theme colors
bg-gradient-to-br from-[#0b0f14] to-[#111827]
text-yellow-400 // Change glow color
```

**Update badge services:**
```jsx
// Streak stats
https://streak-stats.demolab.com?user=YOUR_USERNAME&theme=tokyonight

// GitHub stats
https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME

// Contribution graph
https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME
```

<h3 align="center">📡 API Integrations</h3>

All components use GitHub's public APIs (no authentication required):

1. **GitHub User API**
   - Endpoint: `https://api.github.com/users/{username}`
   - Rate Limit: 60 requests/hour
   - Used for: followers, repos count, following

2. **GitHub Events API**
   - Endpoint: `https://api.github.com/users/{username}/events/public`
   - Rate Limit: 60 requests/hour
   - Used for: contribution tracking

3. **GitHub Repos API**
   - Endpoint: `https://api.github.com/users/{username}/repos`
   - Rate Limit: 60 requests/hour
   - Used for: top repositories display

<h3 align="center">📂 Project Structure</h3>

```
.
├── app/
│   ├── page.jsx                    # Main page with all components
│   ├── layout.jsx                  # Root layout
│   └── globals.css                 # Global Tailwind styles
├── components/
│   ├── StreakCard.jsx              # Streak visualization component
│   ├── ContributionCounter.jsx     # Live contributions counter
│   ├── GitHubStats.jsx             # Live GitHub metrics
│   └── RepoCard.jsx                # Repository cards grid
├── public/                         # Static files
├── package.json                    # Dependencies
├── next.config.js                  # Next.js config
├── tailwind.config.js              # Tailwind config
├── postcss.config.js               # PostCSS config
├── jsconfig.json                   # Path alias config
└── README.md                       # This file
```

---

<h2 align="center">✅ What's Implemented</h2>

- ✅ Next.js 14 with React 18
- ✅ Tailwind CSS with dark theme
- ✅ Live GitHub API integration
- ✅ Real-time contribution tracking
- ✅ Animated progress ring component
- ✅ Repository card grid with live data
- ✅ GitHub stats cards with live metrics
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Auto-refreshing data at intervals
- ✅ Beautiful dark gradient UI
- ✅ Contribution activity graph
- ✅ GitHub achievement trophies

<h2 align="center">🚀 Future Enhancements</h2>

- 🔜 Dark/Light theme toggle
- 🔜 Custom date range selection
- 🔜 Backend data persistence (Firebase/Node)
- 🔜 Email notifications for streaks
- 🔜 Contribution statistics breakdown by language
- 🔜 Week/Month/Year statistics views
- 🔜 Social sharing features
- 🔜 PWA support for offline access

---

<h2 align="center">🤝 Contributing</h2>

Feel free to fork, customize, and improve this portfolio template!

**Tips:**
- Update username in all components to your GitHub username
- Customize colors in Tailwind config
- Add your own projects to the pinned section
- Modify update intervals as needed

---

<h2 align="center">📝 Pinned Projects</h2>
<p align="center">
  <a href="https://github.com/nytsoul/PROJECT_1">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=nytsoul&repo=PROJECT_1&theme=tokyonight"/>
  </a>
  <a href="https://github.com/nytsoul/PROJECT_2">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=nytsoul&repo=PROJECT_2&theme=tokyonight"/>
  </a>
</p>

---

<p align="center"><i>"Consistency beats motivation." 💪</i></p>

<p align="center">
  Made with ❤️ by Neshun R<br/>
  <a href="https://github.com/nytsoul">GitHub</a> • 
  <a href="https://linkedin.com/in/neshun-r-309b1b37b">LinkedIn</a> • 
  <a href="https://instagram.com/nyt__soul">Instagram</a>
</p>

<p align="center">
  <sub>Last updated: <strong>February 2, 2026</strong> | All stats auto-updated</sub>
</p>
