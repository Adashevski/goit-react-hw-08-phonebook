import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import styles from './UserMenu.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
