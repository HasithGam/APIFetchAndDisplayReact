import React from "react";
import logo from '../../logo.svg';

function HeaderBar(){
    return(
        <>
            <div className="App">
                <header className="App-header">
                <h2>REACT API Fetch <img src={logo} className="App-logo" alt="logo" /></h2>
                </header>
            </div>
            
            <nav className="navbar navbar-light bg-light shadow-sm">
                <span className="navbar-brand mb-0 mt-2 h1">NameList</span>
            </nav>
        </>
    )
}
export default HeaderBar;