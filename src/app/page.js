import Image from "next/image";
import Movie from "../components/movie"

export default async function Home() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=643839bd098675576fce2ab7f6d4f1f0`;
    const data = await fetch(url);
    const res = await data.json();
    await delay(1000);

    return (
        <div className="grid gap-4 grid-cols-6">
            {res.results.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                />
            ))}
        </div>
    );
}

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}
