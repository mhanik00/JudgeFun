import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to home if not logged in
      navigate('/');
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#081027] min-h-screen">
      <Header isLoggedIn={true} handleLogout={() => navigate('/')} /> {/* Add Header component */}
      <div className="flex items-center justify-center h-full mt-10">
        <div className="bg-[#0e1c44] p-8 rounded-lg shadow-md max-w-md w-full mx-4">
          <h2 className="text-center text-2xl font-semibold mb-2 text-yellow-300">Welcome, {user.name}!</h2>
          <div className="mb-1">
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-yellow-300 text-black py-2 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
