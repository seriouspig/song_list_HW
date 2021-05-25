import React from 'react';

const SongDetails = ({list, loaded}) => {

    
        const songList = () => {
            var listOfSongs = [];
        for (var i=0; i<20; i++) {
        listOfSongs.push(
        <div class="flex-container">
            <h3 class="list-element1">No {i+1}</h3>
            <div class="list-element2">
                 <p class="title">Title: {list.feed.entry[i].title.label} </p>
                 <p class="artist">Artist: {list.feed.entry[i]["im:name"].label}</p>
            </div>
            <img class="list-element3" src={list.feed.entry[i]["im:image"][1].label}></img>
            </div>
        )
        }
        return listOfSongs;

        }
    
        
    if (!loaded) {
        return <p>Loading...</p>
    }
    return (

        <>
            {songList()}
        </>
    )


}

export default SongDetails;