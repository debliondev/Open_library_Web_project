const url = "https://openlibrary.org/search.json?";


const url_trending = "https://openlibrary.org/search.json?q=trending_score_hourly_sum%3A%5B1+TO+%2A%5D+-subject%3A%22content_warning%3Acover%22+language%3Aspa+-subject%3A%22content_warning%3Acover%22+-subject%3A%22content_warning%3Acover%22&sort=trending"

//const url_subjects = "https://openlibrary.org/subjects/";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}

async function fetch_books(subject:string){
    try {
        const subject_url = subject.toLowerCase()
        //const response = await fetch(url_subjects + `${subject_url}.json`, options);
        let response: Response
        switch(subject_url){
            case "trending":
                response = await fetch(url_trending + '&limit=30&sort=trending',options)
            break;
            default:
                response = await fetch(url + 'subject='+ subject_url + '&limit=30&sort=trending',options)
        }

        if (!response.ok){
            //console.error("Server Returned non-ok status")
            //console.log(response.status)
            return {docs: []};
        }

        const data = await response.json();
        //console.log("Data Response: ",response)
        return data ?? {docs:[]};
    }catch (error) {
        console.log("Hubo un error :",error)
        return {docs: []}
    }
}

async function fetch_books_search(input:string){
    try{
        if(!input){
            return {docs:[]};
        }
        const response = await fetch(url + 'q=' + encodeURIComponent(input) + '&sort=trending',options)

        if (!response.ok){
            console.log("Server Returned non-ok status")
            console.log("STATUS",response.status)
            return {docs: []};
        }

        const data = await response.json();
        console.log("Data Response: ",response)
        return data ?? {docs:[]};

    }catch (error) {
        console.log("Hubo un error :",error)
        return {docs: []}
    }
}


export {fetch_books,fetch_books_search}
