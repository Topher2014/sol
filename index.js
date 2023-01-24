// GLOBAL
const baseUrl = "api.sunrisesunset.io/json?"
const endUrl = "&date=today"
const sunriseList = document.querySelector('#sunrise-list')
const parksUrl = 'http://localhost:3000/parks'

// FETCH FUNCTIONS
function getAllSunrises(lat, lng, tmz) {
    return fetch(baseUrl + `lat=${lat}&lng=${lng}&timezone=${tmz}` + endUrl)
        .then(response => response.json())
        // .then(renderNationalParks)
}

function getLocationData(url) {
    return fetch('url')
    .then(response => response.json())
}

function getNationalParks(url) {
    return fetch(url)
        .then(response => response.json())
}

// function getNationalParks(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(parksArray => {
//         const sunnyParks = parksArray.map(park => getAllSunrises(park))
//         iterateParks(sunnyParks)
//     })
// }

// function getAllSunrises(park) {
//     return fetch(baseUrl + `lat=${park.lat}&lng=${park.long}&timezone=${park.tmz}` + endUrl)
//     .then(response => response.json())
//     .then(sunsetData => {
//         return{...park,
//         "Sunrise": sunsetData.results.sunrise,
//         "Sunset": sunsetData.results.sunset,
//         "Golden Hour": sunsetData.results["golden_hour"],
//         "Day Length": sunsetData.results["day_length"]
//     }
//     })
// }


// RENDER FUNCTIONS
function renderNationalParks(park, sunsetData) {
    const li = document.createElement('li')
    li.className = "list-li"
    const image = document.createElement('img')
    image.src = park.image
    const nationalPark = document.createElement('h3')
    nationalPark.textContent = park.nationalPark
    const location = document.createElement('h4')
    location.textContent = park.location
    const sunrise = document.createElement('p')
    sunrise.textContent = park.sunrise
    const sunriseSpan = document.createElement('span')
    sunriseSpan.textContent = sunsetData.sunrise
    sunrise.append(sunriseSpan)
    const sunset = document.createElement('p')
    sunset.textContent = park.sunset
    const sunsetSpan = document.createElement('span')
    sunsetSpan.textContent = sunsetData.sunset
    sunset.append(sunsetSpan)
    const goldenHour = document.createElement('p')
    goldenHour.textContent = park["golden_hour"]
    const goldenHourSpan = document.createElement('span')
    goldenHourSpan.textContent = sunsetData.golden_hour
    goldenHour.append(goldenHourSpan)
    const dayLength = document.createElement('p')
    dayLength.textContent = park["day_length"]
    const dayLengthSpan = document.createElement('span')
    dayLengthSpan.textContent = sunsetData.day_length
    dayLength.append(dayLengthSpan)
    const like = document.createElement('button')
    like.textContent = "Like"
    sunriseList.append(li)
    li.append(image, nationalPark, location, sunrise, sunset, goldenHour, dayLength, like)
}

function iterateParks(parksArray) {
    parksArray.forEach(renderNationalParks)
}

// function iterateParks(sunnyParks) {
//     sunnyParks.forEach(park => renderNationalParks(park))
// }

// INITIALIZERS
getNationalParks(parksUrl).then(parksArray => {iterateParks(parksArray)})
// getNationalParks(parksUrl)
// getAllSunrises("37.865101", "-119.538330", "PST")