import React, { useEffect } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    })
    return (
        <div className="App">
            <h1>Hello Ignite</h1>
        </div>
    );
}

export default Home;