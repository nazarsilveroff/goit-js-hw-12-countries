
import notification from './notification.js'


export default function fetchCountries(searchQuery){
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            if (response.ok) {
               return response.json()
            } else {
               notification.badRequest(error)
            }
        })
        // .then(response => response.json())
        .catch(error => {
        notification.badRequest(error)
        });
}


