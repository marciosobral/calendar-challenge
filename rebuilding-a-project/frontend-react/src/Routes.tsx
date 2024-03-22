import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Cursos } from "./pages/cursos/cursos";
import { Home } from "./pages/home/home";
import { Contato } from "./pages/contato/contato";
import Layout from "./layout.test";

export function AppRoutes(){
  return(
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cursos" element={<Cursos />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}