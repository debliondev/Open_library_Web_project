const url = "https://openlibrary.org/search.json?subject=";

const url_subjects = "https://openlibrary.org/subjects/";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}


export async function testing_books_fetch(subject:string){
    try {
        const subject_url = subject.toLowerCase()
        //const response = await fetch(url_subjects + `${subject_url}.json`, options);

        const response = await fetch(url + subject_url,options)

        const data = await response.json();
        console.log("Data Response: ",response)
        return data;
    }catch (error) {
        console.log("Hubo un error :",error)
    }
}

