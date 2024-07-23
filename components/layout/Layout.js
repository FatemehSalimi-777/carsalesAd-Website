import Link from "next/link";
import styles from "../layout/Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Sales Ads Website</h2>
          <p>Choose & Buy Your Car Online</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Car Sales Ads Next.js Project | Developed By{' '}
        <a href="https://github.com/FatemehSalimi-777" target="_blank">
          Fatemeh Salimi
        </a>{' '}
        from 🌎 &copy;
      </footer>
    </>
  );
}

export default Layout;
