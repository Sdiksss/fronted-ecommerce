import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import { Link } from 'react-router-dom'
import './styles/Login.css'


const Login = () => {

    const { register, handleSubmit, reset } = useForm()

    const { loginUser } = useAuthentication()

    const submit = data => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        }

        )
    }

    return (
        <div className='login-container'>
            <div className='login-account'>
                <h2>Welcome back</h2>
                <p>Login with your Google account</p>
                <div className='login-google'>
                    <i className='bx bxl-google' ></i> Login with Google
                </div>
                <div className='line-continue'>
                    <span>Or continue with</span>
                </div>

            </div>
            <form className='login-form' onSubmit={handleSubmit(submit)} action="">
                <div className='login-form__email-div'>
                    <label htmlFor="email">Email</label>
                    <input className='login-form__email-input'
                        placeholder='name@example.com'
                        {...register('email')} type="email" id='email' />
                </div>
                <div className='login-form__pass-div'>
                    <label htmlFor="password">Password</label>
                    <input className='login-form__email-input'
                        {...register('password')} type="password" id='password' />
                </div>
                <button className='login-form__btn'>Login</button>
            </form>
            <div >
                <p>Dont have an account?</p> <Link to={'/register'} > Sign up</Link>

            </div>
        </div>
    )
}

export default Login