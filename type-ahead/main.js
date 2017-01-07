'use strict';

const endpoint = 'https://gist.githubusercontent.com/filbot/22a4823e9abf463929420cd7618d4d86/raw/355e86b9c478169895ff2938f022ef4b8b2504bb/cities.json';

const citiesArray = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => citiesArray.push(...data))

function findMatches(wordToMatch, citiesArray) {
  return citiesArray.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.name.match(regex) || place.state.match(regex);
  })
}
