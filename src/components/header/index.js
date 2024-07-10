import './estilo.css'
import Logo from "../logo"
import OpcoesHeader from "../opcoesHeader"
import IconesHeader from "../iconesHeader"

export default function Header() {
    return (
        <header className='App-header'>

            <Logo />
            <OpcoesHeader />
            <IconesHeader />

        </header>
    )
}