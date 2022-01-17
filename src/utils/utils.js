const omdbURL="https://www.omdbapi.com/?";

export const getMovieDetailsById= async(movieID)=>{
    const fetchData= await fetch(
        `${omdbURL}apikey=39aeee96&i=${movieID}`
    );
    const jsonData = await fetchData.json();
    return jsonData;

}

export const getMoviesBySearchTerm= async(searchTerm)=>{
    const res= await fetch(
        `${omdbURL}apikey=39aeee96&s=${searchTerm}`
    );
    if(!res.ok){
        return Promise.reject(res.statusText);
    }
    const movies=await res.json();
    if(movies){
        return movies
    }
    
}