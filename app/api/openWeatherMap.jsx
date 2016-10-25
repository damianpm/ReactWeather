var axios = require('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e7bed8929565b0bf08de2bf0c6825dca';

module.exports = {
    getTemp: function(location) {
        var encodedeLoction = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedeLoction}`;

        return axios.get(requestUrl).then(function(err) {
          if (err.res.data.cod && err.res.data.message){
            throw new Error(err.res.data.message);
          }else{
            return res.data.main.temp;
          }
        }, function(err) {
          throw new Error(err.response.data.message);
        });
    }
};
