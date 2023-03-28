const Content = require("../../models/content.js");
const fetch = require("node-fetch");
const { response } = require("express");
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
    // const url = `${BASE_URL}apikey=${API_KEY}&s=${searchItem}`
    // let results = await fetch(`https://www.omdbapi.com/?apikey=89090323&${s=search}`)
    const response = await fetch `${BASE_URL}apikey=${API_KEY}&s=${searchItem}`
    // const response = await results.json
    const searchData = await response.json()
    // return response;
    res.json(searchData.results);
}


async function index(req, res) {
  let contents = await fetch(
    `https://www.omdbapi.com/?apikey=89090323&s=batman`
    // `https://www.omdbapi.com/?apikey=89090323&${s=search}`

  ).then((response) => response.json());
  // console.log(contents);
  res.json(contents);
}

async function show(req, res) {
  let content = await Content.findOne({id: req.params.id})
  if (!content) {
    content = await fetch(`${BASE_URL}apikey=${API_KEY}&i=${req.params.id}`).then((response) => response.json())
    const newContent = {
      title: content.id, 
      year: content.year,
      rated: content.rated,
      plot: content.rated,
      released: content.released, 
      type: content.type,
      poster: content.poster,
      imdbID: content.imdbID 
    };
    content = await content.create(newContent);
  }
  res.json(content);
}