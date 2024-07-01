import { useNavigate, NavLink } from "react-router-dom";
import React from 'react';
import "../css/NavBar.css";
import "@fontsource/roboto/400.css"; 
import { useEffect, useState } from "react";



export default function NavBar({curPage}) {

    const navigate = new useNavigate();

    return (
        <nav className="nav">
            <a href="/home"><h1>Barnett Han</h1></a>
            <ul style={{marginRight: 50}}>
                <li className="special">
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "home" ? 'underline' : 'none'}} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "project" ? 'underline' : 'none'}} to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "resume" ? 'underline' : 'none'}} to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "about" ? 'underline' : 'none'}} to="/about">About Me</NavLink>
                </li>
            </ul>
        </nav>
    )
}