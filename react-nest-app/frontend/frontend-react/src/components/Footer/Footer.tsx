import styles from './footer.module.css'

interface FooterProps {
  homePage?: boolean;
}

export default function Footer({ homePage } : FooterProps): JSX.Element {
  const homePageStyle = homePage
  ? `${styles.footer} ${styles.homePage}`
  : styles.footer;

  return (
    <>
      <footer className={homePageStyle} >Desenvolvido por Márcio Sobral</footer>
    </>
  )
}