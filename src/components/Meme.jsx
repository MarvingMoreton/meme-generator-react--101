import React from "react"
import memesData from "/src/memesData"


export default function Meme() {

const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setMemeImage(memesArray[randomNumber].url)
  }

    return (
        <main>
            <div className="form">
              {/* Div element instead of form to prevent default refresh */}
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                  onClick={getMemeImage}
                  className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="" className="meme--image"/>
        </main>
    )
}
