import styled, { css } from "styled-components"
import { API_KEY } from "../../config"
import { useState, useEffect } from "react"
import BadSearch from "../badSearch"
import Loading from "../loading"
import next from "../../imagens/next.svg"
import previous from "../../imagens/previous.svg"

///////////////////// STYLED COMPONENTS /////////////////////
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, #00243f 35%, #3378a8 165%);
`

const Content = styled.div`
    width: 89%;
    text-align: center;

    h1{
        text-align: center;
        margin: 3rem 0;
        color: #FFF;
        text-decoration: underline;
    }

    h2{
        text-align: start;
        margin: 3rem 0;
        color: #FFF;
        text-decoration: underline;
    }
`

const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding-inline-start: 0px;
`

const commonStyles = css` // usarei como li na lista de filmes e como div no corrosel de filmes no cinema
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 100%;
        color: #FFF;
        text-align: center;
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`

const MovieListItem = styled.li`
    ${commonStyles}
`;

export const MovieDivItem = styled.div`
    ${commonStyles}
    margin: 20px 40px 20px 8px;
    flex: none;

    img{
        width: 150px;
        margin-bottom: 1rem;
    }

    span{
        color: #002f52;
        font-size: 15px;
        width: 150px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-top: 30px;

    h3{
        color:#FFF;
    }

`
const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    img:hover{
        ${({ disabled }) => !disabled && `
            &:hover {
                transform: scale(1.1);
            }
        `}
    }
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

////////////////////////////////////////////////////////////

export default function ListaFilmes({ nameMovie }) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        setPage(1); // Reinicia a página para 1 quando nameMovie mudar
    }, [nameMovie]);

    useEffect(() => {
        setIsLoading(true);
        //consumindo api
        if (nameMovie) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${API_KEY}&language=pt-BR&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setTotalPages(data.total_pages);
                    setMovies(data.results);
                    setIsLoading(false);
                })
        }
        else {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setTotalPages(data.total_pages);
                    setMovies(data.results);
                    setIsLoading(false);
                })
        }

    }, [nameMovie, page])

    const handlePrevious = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return <Loading />; // Mostra uma mensagem de carregamento enquanto os dados são buscados
    }

    return (
        <Container>
            <Content>
                {nameMovie === "" ? <h1>Filmes Populares</h1>
                    : <h2>Resultado para "{nameMovie}"</h2>}
                {movies.length !== 0 ?
                    <MovieList>
                        {movies.map(movie => {
                            if (movie.poster_path != null) {
                                return (
                                    <MovieListItem key={movie.id}>
                                        <a href="https://www.google.com.br/"><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></a>
                                        <span>{movie.title}</span>
                                    </MovieListItem>
                                )
                            }
                            else {
                                return null;
                            }
                        })}
                    </MovieList>
                    :
                    <BadSearch />}
            </Content>
            {movies.length > 0
                &&
                <Buttons>
                    <Button
                        onClick={handlePrevious}
                        disabled={page <= 1}
                    ><img img src={previous} alt="previous button" /></Button>
                    <h3>Pagina {page}</h3>
                    <Button
                        onClick={handleNext}
                        disabled={page === totalPages}
                    ><img src={next} alt="next button" /></Button>
                </Buttons>
            }



        </Container>
    )
}