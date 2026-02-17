import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor");
    }
    
    componentDidMount() {
        // console.log("Parent componentDidMount");
    }

    render() {
        // console.log("parent render")
        return (
            <div>
            <h1>About</h1>
            <div>
            LoggedIn User
            <UserContext.Consumer>
                {(data) => <h1>{data.loggedInUser}</h1>}
            </UserContext.Consumer>
            </div>
            <h2>This is Namaste React app</h2>
            <UserClass name={"Kinnari Kansara class"} location={"Gujarat"} userId={"@kinnari2220"} />
        </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React app</h2>
//             <UserClass name={"Kinnari Kansara class"} location={"Gujarat"} userId={"@kinnari2220"} />
//         </div>
//     )
// }

export default About;