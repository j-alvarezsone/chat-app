import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

export const RegisterPage = () => {
  const [form, setForm] = useState({
    name: 'Alberto',
    email: 'albert@gmail.com',
    password: '123456',
  });

  const { name, email, password } = form;
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const msg = await register(name, email, password);
    if (msg !== true) {
      Swal.fire('Error', msg, 'error');
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const allOk = () => {
    return name.length && email.length && password.length > 0;
  };

  return (
    <form className='login100-form validate-form flex-sb flex-w' onSubmit={handleSubmit}>
      <span className='login100-form-title mb-3'>Chat - Register</span>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={handleChange}
        />
        <span className='focus-input100'></span>
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
        <span className='focus-input100'></span>
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChange}
        />
        <span className='focus-input100'></span>
      </div>

      <div className='row mb-3'>
        <div className='col text-right'>
          <Link to='auth/login' className='txt1'>
            You already have an account?
          </Link>
        </div>
      </div>

      <div className='container-login100-form-btn m-t-17'>
        <button className='login100-form-btn' type='submit' disabled={!allOk()}>
          Create Account
        </button>
      </div>
    </form>
  );
};
