import React, {useEffect, useState} from 'react';

import SongDetails from "../components/SongDetails";
import GenreSelect from "../components/GenreSelect";


const ListContainer = () => {

    const [list, setList] = useState ({});
    const [loaded, setLoaded] = useState(false);
    const [genre, setGenre] = useState("json");

    const getList = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/${genre}`)
        .then(res => res.json())
        .then(data => setList(data))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        console.log("Effect used!")
        getList();
    },[loaded,genre])

    useEffect(() => {
        console.log("Genre Changed")
    },[loaded])

    const handleGenreChange = (evt) => {
        setGenre(evt.target.value);

    }

    return (
        <>
            <h1>Song top 20</h1>
            <select 
                 onChange={handleGenreChange}>
                <option value="json">All</option>
                <option value="genre=21/json">Rock</option>
                <option value="genre=17/json">Dance</option>
                <option value="genre=6/json">Country</option>
            </select>
            <SongDetails
                list={list}
                loaded = {loaded}
            />
            

        </>
    )
}



export default ListContainer;