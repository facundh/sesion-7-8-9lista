import React, { useRef, useState } from 'react'
import { User } from '../../models/user.class'
import UserForm from '../pure/form/UserForm'
import UserComponent from '../pure/User'

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
    
    const [ users, setUsers ] = useState([ userTest1, userTest2 ]);
    
    const conected = ( user ) => {
        const index = users.indexOf(user);
        const tempUsers = [...users];
        tempUsers[index].online = !tempUsers[index].online
        setUsers(tempUsers)
    }

    const addUser = ( user ) => {
        const index = users.indexOf( user );
        const tempUser = [ ...users ];
        tempUser.push(user);
        setUsers(tempUser);
    }

    const deleteUser = (user) => {
        const index = users.indexOf(user);
        const tempUser = [ ...users ];
        tempUser.splice( index, 1 );
        setUsers(tempUser)
    }

  return (
    <div className='col-12 d-flex justify-content-center' style={{backgroundColor:'steelblue', height:'100vh'}}>
        <div className='card col-3 p-2 d-flex justify-content-between w-50 h-50'>
            <div className="card-header p-2  bg-info"> Users </div>
            <div className="card-body d-flex align-items-start justify-content-center w-100 p-3" 
                 data-mdb-perfect-scrollbar='true'
                 style={{position:'relative', height:'400px'}}>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>User</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>State</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index ) =>( 
                                <UserComponent user={user} key={index} conected={conected}  deleteUser={deleteUser}></UserComponent>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <UserForm setUsers={setUsers} add={addUser} />
    </div>
  )
}

export default UserList