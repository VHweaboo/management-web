import { useEffect, useState } from "react";
import "./profile_style.css";

import Axios from "axios";
import GetUsers from "./getUsers";

function Profile() {

    const [users, setUsers] = useState(null);
    const getAllUsers = () => {
        Axios.get("https://dummyjson.com/users").then((res) =>{
        setUsers(res.data.users);
        console.log(res.data.users);
    })
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div className="profile-container" >
            <GetUsers users = {users}></GetUsers>
        </div>
        
    );
}

export default Profile;
