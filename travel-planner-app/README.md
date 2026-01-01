# Atlas – Travel Planner App

Atlas is a modern, intuitive travel planner web application that helps users **discover destinations, build itineraries, and organize trips** with ease. Whether you’re planning your next vacation or just exploring ideas, Atlas makes travel planning simple and fun.

---

## 🚀 Features

- **Explore Destinations**: Browse a curated list of cities with images, descriptions, temperature, and top attractions.
- **Itinerary Builder**: Add destinations to your personal itinerary for easy trip planning.
- **Search Functionality**: Quickly find destinations by city or country.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile.
- **Full-Width Hero & Featured Destinations**: Clean layout that highlights travel experiences.
- **Contact Form**: Reach out to the Atlas team directly from the website.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router v6, Tailwind CSS v4
- **State Management**: useState, React hooks
- **Styling**: Tailwind CSS (Light/Dark mode)
- **Data**: JSON files for destinations (can be replaced with API)
- **Deployment**: Netlify / Vercel (optional)


## 📂 Project Structure

atlas/
│
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ Footer.jsx
│ │ ├─ DestinationCard.jsx
│ │ ├─ SearchBar.jsx
│ │ ├─ Header.jsx
│ │ └─ FloatingWhatsapp.jsx 
│ │
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Destinations.jsx
│ │ ├─ DestinationDetails.jsx
│ │ └─ Itinerary.jsx
│ │
│ ├─ data/
│ │ └─ destinations.json
│ │
│ ├─ App.jsx
│ └─ index.jsx
│
├─ package.json
├─ tailwind.config.js
└─ README.md

---

## 💻 Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/atlas.git
cd atlas
Install dependencies

bash
npm install
# or
yarn install
Start development server

bash
npm run dev
# or
yarn dev