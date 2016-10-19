var axios = require('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e7bed8929565b0bf08de2bf0c6825dca';

module.exports = {
    getTemp: function(location) {
        var encodedeLoction = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedeLoction}`;

        return axios.get(requestUrl).then(function(res) {
          if (res.data.cod && res.data.message){
            throw new Error(res.data.message);
          }else{
            return res.data.main.temp;
          }
        }, function(res) {
          throw new Error(res.data.message);
        });
    }
};
