import styled from "styled-components"
import { API_KEY } from "../../config"
import { useState, useEffect } from "react"

///////////////////// STYLED COMPONENTS /////////////////////
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding-inline-start: 0px;
`

const Movie = styled.li`
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
        font-size: 120%;
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

////////////////////////////////////////////////////////////

export default function ListaFilmes({ nameMovie }) {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        //consumindo api
        if (nameMovie) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${API_KEY}&language=pt-BR`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        }
        else {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        }

    }, [nameMovie])

    return (
        <Container>
            <Content>
                {nameMovie === "" ? <h1>Filmes Populares</h1>
                    : <h1>Resultado para "{nameMovie}"</h1>}
                <MovieList>
                    {movies.map(movie => {
                        if (movie.poster_path != null) {
                            return (
                                <Movie key={movie.id}>
                                    <a href="#"><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></a>
                                    <span>{movie.title}</span>
                                </Movie>
                            )
                        }
                    })}
                </MovieList>
            </Content>
        </Container>
    )
}