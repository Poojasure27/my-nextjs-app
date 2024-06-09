import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './register.module.css';
import logo from '../../public/assets/images/logo.png';
import image from '../../public/assets/images/dashboard.png';
import emailIcon from '../../public/assets/icons/mail.svg';
import lockIcon from '../../public/assets/icons/lock.svg';
import eyeIcon from '../../public/assets/icons/eye-closed.svg';
import userIcon from '../../public/assets/icons/user.svg';


const Register: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <div className={styles.registerLogo}>
          <Image src={logo} alt="Logo" width={141} height={70} />
        </div>
        <div className={styles.registerForm}>
          <div className={styles.signUp}>
            <h2>Sign Up</h2>
            <p>If you already have an account you <br />can <Link href="/login"><strong>Login here!</strong></Link></p>
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
              <label htmlFor='username'>Username</label>
              <div className={styles.inputWithIcon}>
              <Image src={userIcon} alt="User Icon" width={17} height={17} className={styles.leftIcon} />
              <input type="text" id="username" placeholder="Enter your user name" required />
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
            <div className={styles.inputGroup}>
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className={styles.inputWithIcon}>
                <Image src={lockIcon} alt="Password Icon" width={17} height={17} className={styles.leftIcon} />
              <input type="password" id="confirm-password" placeholder="Confirm your Password" required />
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
            <button type="submit" className={styles.registerButton}>Register</button>
          </form>
        </div>
      </div>
      <div className={styles.registerImage}>
        <Image src={image} alt="dashboard-img" className={styles.dashImg} width={400} height={400} />
        <div className={styles.signText}><h2>Sign Up to your Dashboard</h2></div>
      </div>
    </div>
  );
}

export default Register;
