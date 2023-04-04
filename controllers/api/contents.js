const Content = require("../../models/content.js");
const fetch = require("node-fetch");
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

module.exports = {
  index,
  search, 
  show,
  addToWatchList,
  getWatchList,
  getWatchedList,
  addToWatchedList

};

async function getWatchedList(req, res) {
  const contents = await Content.find({usersWatchedList: req.user._id})
  res.json(contents)
}

async function addToWatchedList(req, res) {
  const content = await Content.findById(req.params.id);
  content.usersWatchedList.push(req.user._id)
  await content.save();
  res.json(content);
}

async function getWatchList(req, res) {
  const contents = await Content.find({usersWatchList: req.user._id})
  res.json(contents)
}

async function addToWatchList(req, res) {
  const content = await Content.findById(req.params.id);
  content.usersWatchList.push(req.user._id)
  await content.save();
  res.json(content);
}

// async function removeFromWatchList(req, res) {
//   const content = await Content.findById(req.params.id);
//   // if (content.usersWatchList.includes(req.user._id)) {
//   //   content.usersWatchList.remove(req.user._id)
//   // } else {
//     content.usersWatchList.remove(req.user._id)
//   // }
//   await content.save();
//   res.json(content);
// }

async function addToWatchList(req, res) {
  const content = await Content.findById(req.params.id);
  content.usersWatchList.push(req.user._id)
  await content.save();
  res.json(content);
}

async function search(req, res) {
    const searchItem = req.query.searchItem;
    if (!search) return null
    const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=${searchItem}&page=1`)
    const searchData = await response.json()
    res.json(searchData.Search);
}


async function index(req, res) {
  let contents = await fetch(
    `https://www.omdbapi.com/?apikey=89090323&s=avengers`
    // `https://www.omdbapi.com/?apikey=89090323&${s=search}`
    // `${BASE_URL}apikey=${API_KEY}&s=${searchItem}&page=1`

  ).then((response) => response.json());
  res.json(contents);
}

async function show(req, res) {
  let content = await Content.findOne({imdbID: req.params.id}).populate("comments.user", "name")
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
    await content.populate("comments.user", "name")
  }
  res.json(content);
}