import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Create from "./Create";
import Gallery from "./Gallery";
import Update from "./Update";
import Crewmate from "./Crewmate";
import './App.css';

const App = () => {


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index={true} element={<Home />} />
            <Route index={false} path="/create" element={<Create />} />
            <Route index={false} path="/gallery" element={<Gallery />} />
            <Route index={false} path="/update/:id" element={<Update />} />
            <Route index={false} path="/crewmate/:id" element={<Crewmate />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}


export default App;