import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'dummy name',
                location: 'default location',
                avatar_url: "http://dummyphoto.jpg"
            }
        };
        // console.log("child constructor")
    }

    async componentDidMount() {
        // console.log("Child componentDidMount")
        // API 
        
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        // console.log("json==", json);
    }

    componentDidUpdate() {
        // console.log("component did update");
    }

    componentWillUnmount() {
        // console.log("component will unmount")
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        // console.log("child render")
        return (
            <div className="user-card">
            <img src={avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: kinnari2220</h4>
            </div>
        )
    }
}

export default UserClass;