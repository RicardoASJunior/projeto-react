import React from 'react'

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Catalogo from './components/pages/Catalogo';
import Novo from './components/pages/Novo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/Novo" element={<Novo />}>
        <Route index element={<Catalogo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
