

export default function SearchPageList({results, idx, handleDetail}) {

    return (
        <>
            <div className="container" key={idx}>
                <h3 className="title">{results.Title}</h3>
                <img className="poster" src={results.Poster} alt={results.Title} onClick={() => handleDetail(results.imdbID)} />
                <div className="row">
                    <p className="info">{results.Year} · {results.Type}</p>
                </div>
            </div>
        </>
    )
}
