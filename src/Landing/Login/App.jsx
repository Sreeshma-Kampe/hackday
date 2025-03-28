import React, { useState } from 'react';
import AuthCard from './AuthCard';
import { useNavigate } from 'react-router-dom';
import './auth.css';


function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleViewTransition = (view) => {
    setCurrentView(view);
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setIsLoading(true);
  
    try {
      let response;
      if (currentView === 'login') {
        response = await fetch('http://localhost:8081/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: data.username, 
            password: data.password,
          }),
        });
      } else if (currentView === 'register') {
        response = await fetch('http://localhost:8081/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            role: data.role,
          }),
        });
      }
  
      const responseData = await response.json();
      if (response.ok) {
        setIsSuccess(false);
        console.log('Success:', responseData);
  
        if (currentView === 'register'){
          alert('Registration successful! You will be redirected to the login page.');
          setCurrentView("login");
        }
        else if (currentView === 'login') {
          const role = responseData.role;
          console.log('User Role:', role);
          if (role === 'farmer') {
            navigate('/home');
          } else if (role === 'vet') {
            navigate('/vet');
          } else if (role === 'dairy') {
            navigate('/dairy');
          }
        }
      } else {
        setIsSuccess(false);
        alert(responseText); 
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSuccess(false);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/doyh3fqr5/image/upload/c_fill,w_800/v1742997440/5f854058-905f-4d96-b840-2c6a7e4974cd_n3bim3.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      
      <div className="relative w-full max-w-md mx-auto px-4">
        <AuthCard 
          currentView={currentView}
          onViewChange={handleViewTransition}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  );
}

export default App;
