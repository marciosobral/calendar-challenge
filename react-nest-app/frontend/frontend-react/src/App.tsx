import './App.css';
import Footer  from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import { WhoIAm } from "./components/Body/WhoIAm/WhoIAm.tsx";
/* import { Contact } from './components/Body/Contact/Contact.tsx'; */
import { AboutMe } from './components/Body/AboutMe/AboutMe.tsx';
import { Skills } from './components/Body/Skills/Skills.tsx';
import { MyProjects } from './components/Body/MyProjects/Projects.tsx';
import { ProfessionalXp } from './components/Body/ProfessionalXp/ProfessionalXp.tsx';
import { AppRoutes } from './Routes.tsx';

function App() {
  return (
    <>
      <Header />
      <WhoIAm />
      <AboutMe />
      <Skills />
      <MyProjects />
      <ProfessionalXp />
{/*       <Contact /> */}
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
