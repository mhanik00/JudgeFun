import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import Header from './Header';

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, timeOption, timeValue } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeValue);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const categoryQuestions = questions[category] || [];
  const currentQuestion = categoryQuestions[currentQuestionIndex];

  useEffect(() => {
    if (!category) {
      navigate('/select-quiz');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (timeOption === 'perQuestion' && currentQuestionIndex < categoryQuestions.length - 1) {
            handleNext();
            return timeValue;
          } else {
            clearInterval(timer);
            setIsQuizComplete(true);
            return 0;
          }
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [category, currentQuestionIndex, timeOption, timeValue]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    // Check if answer is correct and update score
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or end quiz
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      if (timeOption === 'perQuestion') {
        setTimeLeft(timeValue);
      }
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRetry = () => {
    navigate('/select-quiz');
  };

  if (isQuizComplete) {
    return (
      <div className="min-h-screen bg-[#081027]">
        <Header isLoggedIn={true} handleLogout={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-[#0e1c44] rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Quiz Complete!</h2>
            <p className="text-xl mb-4 text-blue-200">
              Your Score: {score} out of {categoryQuestions.length}
            </p>
            <p className="text-lg mb-6 text-blue-200">
              Percentage: {((score / categoryQuestions.length) * 100).toFixed(2)}%
            </p>
            <button
              onClick={handleRetry}
              className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Try Another Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#081027]">
      <Header isLoggedIn={true} handleLogout={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-[#0e1c44] rounded-lg shadow-lg p-6">
          {/* Timer and Progress */}
          <div className="flex justify-between mb-6">
            <p className="text-yellow-300">
              Question {currentQuestionIndex + 1}/{categoryQuestions.length}
            </p>
            <p className="text-yellow-300">Time Left: {timeLeft}s</p>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              {currentQuestion.question}
            </h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg transition-all duration-300 
                    ${selectedAnswer === option 
                      ? 'bg-yellow-300 text-black' 
                      : 'bg-[#081027] text-blue-200 hover:bg-[#0e1c44]'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`px-8 py-3 rounded-lg font-semibold
                ${selectedAnswer 
                  ? 'bg-yellow-300 text-black hover:bg-yellow-400' 
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
            >
              {currentQuestionIndex === categoryQuestions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
