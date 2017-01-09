'use strict';

const endpoint = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=34.045648&lng=-118.232409&fDstL=0&fDstU=100';

let flightData = [];

let flighCard = document.getElementById('flight-card');

const getFlightData = function() {
    $.ajax({
        url: endpoint,
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (result) {
            flightData = result.acList.filter(filterFlightData);
            flightData = flightData.map(formatFlightData);
            displayFlightData(flightData);
        }
    });
};

function filterFlightData(data) {
  if (data.Stops && data.Stops.includes('KLAX')) {
    return data;
  } else if (data.To && data.To.includes('KLAX')) {
    if (data.From.includes('KLAX')) {
      return;
    } else {
      return data;
    }
  } else {
    return;
  }
}

function formatFlightData(data) {
  const originatingLocation = '',
        altitude = 0,
        flightStats = {
          originatingLocation: originatingLocation,
          altitude: altitude
        };

  flightStats.originatingLocation = data.From;
  flightStats.altitude = data.Alt;
  return flightStats;
}

function displayFlightData(data) {
  const html = data.map(flight => {
    return `<li><p class="origin">${flight.originatingLocation}</p><p class="altitude">Alt: ${flight.altitude}</p></li>`;
  });
  flighCard.innerHTML = html;
}

window.setInterval(getFlightData, 60000);
getFlightData();
