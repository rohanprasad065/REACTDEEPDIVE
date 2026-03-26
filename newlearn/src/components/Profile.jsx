import React from 'react'
import UserContext from '../context/UserContext';



const Profile = () => {
  const { user } = React.useContext(UserContext);
  console.log(user);
  if(!user) {
    return <h2>Please login to view your profile</h2>
  }
  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  )
 
}

export default Profile