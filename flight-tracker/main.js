'use strict';

const endpoint = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=34.045648&lng=-118.232409&fDstL=0&fDstU=10';
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

const flightDataArray = [];


fetch(flightDataArray, myInit).then(function(response) {
  if(response.ok) {
    response.blob().then(function(myBlob) {
      console.log(myblob);
    });
  } else {
    console.log('Network response was not ok.');
  }
})
.catch(function(error) {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});


