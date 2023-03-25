const Content = require("../../models/content.js");
const fetch = require("node-fetch");
const { response } = require("express");
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.APIKEY;

module.exports = {
  index,
  search
};

async function search() {
    const search = req.query.s;
    let results = await fetch(`https://www.omdbapi.com/?apikey=89090323&${s=search}`)
    const response = await results.json
    return response;
}


async function index(req, res) {
  let contents = await fetch(
    `https://www.omdbapi.com/?apikey=89090323&s=batman`
  ).then((response) => response.json());
  console.log(contents);
  res.json(contents);
}

