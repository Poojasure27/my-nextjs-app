import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';
import logo from '../../public/assets/images/logo.png';
import image from '../../public/assets/images/dashboard.png';
import emailIcon from '../../public/assets/icons/mail.svg';
import lockIcon from '../../public/assets/icons/lock.svg';
import eyeIcon from '../../public/assets/icons/eye-closed.svg';

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <Image src={logo} alt="Logo" />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.signIn}>
            <h2>Sign In</h2>
            <p>
              If you don't have an account you
              <br />
              can <strong><Link href="/register">Register here!</Link></strong>
            </p>
          </div>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <div className={styles.inputWithIcon}>
                <Image src={emailIcon} alt="Email Icon" width={17} height={17} className={styles.leftIcon} />
                <input type="email" id="email" placeholder="Enter your email address" required />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWithIcon}>
                <Image src={lockIcon} alt="Password Icon" width={17} height={17} className={styles.leftIcon} />
                <input type="password" id="password" placeholder="Enter your Password" required />
                <Image src={eyeIcon} alt="Eye Icon" width={17} height={17} className={styles.rightIcon} />
              </div>
            </div>
            
            <div className={styles.options}>
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>
        </div>
      </div>
      <div className={styles.loginImage}>
        <Image src={image} alt="dashboard-img" className={styles.dashImg} />
        <div className={styles.signText}>
          <h2>Sign in to your Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
