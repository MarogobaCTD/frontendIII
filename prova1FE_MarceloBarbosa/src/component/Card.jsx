import React from "react";
import styles from "./Card.css";

function Card(props) {

    const cor = "#"+((1<<24)*Math.random()|0).toString(16); 

    return (
            <div id={styles.videoCor} style={{background: cor}}  className="video">
                <div>
                    <img src="https://media.tenor.com/9SFSfC2n0lkAAAAC/head-phones-music.gif" width='100px'/>
                </div>
                <div>
                <a href={props.card.video}>
                    <h1 key={props.card.musica}>{props.card.musica}</h1>
                    <h2>Tempo: {props.card.tempo}</h2>
                    <h3>Artista: {props.card.album}</h3>   
                </a>
                </div> 
            </div> 
    )
}

export default Card;