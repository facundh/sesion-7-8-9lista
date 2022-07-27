import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import  { User } from '../../models/user.class'

const UserComponent = ({ user, conected, deleteUser }) => {

    useEffect(() => {
        console.log('Lista usuario cargada');
    },[user]);

    const isConected = () => {
        if(user.online){
            return (
                <i className="bi bi-balloon-fill" onClick={() => conected(user)} style={{color:'green', fontSize:'2rem', cursor:'pointer'}}></i>
            )
        } else {
            return (
                <i className="bi bi-balloon-fill" onClick={() => conected(user)} style={{color:'red', fontSize:'2rem', cursor:'pointer'}}></i>
            )
        }
    }
  return (
    <tr className='fw-normal'>
        <th>
            <span> {user.name} </span>
        </th>

        <td>
            <span> {user.email} </span>
        </td>

        <td>
                { isConected() }
        </td>
        <td>
            <i className="bi bi-person-x-fill d-flex align-items-center justify-content-center mt-1" onClick={() => deleteUser(user)} style={{color:'red', fontSize:'2rem', cursor:'pointer'}}></i>
        </td>

    </tr>
  )
}

UserComponent.propTypes = {
    user: PropTypes.instanceOf(User).isRequired,
    conected: PropTypes.func.isRequired,
    deleteUser:PropTypes.func.isRequired
}

export default UserComponent