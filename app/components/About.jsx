var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather app build on React</p>
        <p>Here are some of the tools used:</p>
        <ul>
          <li> <a href="https://facebook.github.io/react">React</a> -  Javascript framework</li>
          <li> <a  href="https://openweathermap.org">Open Weather Map</a> - Weather data API</li>
        </ul>
      </div>
    );
}
module.exports = About;
