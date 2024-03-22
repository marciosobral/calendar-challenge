import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Test} from "./pages/Test";

export function AppRoutes(){
  return(
    <Router>
      <Routes>
        <Route path="/test" element={<Test />}>
        </Route>
      </Routes>
    </Router>
  )
}