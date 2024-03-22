import styles from './header.module.css'

interface HeaderProps {
  homePage?: boolean;
}

export default function Header({ homePage } : HeaderProps): JSX.Element {
  const marciosobral = homePage
  ? `${styles.marciosobral} ${styles.homePage}`
  : styles.marciosobral;

  const dev = homePage
  ? `${styles.dev} ${styles.homePage}`
  : styles.dev;

  const headerstyle = homePage
  ? `${styles.header} ${styles.homePage}`
  : styles.header;

  return (
    <>
      <header className={headerstyle} >
        <b>
          <b id={marciosobral}>marciosobral</b>
          <b id={dev}>.dev</b>
        </b>
      </header>
    </>
  )
}
