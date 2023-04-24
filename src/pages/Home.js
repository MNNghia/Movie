
import { Link } from "react-router-dom";
import Slide from "../components/slide";
import { OutlineButton } from "../components/button";

import MovieList from '../components/movie-list'

import { category, movieType, tvType } from '../api/tmdbApi'

function Home() {
    return (
        <>
            <Slide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>

            </div>
        </>
    );
}

export default Home;