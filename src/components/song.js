import React, {Component} from "react";

class Songs extends Component{
    constructor(props){
        super(props);
        this.state = {
            song : [
                {
                    id: 1,
                    songName: "Into you",
                    artist: "Ariana Grande",
                    duration: "4:04"
                },
                {
                    id: 2,
                    songName: "Azul",
                    artist: "Zoé",
                    duration: "3:14"
                },
                {
                    id: 3,
                    songName: "Coqueta",
                    artist: "Grupo Frontera",
                    duration: "4:01"
                }
            ]
        };
    }

    render(){
        return(
            <div className="songs">
                
                {this.state.song.map(song => (
                    <div key={song.id} className="song">
                        <div className="sname">
                            <h2>{song.songName}</h2>
                            <p>{song.artist}</p>
                        </div>
                        
                        <p className="duration">{song.duration}</p>
                    </div>
                ))}
                
            </div>
        );
    }
}

export default Songs;