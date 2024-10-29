import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './ProfilePage';
import SelectQuizType from './components/SelectQuizType';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/select-quiz" element={<SelectQuizType />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
