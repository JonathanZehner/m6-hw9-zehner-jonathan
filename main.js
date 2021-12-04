var wx = document.getElementById('wx');
var btn = document.querySelector('.btn');
var form = document.querySelector('form');
var input = document.querySelector('.input')

form.onsubmit = function(e) {
    e.preventDefault();  //Stops the form from performing default actions
    console.log('clicked');  //Check for button functioning

    //Remove previous query results to return only new query information
    wx.innerHTML = "";
    
    //Replace url value by pulling text typed into search field to be included as a parameter
    var userinput = document.querySelector('input').value;  
    //Retrieves data from the servers
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+userinput+'&units=imperial&appid=cc1adc079d41a52073b50dca9aa7fab3')

    //Returns data in easier format to read information
    .then(function(res) {
        return res.json();
    })

    //Prints the returned data to the console--not functioning
    .then(function(data) {
        console.log(data.results)

        //City, Country
        var name = document.createElement('h2');
        name.textContent = data.name + ", " + data.sys.country;
        wx.appendChild(name);

        //Weather Icon
        var img = document.createElement('img');
        var imgSrc = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'
        img.src = imgSrc;
        wx.appendChild(img);

        //Weather Conditions
        var currentWx = document.createElement('p');
        currentWx.textContent = data.weather[0].description;
        wx.appendChild(currentWx);

       //Current Temperature
        var currentTemp = document.createElement('h3');
        currentTemp.textContent = 'Currently: ' + data.main.temp + ' °F';
        wx.appendChild(currentTemp);

        //Feels Like Temperature
        var feelsLike = document.createElement('h3');
        feelsLike.textContent = 'Feels Like: ' + data.main.feels_like + ' °F';
        wx.appendChild(feelsLike);
    })

}
