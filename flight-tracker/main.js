'use strict';

const endpoint = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=34.045648&lng=-118.232409&fDstL=0&fDstU=10';
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

const flightDataArray = [];

fetch(endpoint, myInit)
  .then(blob => blob.json())
  .then(data => citiesArray.push(...data))
