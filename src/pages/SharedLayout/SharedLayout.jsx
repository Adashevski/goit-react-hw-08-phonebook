import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './SharedLayout.module.css';
import AppBar from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div className={styles.appBar}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
