import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1)

    useEffect(() => {
        //API call
        return() => {
            console.log("useEffect Return")
        };
    }, [])
    console.log("Render")

    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Gujarat</h3>
            <h4>Contact: @kinnari2220</h4>
        </div>
    )
}

export default User;