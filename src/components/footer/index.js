import styled from "styled-components";
import Logo from "../logo";
import instagram_logo from "../../imagens/instagram_logo.svg"
import linkedin_logo from "../../imagens/linkedin_logo.svg"
import github_logo from "../../imagens/github_logo.svg"
import email_logo from "../../imagens/email.svg"
import whatsapp_logo from "../../imagens/whatsApp_logo.svg"

///////////////////// STYLED COMPONENTS /////////////////////
const FooterWrapper = styled.div`
    background-image: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%); background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FooterContent = styled.div`
    width: 89%;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 715px){
        display: grid;
        grid-template-columns: repeat(1, auto);
        align-items: center;
        justify-content: center;
    }
`

const Section = styled.div`
    h3{
        color: #FFF;
    }

    @media screen and (max-width: 715px){
        h3{
            margin: 30px 0px 10px 0px;
        }
    }
`

const LinkRow = styled.div`
    min-width: 200px;
    display: flex;
    padding: 5px 0;
    margin-top: 2px;
    @media screen and (max-width: 715px){
        flex-direction: column;
        padding: 0px;
        h5{
            margin: 10px 0px;
        }
    }

    a{
        color: #FFF;
        display: flex;
        align-items: center;
        text-decoration: none;
        &:hover{
            color: #cdcbcb;
            transform: scale(1.08);
            span{
                transform: scale(1.08);
                filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(70%) contrast(70%);
            }
        }
    }
    
    h5{
        color: #FFF;
        font-weight: 400;
        display: flex;
        align-items: center;
        cursor: pointer;
        
        span{
            display: flex;
            align-content: center;
            justify-content: center;
            margin-right: 10px;
            align-items: center;
        }
        &:hover{
            color: #cdcbcb;
            transform: scale(1.08);
            span{
                transform: scale(1.08);
                filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(70%) contrast(70%);
            }
        }
    }
`

const SubFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size:12px;
    padding: 40px 10px;
    cursor: default;
    user-select: none;
    text-align: center;
`

const Hr = styled.hr`
    width: 90%;
    margin: auto;
    border: none;
    border-top: 2px solid #afafbf33;
`

/////////////////////////////////////////////////////////////


export default function Footer() {
    const footerObj = [
        {
            id: 'section1',
            title: 'Desenvolvido Por',
            links: [
                {
                    name: 'Guilherme Teixeira Marin',
                    link: '#'
                },
                {
                    name: 'Meu portifólio',
                    link: '#'
                }
            ]
        },
        {
            id: 'section2',
            title: 'Fale Comigo',
            links: [
                {
                    name: 'Email',
                    link: '#',
                    icon: <img src={email_logo} alt="Email logo" />
                },
                {
                    name: 'WhatsApp',
                    link: 'http://wa.me/5518997407654',
                    icon: <img src={whatsapp_logo} alt="whatsapp logo" />
                }
            ]
        },
        {
            id: 'section3',
            title: 'Me siga nas redes socias',
            links: [
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com/guimrn16?igsh=OHhoZHQzYnFrZXcw&utm_source=qr',
                    icon: <img src={instagram_logo} alt="instagram logo" />
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/guilherme-teixeira-marin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
                    icon: <img src={linkedin_logo} alt="LinkedIn logo" />
                },
                {
                    name: 'GitHub',
                    link: 'https://github.com/GuiMarin0',
                    icon: <img src={github_logo} alt="GitHub logo" />
                }
            ]
        }
    ]

    return (
        <FooterWrapper>
            <FooterContent>
                {footerObj.map((elem, i) => (
                    <Section key={i}>
                        <h3>{elem.title}</h3>
                        {elem.links.map((link, j) =>
                            <LinkRow key={j}>
                                <h5>
                                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                                        {link.icon && <span>{link.icon}</span>}
                                        {link.name}
                                    </a>
                                </h5>
                            </LinkRow>
                        )}
                    </Section>
                ))}
            </FooterContent>

            <Hr />

            <SubFooter>
                <Logo cor="#FFF" />
                © {new Date().getFullYear()} Todos Direitos Reservados!
                <br></br>
                Fonte dos dados: TMDB API
            </SubFooter>
        </FooterWrapper>
    )
}