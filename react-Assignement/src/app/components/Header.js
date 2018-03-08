import React from "react";
import PropTpes from "prop-types";
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
export default class Header extends React.Component{
    constructor(){
        super();
       
        this.state={
            menu:[["Home","/"],["Contact","/contact"],["About","/about"],["States","/states"]],
            current:"Home"
        }
    }
    
    render(){
        const liStyle = {
            display: 'inline',
            marginRight:"10px",
          };
        console.log("Header called");
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#home">React-Assignment</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                   
                       {this.state.menu.map((item)=>
                   <span key={item} >
                   
                    <NavLink to={item[1]} exact className="button" activeClassName="success" >
                    {item[0]}
                    </NavLink>
                   </span>
                    )}
                   
                    </Navbar>
            </div>
        );
    }
}