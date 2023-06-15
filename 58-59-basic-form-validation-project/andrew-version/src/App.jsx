import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [formClassEmail, setFormClassEmail] = useState('form-group');
  const [formClassPassword, setFormClassPassword] = useState('form-group');

  // const emailRef = useRef('');
  // const passwordRef = useRef('');
  // const email = emailRef.current.value;
  // const password = passwordRef.current.value;

  useEffect(() => {
    console.log('email: ' + email);
    if (email === '' && password === '') return;
    validation(email, password);
  }, [email, password]);

  function validation(email, password) {
    console.log(email, password);
    if (email === '') {
      setFormClassEmail('form-group error');
      // toast.error('Please enter a valid email address');
      setMessage('Please enter a valid email address');
    } else {
      setFormClassEmail('form-group');
      setMessage('');
    }

    if (validateEmailDomain(email) === false && email !== '') {
      setFormClassEmail('form-group error');
      // toast.error('Must end in @webdevsimplified.com');
      setMessage('Must end in @webdevsimplified.com');
    } else {
      setFormClassEmail('form-group');
      setMessage('');
    }

    if (password === '' || validatePassword(password) === false) {
      setFormClassPassword('form-group error');
      // toast.error('Please enter a valid password');
    } else {
      setFormClassPassword('form-group');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmailDomain(email) && validatePassword(password) === true) {
      return toast('Success');
    }
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className={`${formClassEmail}`}>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // ref={emailRef}
          />
          <div className='msg'>{message}</div>
        </div>
        <div className={`${formClassPassword}`}>
          <label className='label' htmlFor='password'>
            Password
          </label>
          <input
            className='input'
            value={password}
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            // ref={passwordRef}
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </form>
    </>
  );
}

function validateEmailDomain(email) {
  const REGEX_PATTERN = /^[^\s@]+@webdevsimplified\.com$/;
  return REGEX_PATTERN.test(email);
}

function validatePassword(password) {
  const REGEX_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  return REGEX_PATTERN.test(password);
}

export default App;
