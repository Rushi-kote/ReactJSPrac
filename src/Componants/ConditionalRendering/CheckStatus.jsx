import React from 'react'
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';

const CheckStatus = ({status}) => {
    if(status === true){
        return <UserLogin/>
    }else{
        return <UserLogout/>
    }
}

export default CheckStatus;
