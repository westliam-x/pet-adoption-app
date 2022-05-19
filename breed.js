const Breed = () =>{
    return(
        <label htmlFor="breed">
    Breed
    <select id="breed" value={breed}
    onChange={e => setbreed(e.target.value)}
    onBlur={e => setbreed(e.target.value)}
    >
        <option value=""></option>
        {
            breeds.map((breed) =>(
                    <option value={breed} key={breed}>
                        {breed}
                    </option>
                ))
        }
    </select>
</label> 
    );
}
export default Breed;