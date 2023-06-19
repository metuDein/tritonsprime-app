import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import useAuth from '../hook/useAuth';






const EmailLogin = () => {
    const {auth, setAuth} = useAuth()

    const navigate = useNavigate() 

    const [currentForm, setCurrentForm] = useState(1);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    

    const changeToSignUp = () => {
        setCurrentForm(old => old + 1);
    }
    const changeTologin = () => {
        setCurrentForm(old => old - 1);
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if(!userName || !email || !password) return window.alert('all field are required');

        try {
            const response = await axios.post('/userregister', JSON.stringify({ username : userName, email : email, password : password }));
            console.log(response.data.message)
            console.log(response.status)
            if(response.status === 201){

                setUserName('');
                setEmail('');
                setPassword('');
                setAuth(response.data)
                    window.alert('registration successful')
                setTimeout(() => {
                    navigate('/user-profile')
                }, 3000);
            }
        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status)
        }

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!userName || !password) return window.alert('all field are required');

        try {
            const response = await axios.post('/userlogin', JSON.stringify({ username : userName, password : password }));
            console.log(response.data)
            console.log(response.status)
            if(response.status === 200){
                setUserName('');
                setPassword('');
                setAuth(response.data)
                window.alert('login successful')
                setTimeout(() => {
                    navigate('/user-profile')
                }, 3000);
            }
        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status)
        }
    }

    const setForm = () => {
        switch (currentForm) {
            case 1:
                return (
                    <>
                    <h1 style={{textAlign : 'center'}}>Welcome Back</h1>
                    <span> </span>
                        <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                Username
                            </label>
                            <input
                                type="text"
                                name='nftName'
                                id='file-name'
                                placeholder='User name'
                                onChange={e => setUserName(e.target.value)}
                                value={userName}
                            />
                        </div>
                        <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                Password
                            </label>
                            <input
                                type="password"
                                name='nftName'
                                id='file-password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <span onClick={changeToSignUp} className='directtoauth'>No account yet Create an Account</span>

                        <button className='login--btn' onClick={handleLogin}>
                            <span> Login </span>
                        </button>
                    </>
                );
                case 2: 
                return (
                    <>
                    <h1 style={{textAlign : 'center'}}>Welcome to TritonsPrime</h1>
                        <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                User Name
                            </label>
                            <input
                                type="text"
                                name='nftName'
                                id='file-name'
                                placeholder='User name'
                                onChange={e => setUserName(e.target.value)}
                                value={userName}
                            />
                        </div>
                        <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                Email
                            </label>
                            <input
                                type="text"
                                name='nftName'
                                id='file-name'
                                placeholder='Email'
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                Password
                            </label>
                            <input
                                type="password"
                                name='nftName'
                                id='file-name'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <span  onClick={changeTologin}  className='directtoauth'>Already signed up Login</span>

                        <button className='login--btn' onClick={handleRegister}>
                            <span> Sign up </span>
                        </button>
                    </>
                )
                

            default:
                return null;
        }
    }

    return (
        <section className='wallet--sect'>
            <div className='connect--wallet'>
                <form className='email--login'>
                    {setForm()}
                </form>
            </div>
        </section>
    )
}

export default EmailLogin