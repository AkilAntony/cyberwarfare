# React Application (Vite)

This project is a React application bootstrapped with **Vite**.  
It implements tab filtering, search with debounce, and infinite scrolling using the Intersection Observer API.


## 🚀 Getting Started

Follow the steps below to run the project locally.

---

## 1️⃣ Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher recommended)
- npm

Check versions:

```bash
node -v
npm -v
```

---

## 2️⃣ Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd <project-folder>
npm install
```

Or if using yarn:

```bash
yarn
```

---

## 3️⃣ Run in Development Mode

Start the development server:

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:5173
```

---

## 4️⃣ Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with production-ready assets.

---

## 5️⃣ Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

# 📌 Features Implemented

- Tab-based filtering (All / Yours / Blocked)
- Card type filtering (Burner / Subscription)
- Search with debounce
- Infinite scrolling using Intersection Observer
- Skeleton loading UI
- Responsive grid layout (Tailwind CSS)

---

# 🧠 Infinite Scroll Implementation

- Uses the Intersection Observer API
- Loads data in batches (pagination logic)
- Stops loading when no more data is available
- Prevents unnecessary triggers during filtering/search

---

# 🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

---

 

# ⚠️ Notes

- Data is currently mocked locally.
- Infinite scrolling is implemented client-side.
- Filtering and search are performed on the loaded dataset.
