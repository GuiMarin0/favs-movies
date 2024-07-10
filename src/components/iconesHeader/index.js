import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './estilo.css'

const icones = [perfil, sacola];

export default function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li><img src={icone}></img></li>
            ))}
        </ul>
    )
}