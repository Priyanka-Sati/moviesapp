import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import { auth, provider } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import {logo} from '../public/images/logo.jpeg';
import {
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails,
  } from "./features/user/userSlice";


import './Nav.css';

function Nav(props) {
    const[show, handleShow] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        }
        else if(userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState())
            }).catch((err) => alert(err.message));
        }
    };

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email : user.email,
                photo : user.photoURL,
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
            }
        });
    }, [userName]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else 
                handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}> 
            <div className='nav_avatar'>
                <img src='./images/logo.png' style={{height: '3.5rem', width: '7rem', top: 0}}></img>
            </div>
            
            <div className='nav_login'>
            {
                !userName ? 
                (<Login onClick={handleAuth}>LOGIN</Login>) :
                (
                    <>
                        <Login>My list</Login>
                        <Login onClick={handleAuth}>LOGOUT</Login>
                    </>
                )
            }
            </div>
        </div>
    )
}

const Login = styled.a`
    background-color : rgba(0, 0, 0, 0.6);
    padding: 5px 12px;
    text-transform : uppercase;
    letter-spacing : 1.5px;
    border : 1px solid #f9f9f9;
    border-radius : 4px;
    margin: 2px;
    transition : all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color : transparent;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;

export default Nav
