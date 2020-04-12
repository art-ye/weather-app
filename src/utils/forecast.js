const request = require('request');


const forecast = (latitude, longitude, callback) => {
const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=cf3db06a2e667dcb8654c65e6ddfb885'

request( { url, json: true }, (error, { body } ) => {
if (error) { 
    callback('unable to connect weather service', undefined)
} else if (body.error) {
    callback ('Unable to find location', undefined)
} else {
    callback(undefined, 'Todays main weather: ' + body.weather[0].main + ' and temperature is: '+ (Math.floor(body.main.temp - 273)) + '°С')
}
})
}

module.exports = forecast




