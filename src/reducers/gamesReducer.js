import axios from 'axios';

const initState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
    searched: []
}

const gamesReducer = ( state=initState, action ) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }
}

//ACTION CREATOR
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        payload: userData
    }
}



export default gamesReducer;