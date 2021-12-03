// assign var to #weather and button elements
var wx = document.getElementById('weather');
var btn = document.querySelector('button');

// render Name of searched city w/ country code, current wx description, icon image for current wx conditions, current and feels like temperatures

btn.onclick = function() {
    console.log('clicked');
    fetch('http://api.openweathermap.org/data/2.5/weather?q=YOURQUERY&units=imperial&appid=cc1adc079d41a52073b50dca9aa7fab3')
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res.results)
    })
    .then(function() {
        var name = document.createElement('h2');
        h2.value = res.city + ", " + res.state + ", " + res.countryCode;
        wx.appendChild(name);
    })
}
