import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/useAuthentication';
import './styles/Register.css';

const Register = () => {
    const { createNewUser } = useAuthentication();
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        createNewUser(data);
        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: ''
        });
    };

    return (
        <div className="register-container">
            <div className="register-account">
                <h2>Create a new user</h2>
                <form className="register-form" onSubmit={handleSubmit(submit)}>
                    <div className="register-form__input-div">
                        <label htmlFor="firstName">First Name</label>
                        <input {...register('firstName')} type="text" id="firstName" />
                    </div>
                    <div className="register-form__input-div">
                        <label htmlFor="lastName">Last Name</label>
                        <input {...register('lastName')} type="text" id="lastName" />
                    </div>
                    <div className="register-form__input-div">
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id="email" />
                    </div>
                    <div className="register-form__input-div">
                        <label htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id="password" />
                    </div>
                    <div className="register-form__gender-div">
                        <label>Gender</label>
                        <div>
                            <label>
                                <input {...register('gender')} type="radio" value="MALE" />
                                Male
                            </label>
                            <label>
                                <input {...register('gender')} type="radio" value="FEMALE" />
                                Female
                            </label>
                            <label>
                                <input {...register('gender')} type="radio" value="OTHER" />
                                Other
                            </label>
                        </div>
                    </div>
                    <button className="register-form__btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
