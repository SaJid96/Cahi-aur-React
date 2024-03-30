import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

UserContext
const Profile = () => {

    const {user}=useContext(UserContext)
  if(!user) return <div>Please login</div>

  return <div>Welcome Buddy {user.username}</div>
}

export default Profile