import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SelectQuizType() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [timeOption, setTimeOption] = useState('perQuestion'); // 'perQuestion' or 'total'
  const [timeValue, setTimeValue] = useState(30); // default 30 seconds per question

  const categories = [
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'math', name: 'Mathematics', icon: '📐' },
    { id: 'literature', name: 'Literature', icon: '📚' },
    { id: 'geography', name: 'Geography', icon: '🌍' },
    { id: 'zoology', name: 'Zoology', icon: '🦁' }
  ];

  const handleStartQuiz = () => {
    if (!selectedCategory) {
      alert('Please select a category');
      return;
    }

    // Navigate to quiz page with selected options
    navigate('/quiz', {
      state: {
        category: selectedCategory,
        timeOption,
        timeValue
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#081027]">
      <Header isLoggedIn={true} handleLogout={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-[#0e1c44] rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-8 text-yellow-300">Select Quiz Type</h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm md:text-base text-blue-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center
                  ${selectedCategory === category.id 
                    ? 'border-yellow-300 bg-[#081027]' 
                    : 'border-gray-200 hover:border-yellow-200'}`}
              >
                <span className="text-2xl md:text-4xl mb-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Time Options */}
          <div className="mb-8">
            <h3 className="text-xl text-yellow-300 font-semibold mb-4">Time Settings</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="timeOption"
                  checked={timeOption === 'perQuestion'}
                  onChange={() => setTimeOption('perQuestion')}
                
                />
                <span className='text-blue-200'>Time per question</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="timeOption"
                  checked={timeOption === 'total'}
                  onChange={() => setTimeOption('total')}
                  className="text-blue-200"
                />
                <span className='text-blue-200'>Total time for quiz</span>
              </label>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-yellow-300">Set time (in seconds):</label>
              <input
                type="number"
                min="10"
                max={timeOption === 'perQuestion' ? 120 : 3600}
                value={timeValue}
                onChange={(e) => setTimeValue(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full max-w-xs"
              />
              <p className="text-sm text-blue-200 mt-1">
                {timeOption === 'perQuestion' 
                  ? 'Seconds per question (10-120 seconds)' 
                  : 'Total seconds for quiz (10-3600 seconds)'}
              </p>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={handleStartQuiz}
              disabled={!selectedCategory}
              className={`px-8 py-3 rounded-lg font-semibold text-black
                ${selectedCategory 
                  ? 'bg-yellow-300 hover:bg-yellow-400' 
                  : 'bg-[#081027] cursor-not-allowed'}`}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectQuizType;
