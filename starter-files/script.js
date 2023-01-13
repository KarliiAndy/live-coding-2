// API
const API_ENDPOINT = 'https://yesno.wtf/api';

let answer = document.querySelector("#answer")

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


function fetchAnswer(){
 fetch('https://yesno.wtf/assets/no/27-8befe9bcaeb66f865dd3ecdcf8821f51.gif')

 .then(res => res.json())
 .then(data=> {
        answer.innerHTML 
 });

}