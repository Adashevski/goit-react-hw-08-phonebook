import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const password = form.elements.password.value;

    if (password.length <= 6) {
      Notiflix.Notify.failure('Password must be at least 7 characters');
      return;
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password,
      })
    );

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <h1>New User</h1>
      <label className={styles.label}>
        Username
        <input type="text" name="name" placeholder="Enter your username" />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </label>
      <button className={styles.btn} type="submit">
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
