import * as axios from 'axios';

let googleBookssApi = 'https://www.googleapis.com/books/v1/volumes?printType=books&q=';

async function searchGoogleBooks(filterBy){
    return await axios.get(googleBookssApi + filterBy).then(res => res.data.items);
}

export const googleBooksService = {
    searchGoogleBooks
}

