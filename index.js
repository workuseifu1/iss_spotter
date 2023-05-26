const { fetchMyIP,fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  return ip;
});
fetchCoordsByIP("204.191.208.162", (error,coordinates) => {
    if (error) {
      console.log("It didn't work!" , error)
      return;
    }  
    return coordinates;
  });

fetchISSFlyOverTimes("coords", (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  return passTimes;
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});