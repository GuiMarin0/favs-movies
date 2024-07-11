import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA PRATELEIRA'];

export default function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
                <li><a href='#'>{texto}</a></li>
            ))}
        </ul>
    )
}