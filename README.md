Studio Manager

Studio Manager is a professional-grade Single Page Application (SPA) designed for music producers and studio administrators to organize, track, and manage their creative assets. Built with React and Material UI, it offers a seamless interface for cataloging musical tracks with rich metadata.

🌟 Key Features

Executive Dashboard: A high-level overview of studio assets, including track counts, total duration, and playlist statistics.

Dynamic Music Catalog: A searchable and filterable gallery. Users can drill down into their library by Genre, BPM, or Musical Key.

Unified Admin Portal: A standardized ingestion form to ensure every new track added to the library contains complete and accurate metadata.

Custom Theming: A bespoke UI experience utilizing Material UI’s theming engine, featuring a warm, professional palette of gold, navy, and earthy tones.

Responsive Routing: Fast, client-side navigation powered by React Router, ensuring zero page reloads.

🛠️ Technical Architecture

The project is built using a modern frontend stack designed for performance and maintainability.

The Tech Stack
Framework: React (via Vite)

UI Library: Material UI (MUI)

Routing: React Router DOM

State Management: React Hooks (useState, useEffect)

Environment: Developed and tested in WSL (Ubuntu)

Folder Structure
src/
├── components/
│   ├── Admin.jsx        # Track ingestion form
│   ├── Catalog.jsx      # Searchable track gallery
│   ├── LandingPage.jsx  # Dashboard & stats view
│   └── theme.jsx        # Global MUI style configuration
├── App.jsx              # Application logic & Route definitions
├── main.jsx             # React DOM entry point
└── App.css              # Global CSS overrides


🚀 Getting Started
Prerequisites
Node.js (v16.0.0 or higher)

npm or yarn

Installation
Clone the repository:

Bash
git clone <your-repository-url>
cd trial-music
Install dependencies:

Bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
Launch the development server:

Bash
npm run dev
View the App:
Open your browser to http://localhost:5173

📋 Project Requirements Checklist
[x] Landing Page: Descriptive dashboard with studio metrics.

[x] Form Page: Functional admin interface for track entry.

[x] Product Page: Fully searchable music catalog.

[x] State Management: Implemented via functional hooks.

[x] Routing: Client-side navigation across three primary views.

[x] Styling: Consistent Material UI implementation throughout.

🤝 Contribution
This project was developed as part of a Summative Lab assessment for Advanced React Development.

Developed by Zach — FT17
