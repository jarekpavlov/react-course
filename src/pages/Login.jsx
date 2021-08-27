import React, {useContext} from 'react';
import MyInput from "../components/ui/input/MyInput";
import MyButton from "../components/ui/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)


    const login = (event) =>{
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onClick={(e)=>{login(e)}}>
                <MyInput type = 'text' placeholder = 'enter login'></MyInput>
                <MyInput type = 'password' placeholder = 'enter password'></MyInput>
                <MyButton>Sign in</MyButton>
            </form>
            
        </div>
    );
};

export default Login;