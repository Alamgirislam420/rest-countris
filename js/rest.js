const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => dislpyCountries(data));
}
const dislpyCountries = country => {
    console.log(country[0]);
    const countriesHtml = country.map(country => getCountriesHtml(country));
    console.log(countriesHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
} 

const getCountriesHtml = country => {
    return `
            <div class="country">
                  <h1>${country.name.common}</h1>
                  <img src="${country.flags.png}">
            </div>

    `
}

loadCountries();