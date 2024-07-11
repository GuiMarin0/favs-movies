import './estilo.css'
import Logo from "../logo"
import OpcoesHeader from "../opcoesHeader"
import IconesHeader from "../iconesHeader"
import ResponsiveNavbar from '../responsiveNavbar'
import { useState, useEffect } from 'react';

export default function Header({ isNavbarVisible, toggleNavbar, setNavbarVisible }) {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1010) {
                setNavbarVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='App-header'>
            <div className='content content-header'>
                <Logo />
                <OpcoesHeader />
                <IconesHeader toggleNavbar={toggleNavbar} isNavbarVisible={isNavbarVisible} />
            </div>
        </header>
    )
}