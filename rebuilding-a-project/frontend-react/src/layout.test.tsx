import Footer from './components/footer/Footer'
import { Header } from './components/header/Header'

function Layout(props : {children : React.ReactNode}) {
  return (
    <>
      <Header />
      {props.children}
      <Footer homePage={true} />
    </>
  )
}

export default Layout
