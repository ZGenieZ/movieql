export let movies = [
    {
      id:"1",
      name: "Star Wars -  The new one",
      score: 2,
    },
    {
      id:"2",
      name: "Titanic",
      score: 4,
    },
    {
      id:"3",
      name: "Bad Guys",
      score: 2,
    },
    {
      id:"4",
      name: "League of Legends",
      score: 3,
    },
    {
      id:"5",
      name: "KartRider",
      score: 1,
    },
]

export const getMovies = () => movies

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id))
    return filteredMovies[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies
        return true
    } else{
        return false
    }
}

export const addMovie = (name,score) => {
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}