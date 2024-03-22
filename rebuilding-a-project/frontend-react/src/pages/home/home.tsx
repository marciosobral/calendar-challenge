import styles from './home.module.css'

interface HomeProps {
  homePage?: boolean;
}

export function Home({ homePage } : HomeProps): JSX.Element {
  const headerinicial = homePage
  ? `${styles.headerinicial} ${styles.headerinicial}`
  : styles.headerinicial;
  return (
    <>
      <h1 className={headerinicial}> Olá! Seja bem-vindo ao site da monitoria do UniCEUB.</h1>
    </>
  )
}