import styles from './about.module.css'

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <nav>About Nav</nav>
      <main className={styles.about}>{children}</main>
    </>
  );
}
