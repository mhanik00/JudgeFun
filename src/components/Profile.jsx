import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Profile({ onLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formData.name,
      email: formData.email,
    };
    onLogin(newUser);
  };

  return (
    <div className="profile  bg-[#081027] min-h-screen">
      <Header isLoggedIn={false} handleLogout={() => {}} />
      <div className="flex items-center justify-center pt-10">
        <div className="mx-4 bg-[#0e1c44]  p-8 rounded-lg shadow-md">
          <h2 className="text-2xl text-yellow-300 font-bold mb-4">Login / Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-blue-200">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your name'
                
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md outline-none text-blue-200 bg-[#081027] placeholder:text-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-blue-200">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md outline-none text-blue-200 bg-[#081027] placeholder:text-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-blue-200">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md outline-none bg-[#081027] text-blue-200 placeholder:text-blue-200"
              />
                </div>
            <button type="submit" className=" mt-2 w-full bg-yellow-300 text-black py-2 rounded-md hover:bg-yellow-400">Login / Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Profile;
