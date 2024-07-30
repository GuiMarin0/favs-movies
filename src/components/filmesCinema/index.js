import styled from "styled-components";
import { MovieDivItem } from "../listaFilmes";
import { API_KEY } from "../../config";
import { useState, useEffect, useRef } from "react";
import next from "../../imagens/next.svg";
import previous from "../../imagens/previous.svg";

///////////////////// STYLED COMPONENTS /////////////////////
const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: #e1e1e1;
    justify-content: center;
`

const Content = styled.div`
    width: 89%;
    text-align: center;
    ::-webkit-scrollbar{
        display: none;
    }
`

const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

`

const Buttons = styled.div`
    display: flex;
    width: 89%;
    justify-content: space-between;

    img:hover{
        transform: scale(1.1);
    }
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    img{
        filter: invert(93%) sepia(50%) saturate(5000%) hue-rotate(220deg) brightness(85%) contrast(100%);
    }
`

const ContainerTitle = styled.div`
    width: 100%;
    text-align: center;
    background-color: #fff;
`

const Title = styled.h1`
    color:#fd8325;
`

/////////////////////////////////////////////////////////////

export default function FilmesCinema() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const carousel = useRef(null);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetchMovies(page);
    }, [page]);


    const fetchMovies = async (page) => {
        setIsFetching(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=${page}`);
        const data = await response.json();

        setMovies((prevMovies) => [...prevMovies, ...data.results]);

        setIsFetching(false);
    };

    const handleScroll = () => {
        if (carousel.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carousel.current;
            if (scrollLeft + clientWidth >= scrollWidth - clientWidth / 2 && !isFetching) {
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth / 1.1
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth / 1.1
    }

    if (!movies || !movies.length) return null;

    return (
        <Container>
            <ContainerTitle>
                <Title>HOJE NOS CINEMAS</Title>
            </ContainerTitle>
            <Content>
                <Carousel ref={carousel} onScroll={handleScroll}>
                    {movies.map(movie => {
                        return (
                            <MovieDivItem >
                                <a href="https://www.google.com.br/"><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></a>
                                <span>{movie.title}</span>
                            </MovieDivItem>
                        )
                    })}
                </Carousel>
            </Content>
            <Buttons>
                <Button
                    onClick={handleLeftClick}
                ><img src={previous} alt="scroll left" /></Button>

                <Button
                    onClick={handleRightClick}
                ><img src={next} alt="scroll right" /></Button>
            </Buttons>
        </Container>
    )
}