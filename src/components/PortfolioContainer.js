import React, { useState } from "react";
import NavBars from "./NavBars";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Footer from "./Footer"
import './PortfolioContainer.css'

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    // const contactForm = () =>{
    //     const [info, setInfo] = useState([])
    // }

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className="app">
            <div className="container">
                <NavBars currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Footer />
            </div>
        </div>
    )
}

export default PortfolioContainer;