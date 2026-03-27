import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authService } from './appwrite/auth.js';
import { login, logout } from './store/authSlice';



function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
    .then(userData => {
      if (userData) {
        dispatch(login(userData));
      }
      else{
        dispatch(logout());
      
      }
    })
      .finally(() => {
          setLoading(false);
    },[dispatch]);
}, [dispatch]);

return !loading ? (
  <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='w-full block'>
      <Header/>
      <main className='container mx-auto px-4 py-8'>
        {/*outlite*/}
      </main>
      <Footer/>
    </div>
  </div>
  ):null
}

export default App
