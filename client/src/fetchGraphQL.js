import { text } from "stream/consumers";

export default async function fetchGraphQL (text, variables) {
   
    //TODO: update url / retrieve from env.. 
    const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify({
            query: text, 
            variables,
        })

    });

    return await response.json();
}

