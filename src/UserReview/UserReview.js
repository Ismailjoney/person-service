import React from 'react';
import { Image } from 'react-bootstrap';
import Noimg from '../assets/Noimg.png'


const UserReview = ({ rvw, user }) => {

    console.log(user);

    const { message } = rvw;
    return (
        <div>
            {
                user?.uid && user?.photoURL ?
                    <>
                        <Image
                            data-tip data-for="registerTip"
                            style={{ height: `48px`, color: 'white' }}
                            roundedCircle
                            src={user?.photoURL}
                        ></Image>
                       <p> {user?.displayName ? user.displayName : 'no name'}</p>
                       <p>{user.email}</p>
                        <p> {message}</p>
                    </>
                    :
                    <>
                    <img className='border ' style={{width: '40px', height:`40px`, display:'inline-block'}} src={Noimg} alt="" />  <p>{message}</p>
                       
                    </>
            }

        </div>
    );
};

export default UserReview;