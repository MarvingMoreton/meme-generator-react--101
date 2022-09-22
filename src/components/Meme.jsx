import React from 'react'
import memesData from '/src/memesData'

export default function Meme() {
    /**  Refactoring
    * * Challenge: Update our state to save the meme-related
    * data as an object called `meme`. It should have the
    * following 3 properties:
    * topText, bottomText, randomImage.
    * The 2 text states can default to empty strings for now,
    * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
    */
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    /*
    * Next, create a new state variable called `allMemeImages`
    * which will default to `memesData`, which we imported above
    */
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    /*
    * Lastly, update the `getMemeImage` function and the markup
    * to reflect our newly reformed state object and array in the
    * correct way.
    */

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    return (
        <main>
        <div className="form">
        {/* Div element instead of form to prevent default refresh */}
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
        Get a new meme image 🖼
        </button>
        </div>
        <img src={meme.randomImage} alt="" className="meme--image" />
        </main>
        )
    }
