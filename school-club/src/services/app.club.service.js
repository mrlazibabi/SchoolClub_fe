import axios from 'axios'
const DOMAIN_API = 'http://localhost:5454/api/ClubController'
export async function getAllClubs(){
    return await axios.get(DOMAIN_API)
    .then(res => {
        if(res.status === 200){
            
        }
    })
}