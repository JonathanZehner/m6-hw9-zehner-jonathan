var wx = document.getElementById('wx');
var btn = document.querySelector('.btn');
var form = document.querySelector('form');
var input = document.querySelector('.input')

form.onsubmit = function(e) {
    e.preventDefault();  //Stops the form from performing default actions
    console.log('clicked');  //Check for button functioning

    var h2 = document.getElementsByTagName('h2')
    if (h2.length > 0) {
        //If Found: remove and replace content
        var replaceName = document.getElementsByTagName('h2');
        var replaceCurrentWx = document.getElementsByTagName('h3');
        var replaceImg = document.getElementsByTagName('img');
        var replaceCurrentTemp = document.getElementsByTagName('h3');
        var replaceFeelsLike = document.getElementsByTagName('h3');

        document.wx.parentNode.removeChild(wx.h2);
        document.wx.parentNode.removeChild(replaceCurrentWx);
        document.wx.parentNode.removeChild(replaceImg);
        document.wx.parentNode.removeChild(replaceCurrentTemp);
        document.wx.parentNode.removeChild(replaceFeelsLike);
    } else {
        //Not Found: do nothing
    }
    
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

        //Weather Conditions
        var currentWx = document.createElement('h3');
        currentWx.textContent = data.weather[0].description;
        wx.appendChild(currentWx);

        //Weather Icon
        var img = document.createElement('img');
        var imgSrc = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'
        img.src = imgSrc;
        wx.appendChild(img);

        //Current Temperature
        var currentTemp = document.createElement('h3');
        currentTemp.textContent = data.main.temp;
        wx.appendChild(currentTemp);

        //Feels Like Temperature
        var feelsLike = document.createElement('h3');
        feelsLike.textContent = data.main.feels_like;
        wx.appendChild(feelsLike);
    })

}
