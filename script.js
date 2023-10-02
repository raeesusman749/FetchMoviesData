const searchString = document.getElementById('search').value;

let url = `http://www.omdbapi.com/?i=tt3896198&apikey=d00f265a&type=movie&s=${searchString}`;

// let url = `https://www.omdbapi.com/?apikey=8569808c&type=movie&s=${searchString}`;



const clickHandler = () => {
    const movieData = fetch(url)
        .then((resp) => resp.json())
        .then((data) => {

            const innerBox = document.querySelector('.container');

            const movieList = ` 
            <div class="box">
                <img src=${data.Poster} alt=${data.Title} />
                <div class="moviesDetails">
                    <div class="leftDetails">
                        <h5>${data.Title}</h5>
                        <p>${data.Released}</p>
                    </div>
                </div>
            </div>`;

            innerBox.innerHTML += movieList;
            console.log(data)
        })
        .catch((err) => console.log(err));



}
