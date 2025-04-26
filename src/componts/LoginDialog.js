
import React, { useEffect,useState } from 'react'
import RegistrationD from './RegistrationD';
import axios from 'axios';



export default function LoginDialog({ isOpen, onClose , loginUser }) {
    const [RegDialog, setRegDialog] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const OpenDialogHandler1 = () => { setRegDialog(true)};
    const CloseDialogHandler1 = () => { setRegDialog(false) };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => { document.body.classList.remove('no-scroll'); }
    }, [isOpen]);

    if (!isOpen) return null;

    const loginHandler = async () => {
        try {
          
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password
            });
    
           
            alert(response.data.message);
            loginUser(response.data.token); 
            onClose();
        } catch (error) {
           
            alert(error.response?.data?.message || 'Something went wrong');
        }
    };
    
    
    return (
        <div className={`DialogMain_container ${isOpen ? '' : 'hidden'}`}>
            <div className={`dialogs login ${!RegDialog ? 'open' : ''}`}>
                <i className="fas fa-times close" onClick={onClose}></i>
                <span className='lab2'>Fashiony</span>
                <span className='LogTit'>LogIn</span>
                <div className='input_con'>

                    <input type="text" placeholder=" " required onChange={(e) => setEmail(e.target.value)}/>
                    <span>Email</span>
                </div>
                <div className='input_con'>

                    <input type="password" placeholder=" " required onChange={(e) => setPassword(e.target.value)} />
                    <span>Password</span>
                </div>
                <span className='forgotPass'>Forgot Password?</span>
                <button className='LoginBtns1' onClick={loginHandler}>LOGIN</button>
                <span className='create_ac'>If you don't have an account, <span onClick={OpenDialogHandler1}>Sign Up</span></span>

                <span className='logwithother'>Login With Other</span>
                <div className={`otherLogicon ${isOpen ? '' : 'hidden'}`}>

                    <i class="fab fa-google"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest"></i>

                </div>
            </div>
        <RegistrationD isOpen = {RegDialog} onClose = {CloseDialogHandler1}/>
        </div>
    )
}
