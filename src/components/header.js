import React, {Component} from "react";
import userImg from "./img/COQUETA.jpeg";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo: 'Tu Biblioteca',
            img: userImg,
        };
    }

    componentDidMount(){    
        console.log('El header se montó'); 
    }

    render(){
        return(
            <header>
                <img src = {this.state.img} alt ="Imagen de usuario"/>
                <h1>{this.state.titulo}</h1>      
            </header>  
        );
    }
}

export default Header;