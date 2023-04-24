import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

import {Routes, Route} from 'react-router-dom';

function Router() {
    return (  
        <Routes>
            <Route path='/:category/:search/:keyword' element={<Catalog/>} />
            <Route path='/:category/:id' element={<Detail/>} />
            <Route path='/:category' element={<Catalog/>} />
            <Route path='/' element={<Home/>} exact />
        </Routes>
    );
}

export default Router;