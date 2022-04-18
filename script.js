var url = 'https://api.openweathermap.org/data/2.5/'
var key = '33e745b50bcd71f03df4b78a8faeb3d8'



var set = (e) => {
    if (e.keyCode == '13')
        getresult(search.value)
}

var getresult = (city) => {
    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

var displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = `${result.name},${result.sys.country}`


    console.log(`${result.name},${result.sys.country}`)

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let status = document.querySelector('.status')

    status.innerHTML = result.weather[0].description

    let minmax = document.querySelector('.minmax')

    if (result.main.temp_min == result.main.temp_max) {
        minmax.innerHTML = ''
    } else {
        minmax.innerHTML = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
    }


}

var search = document.getElementById('search')
search.addEventListener('keypress', set)