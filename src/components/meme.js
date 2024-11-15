import React from "react";
export default function MemeMain(){
    return(
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="Top Text"/>
                <input type="text" className="form-input" placeholder="Button Text"/>
                <button className="form-button"> Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}