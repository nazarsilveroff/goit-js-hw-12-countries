import fetchCountries from './fetchCountries.js'
import debounce from 'lodash/debounce.js'
import matchededCountriesTempl from '../templates/matchededCountries.hbs'
import mainCountriesTempl from '../templates/mainCountry.hbs'
import notification from './notification.js'

const ref = {
    ul: document.querySelector('.countryList'),
    input: document.querySelector('[name="country"]')
}



function findlerFn(e) {
    fetchCountries(e.target.value)
    
        .then(res => {
            if (res.length === 1) {
                console.log(res);
                ref.ul.innerHTML = mainCountriesTempl(res)
            } else if (res.length >= 2 && res.length <= 10) {
                console.log(res);
                ref.ul.innerHTML = matchededCountriesTempl(res)
            } else if (res.length > 10) {
                notification.tooManyMatches()
            }
        })
    
}



ref.input.addEventListener('input', debounce(findlerFn,500))

