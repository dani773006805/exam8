'use strict';

function createCountry(countries) {
    let country = countries[0];
    let countryElement = document.createElement('div');
    countryElement.classList.add('countryElement');
    countryElement.innerHTML =
        '<img class="card-img-top" src="' + country.flag + '"' + 'alt="' + country.name + '">' +
        '<h5>' + country.name + '</h5>' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">Capital: ' + country.capital + '</li>' +
        '<li class="list-group-item">Region: ' + country.region + '</li>' +
        '<li class="list-group-item">Currency: ' + country.currencies[0].name + '</li>' +
        '</ul>' +
        '<a class="btn btn-light btn-outline-info" href="https://www.google.com/search?q=' + country.name + '" target="_blank">Google more</a>' +
        '<a class="btn btn-light btn-outline-info" href="https://ru.m.wikipedia.org/wiki/' + country.name + '" target="_blank">Wikipedia more</a>';
    return countryElement;

}

function addCountry(countryElement) {
    if (document.getElementsByClassName('countries')[0].firstChild === null) {
        document.getElementsByClassName('countries')[0].append(countryElement);
    } else {
        document.getElementsByClassName('countries')[0].firstChild.replaceWith(countryElement);
    }
}