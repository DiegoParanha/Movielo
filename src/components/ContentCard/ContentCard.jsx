export default function ContentCard({contents}) {
    return (
        <div>
            <h1>Hello</h1>
            <p>{contents.Title}</p>
            <p>{contents.Year}</p>
            <p>{contents.Plot}</p>
            <p>{contents.Rated}</p>
            <p>{contents.Poster}</p>
            <p>{contents.Type}</p>
        </div>
    )
}