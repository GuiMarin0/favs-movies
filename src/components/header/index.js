import Logo from "../logo"
import OpcoesHeader from "../opcoesHeader"
import IconesHeader from "../iconesHeader"
import { useEffect } from 'react';
import styled from 'styled-components';

///////////////////// STYLED COMPONENTS /////////////////////
const HeaderContainer = styled.header`
    background-color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 89%;
`
/////////////////////////////////////////////////////////////

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
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <OpcoesHeader />
                <IconesHeader toggleNavbar={toggleNavbar} isNavbarVisible={isNavbarVisible} />
            </HeaderContent>
        </HeaderContainer>
    )
}