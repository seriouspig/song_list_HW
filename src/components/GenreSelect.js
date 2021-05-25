import React, {useState} from "react";

const GenreSelect = ({onGenreSelect}) => {

    const [genre, setGenre] = useState("All");

    const handleGenreChange = (evt) => {
        setGenre(evt.target.value);
    }

    

    return (
        <>
        <select 
        onChange={handleGenreChange}>
            <option value="json">All</option>
            <option value="genre=21/json">Rock</option>
            <option value="Dance">Dance</option>
            <option value="Country">Country</option>
        </select>
        </>


    )
}

export default GenreSelect;