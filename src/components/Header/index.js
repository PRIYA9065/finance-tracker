import React from "react";
import "./styles.css";

function Header(){

    function logoutFun(){
        alert("Logout!");
    }

    return <div class="navbar">
        <p class="logo">Financely.</p>
        <p class="logo link" onClick={logoutFun}>Logout</p>
    </div>;
}

export default Header;