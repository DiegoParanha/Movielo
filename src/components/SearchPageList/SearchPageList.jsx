import ContentList from "../../pages/ContentList/ContentList";



export default function SearchPageList({results, idx, handleDetail}) {

    return (
        <div key={idx}>
            <ul key={idx}>
                <li>{results.Title}</li>
                <li>{results.Year}</li>
                <li>{results.Type}</li>
                <img className="poster" src={results.Poster} alt={results.Title} onClick={() => handleDetail(results.imdbID)} />
            </ul>
        </div>
    )
}