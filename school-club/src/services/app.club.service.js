import axios from 'axios'
const DOMAIN_API = 'http://localhost:5255/api/Club'
export async function getAllClubs(){ //
    return await axios.get(DOMAIN_API)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }
    }).catch(ex => {
        console.error(ex)
    })
}

export async function getClubById(id){
    return await axios.get(DOMAIN_API)
    .then(res => { 
        if(res.status === 200){
            return res.data;
        }else{
            console.error('Not Found Club By Id ' + id);
        }
    }).catch(ex => {
        console.error(ex)
    })
}

export async function updateClub(data){
    return await axios.put(DOMAIN_API, data)
    .then(res => { 
        if(res.status === 200){
            return res.data;
        }else{
            console.error('Not Found Club By Id ');
        }
    }).catch(ex => {
        console.error(ex)
    })
}

export async function saveClub(data){
    return await axios.post(DOMAIN_API, data)
    .then(res => { 
        if(res.status === 200){
            return res.data;
        }else{
            console.error('Not Found Club By Id ');
        }
    }).catch(ex => {
        console.error(ex)
    })
}

export async function deleteClub(id){
    return await axios.delete(DOMAIN_API)
    .then(res => { 
        if(res.status === 200){
            return res.data;
        }else{
            console.error('Not Found Club By Id ' + id);
        }
    }).catch(ex => {
        console.error(ex)
    })
}