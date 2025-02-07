import Image from 'next/image'; 
import Link from 'next/link'; 
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/*logo*/}
        <Image src="/Logo.png" alt="Logo" className={styles.logo} width={200} height={200} />

        {/* Structure */}
        <form className={styles.form}>
          {/* Email Input */}
          <div className={styles.inputContainer}>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
            <label htmlFor="email" className={styles.label}>Email</label>
          </div>

          {/* Password Input */}
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              required
            />
            <label htmlFor="password" className={styles.label}>Password</label>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>

        {/* Forget password link*/}
        <Link href="/forgot-password" className={styles.link}>
          Forget Password?
        </Link>

        {/*Sign-up prompt*/}
        <h3 className={styles.prompt}>
          Don't have an account? <Link href="/signup" className={`${styles.link} ${styles.signUpLink}`}>Sign up!</Link>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
