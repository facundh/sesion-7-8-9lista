import React from 'react'
import { User } from '../../models/user.class'

const UserList = () => {

    const userTest1 = new User(
        "facundo",
        'test@gmail.com',
        false
    )
    const userTest2 = new User(
        "athila",
        'test2@gmail.com',
        true
    )

    
  return (
    <div>UserList</div>
  )
}

export default UserList