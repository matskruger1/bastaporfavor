export async function getUser(q){
    try{
        let response= await fetch ("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
        let json = await response.json ()
        return json;
    }catch(error) {
        console.log (error)

    }
}