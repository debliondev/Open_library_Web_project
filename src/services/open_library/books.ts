const url = "https://openlibrary.org/search.json";

const url_subjects = "https://openlibrary.org/subjects/";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}


export async function testing_books_fetch(){

    try {
        const response = await fetch(url_subjects + 'fantasy.json', options);
        const data = await response.json();
        //console.log(data)
        return data;
    }catch (error) {
        console.log("Hubo un error :",error)
    }
}

