import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";

import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

const PrivateOutlet = () => {
  if (localStorage.getItem('token') === null) {
    Swal.fire({
      icon: 'error',
      title: 'Error.',
      text: 'Please fill your details first.',
    })
    return <Navigate to="/" />
  }
  return <Outlet />
}

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page2" element={<PrivateOutlet />} >
        <Route path="/page2" element={<PageTwo />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
