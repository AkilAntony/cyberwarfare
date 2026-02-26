import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

const HomePage = React.lazy(() => import('@/pages/Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
