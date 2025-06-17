import React, { useReducer, useState } from 'react'
import "../App.css";

const initialState = {
  email: '',
  password: '',
  errors: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return {
        ...state, [action.field] : action.value,
      }
    case 'setErrors' :
      return {
        ...state, errors: action.errors
      }
    case 'reset':
      return initialState;

    default:
      return state;
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleChange = (e) => {
   const {name, value} = e.target;
   dispatch({
    type: 'updateField',
    field: name,
    value: value
   })
  }
  const handleSubmit = (e) => {
    const errs = {};
    e.preventDefault();
    if (!state.email) {
      errs.email = 'Email is required';
    }
    if (!state.password) {
      errs.password = 'Password is requried';
    }else if (state.password.length <= 3) {
      errs.password = 'Password must be at leaset 4 characters.'
    }

    if (Object.keys(errs).length !== 0) {
      dispatch({type: 'setErrors', errors: errs})
    }else{
      alert('Login Succesful');
      dispatch({type: 'reset'})

    }
  }

  return (
    <div className='simple-form-cotainer'>
        <h1>Login Account</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label>Email</label>
            <input type="email" name='email' placeholder='email' value={state.email} onChange={handleChange} />
          {state.errors.email && <p className='errors'>{state.errors.email}</p>}
          </div>
          <div className='input-container'>
            <label>Password</label>
            <input name='password' type="password" placeholder='************' value={state.password} onChange={handleChange} />
            {state.errors.password && <p className='errors'>{state.errors.password}</p>}
          </div>
            <div className='btn-container'>
          <button>Login</button>
        </div>
        </form>

    </div>
  )
}

export default Login
