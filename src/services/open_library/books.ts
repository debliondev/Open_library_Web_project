const url = "https://openlibrary.org/search.json?subject=";


const url_trending = "https://openlibrary.org/search.json?q=trending_score_hourly_sum%3A%5B1+TO+%2A%5D+-subject%3A%22content_warning%3Acover%22+language%3Aspa+-subject%3A%22content_warning%3Acover%22+-subject%3A%22content_warning%3Acover%22&sort=trending"

//const url_subjects = "https://openlibrary.org/subjects/";

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
        let response
        switch(subject_url){
            case "trending":
                response = await fetch(url_trending + '&limit=30&sort=trending',options)
            break;
            default:
                response = await fetch(url + subject_url + '&limit=30&sort=trending',options)
        }

        const data = await response.json();
        console.log("Data Response: ",response)
        return data;
    }catch (error) {
        console.log("Hubo un error :",error)
    }
}

