import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: 'test1@test.com',
    password: '123456',
    rememberme: false,
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setForm((form) => ({
        ...form,
        email,
        rememberme: true,
      }));
    }
  }, []);

  const { email, password, rememberme } = form;

  const onChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !rememberme,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    rememberme ? localStorage.setItem('email', email) : localStorage.removeItem('email');

    const ok = await login(email, password);

    if (!ok) {
      Swal.fire('Error', 'Verify username and password', 'error');
    }
  };

  const allOk = () => {
    return email.length && password.length > 0;
  };

  return (
    <form className='login100-form validate-form flex-sb flex-w' onSubmit={handleSubmit}>
      <span className='login100-form-title mb-3'>Chat - Login</span>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
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
          onChange={onChange}
        />
        <span className='focus-input100'></span>
      </div>

      <div className='row mb-3'>
        <div className='col' onClick={toggleCheck}>
          <input
            className='input-checkbox100'
            id='ckb1'
            type='checkbox'
            name='rememberme'
            checked={rememberme}
            readOnly
          />
          <label className='label-checkbox100'>Remember me</label>
        </div>

        <div className='col text-right'>
          <Link to='/auth/register' className='txt1'>
            New account?
          </Link>
        </div>
      </div>

      <div className='container-login100-form-btn m-t-17'>
        <button className='login100-form-btn' type='submit' disabled={!allOk()}>
          Login
        </button>
      </div>
    </form>
  );
};
