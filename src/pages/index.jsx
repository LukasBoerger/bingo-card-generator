import Layout from "./Layout.jsx";

import BingoGenerator from "./BingoGenerator";

import Home from "./Home";

import Privacy from "./Privacy";

import Impressum from "./Impressum";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    BingoGenerator: BingoGenerator,
    
    Home: Home,
    
    Privacy: Privacy,
    
    Impressum: Impressum,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<BingoGenerator />} />
                
                
                <Route path="/BingoGenerator" element={<BingoGenerator />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Privacy" element={<Privacy />} />
                
                <Route path="/Impressum" element={<Impressum />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}