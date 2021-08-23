import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import s from './RegisterView.module.css';



export default function RegisterView() {
//   const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}><p className={s.text}>Name</p>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={s.label}><p className={s.text}>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}><p className={s.text}>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.btn}>Registration</button>
      </form>
    </div>
  );
}