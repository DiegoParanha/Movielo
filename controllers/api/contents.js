const Content = require("../../models/content.js");
const fetch = require("node-fetch");
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

module.exports = {
  index,
  search, 
  show
};

async function search(req, res) {
    const searchItem = req.query.searchItem;
    if (!search) return null
    const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=${searchItem}`)
    const searchData = await response.json()
    console.log(searchData.Search)
    res.json(searchData.Search);
}


async function index(req, res) {
  let contents = await fetch(
    `https://www.omdbapi.com/?apikey=89090323&s=avengers`
    // `https://www.omdbapi.com/?apikey=89090323&${s=search}`
    // `${BASE_URL}apikey=${API_KEY}&s=${searchItem}`

  ).then((response) => response.json());
  console.log(contents);
  res.json(contents);
}

async function show(req, res) {
  let content = await Content.findOne({imdbID: req.params.id})
  if (!content) {
    content = await fetch(`${BASE_URL}apikey=${API_KEY}&i=${req.params.id}`).then((response) => response.json())
    const newContent = {
      Title: content.Title, 
      Year: content.Year,
      Rated: content.Rated,
      Plot: content.Plot,
      Released: content.Released, 
      Type: content.Type,
      Poster: content.Poster,
      imdbID: content.imdbID 
    };
    content = await Content.create(newContent);
    console.log(content)
  }
  res.json(content);
}