
import React, {Component} from "react";
import PropTypes from "prop-types";
import { Table,Badge } from 'react-bootstrap';
// throw away code
import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);
 
        console.log("Home cons", new Date().getMilliseconds());
 
       
    }

    increment() {
         let action = {
             type: 'INCREMENT',
             payload: {
                 value: 1
             }
         }

         store.dispatch(action);
    }

    componentWillMount() {
        console.log("Home will mount", new Date().getMilliseconds());
    }

    componentDidMount() {
        console.log("Home did mount", new Date().getMilliseconds());
        this.unsubcribeFunc = store.subscribe( () => {
            console.log("Home Subs called", Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        console.log("home will unmount");
        this.unsubcribeFunc();
    }
    
 
    
    render() {
        console.log("Home render", new Date().getMilliseconds());
         
        let state = store.getState();
        let counter = state.counter;

        return (
            <div> 
            <h2>Home</h2>

            <div>
            React-Redux Post Training Assignment
<br/>
<br/>Objective: The goal for this assignment is to let the developers who undergone React and Redux training to apply the skill and learnings on an independent assignment.
<br/>
<br/>This assignment shall use the RESTful backend, available in https://github.com/nodesense/restful-server
<br/>
<br/>The backend server can be deployed in developer machine using below commands.
<br/>
<br/>1.Open Terminal/Command prompt <Badge>checked</Badge>
<br/>2.git clone https://github.com/nodesense/restful-server<Badge>checked</Badge>
<br/>3.cd restful-server<Badge>checked</Badge>
<br/>4.npm install<Badge>checked</Badge>
<br/>5.npm start<Badge>checked</Badge>
<br/>
<br/>the server shall listen on port number 7070.
<br/>
<br/>If the port to be changed, run below commands, or if developer is comfortable with node.js, the port can be changed in server.js file. 
<br/>
<br/>1.npm start -- --port 9090
<br/>
<br/>
<br/>
<br/>Tasks
<br/>
<br/>1.Create a new react project either use https://github.com/nodesense/react-workshop as a base repository or by using https://github.com/facebook/create-react-app 
<Badge>checked</Badge>
<br/>
<br/>2.Implement App Component <Badge>checked</Badge>
<br/>
<br/>3.Implement Home, About, Contact Components. <Badge>checked</Badge>
<br/>
<br/>4.Implement Address Component, an reusable component, that display address that consists of street, city, state, pincode, phone number
 information. <Badge>checked</Badge>
<br/>
<br/>5.Contact component shall have Address component as child, Contact component shall pass head office, branch office addresses to Address component
<Badge>checked</Badge>
<br/>
<br/>6.About Component should display general description about the company, Team members, their name, role with photos and description/bio [text] in a list. 
<Badge>checked</Badge>
<br/>
<br/>7.Home component shall describe description about the website, about company tagline, hero section in bold text
<Badge>checked</Badge>
<br/>
<br/>8.Implement CRUD operations for states API, http://localhost:7070/api/states which contains below information
<br/>
<br/>    "code": "DL",
<br/>    "id": 1,
<br/>    "name": "Delhi"
<br/>
<br/>
<br/>     Creates StateList, StateEdit, StateView components
<br/>
<br/> StateList shall call below API to get the list of states.
<br/>    GET http://localhost:7070/api/states
<br/>
<br/>StateList shall list available states in table format, the table shall include ID, Name, Code columns, View and Edit Columns.
<br/>
<br/>Each state can be navigated from the StateList, can be viewed in the StateView component.
<br/>
<br/>The url mapping for pages.
<br/>
<Table striped bordered condensed hover>
<thead>
    <tr> <th>Path</th> <th>Component</th>  </tr>
    </thead>
    <tbody>
    <tr> <td>/</td> <td>Home</td>   </tr>
    <tr> <td>/about</td> <td>About</td>   </tr>
    <tr> <td>/contact</td> <td>Contact</td>   </tr>
    <tr> <td>/states</td> <td>StateList</td>   </tr>
    <tr> <td>/states/view/:id</td> <td>StateView</td>   </tr>
    <tr> <td>/states/edit/1234</td> <td>StateEdit</td>   </tr>
    <tr> <td>/states/create</td> <td>StateEdit</td>   </tr>
    </tbody>
</Table>

<br/>
<br/>Restful APIs
<br/>
<br/>1.Fetch all the states from 
<br/>
<br/>GET /api/states
<br/>
<br/>
<br/>2.Create new state in server
<br/>POST /api/states 
<br/>“Content-Types”: “application/json”
<br/>….
<br/>&#123; “code”: “TN”, “name”:”Tamil Nadu”&#125;
<br/> 
<br/>
<br/>3.Update the existing state information in server
<br/>PUT /api/states/23
<br/>“Content-Types”: “application/json”
<br/>….
<br/>&#123; “code”: “TN”, “name”:”Tamil Nadu”&#125;
<br/> 
<br/>
<br/>Redux
<br/>
<br/>There must be 3 reducers in total, 
<br/>
<br/>1.State Lists, and data loading   maintenance
<br/>2.State Edit – Keep the Edit Form data in the reducers
<br/>3.State View – Fetch the current state information.
<br/>
<br/>Duration
<br/>
<br/>Total hours: 10 hours
<br/>
<br/>Developers should follow best practices, coding practices, immutable data modelling, react-router-dom.
<br/>
<br/>Submission:
<br/>
<br/>Submission cab be done through github or a folder link in Google Drive or whatever best works as per company/policices. 
<br/>
<br/>
            </div>
                
            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}