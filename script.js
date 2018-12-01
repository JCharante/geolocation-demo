function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geo Location not supported by browser");
    }
}

function generateGoogleMapsLink(longitude, latitude) {
    return `https://www.google.com/maps/place/${longitude},${latitude},15.48z`;
}

function generateATag(text, link) {
    return `<a href="${link}">${text}</a>`
}

function showPosition(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }

    let longitude = document.getElementById('longitude');
    let latitude = document.getElementById('latitude');
    let googleMaps = document.getElementById('google-maps');

    longitude.innerHTML = position.coords.longitude;
    latitude.innerHTML = position.coords.latitude;
    googleMaps.innerHTML = generateATag("link", generateGoogleMapsLink(position.coords.longitude, position.coords.latitude));

    console.log(location)
}

getLocation();
