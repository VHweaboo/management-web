import { useEffect, useState } from "react";
import "./profile_style.css";

import Axios from "axios";
import GetUsers from "./getUsers";

function Profile() {

    // useEffect(() =>{
    //     fetchData();
    // }, [])
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
    // useEffect(() => {
    //     Axios.get("https://dummyjson.com/users").then((res) =>{
    //         setUsers(res.data.users);
    //         console.log(users);
    // });
    // }, []);

    return (
        <div className="profile-container" >
            {/* <h2>Thông tin cá nhân</h2>
            <div className="row">
                <div className="col-md-3 text-center">
                    <img src={avatarUrl} alt="Avatar" className="avatar"/>
                </div>
                
                <div className="col-md-9">
                <div className="mb-3">
                        <label htmlFor="id">ID</label>
                        <input type="tel" className="form-control profile-form-control" id="id" value={id} disabled onChange={(e) => setID(e.target.value)} />
                </div>
                    <div className="mb-3">
                        <label htmlFor="name">Họ và tên</label>
                        <input type="text" className="form-control profile-form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control profile-form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn-success btn-save pull-right" onClick={fetchData}>Get</button>
                </div>
            </div> */}
            <GetUsers users = {users}></GetUsers>
        </div>
        
    );
}

export default Profile;
