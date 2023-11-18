import { useRoute } from "vue-router";

const router = useRoute();

export const fetchWrapper = {
    get:request("GET"),
    post:request("POST"),
}

//if request was async, calling it would make post a promize, not function
function request(method){

    //
    return async (url, userDetails)=>{

        const options = {
            method:"POST",
            mode: "cors",
            headers:{
                'Content-type':"application/json"
            },    
        }

        if(userDetails){
            options.body = JSON.stringify(userDetails);
        }

        return handleResponse(await fetch(url, options));

    }
}

async function handleResponse(res){

    try{
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
    
}