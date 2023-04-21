import { useEffect, useState } from "react";
import "./profile_style.css";
import Axios from "axios";
import { useParams } from "react-router-dom";

function User_Profile() {
    const params = useParams();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        Axios.get(`https://dummyjson.com/users/${params.userID}`).then((res) =>{
            setUsers(res.data);
            console.log(res.data);
        })
    } , [])
    return (
        <div className="profile-container" >
            <h2>User Details</h2>
            <div className="row">
                <div className="col-md-3 text-center">
                    <img src={users?.image} alt="Avatar" className="avatar"/>
                </div>
                
                <div className="col-md-9">
                <div className="mb-3">
                        <label htmlFor="id">ID</label>
                        <input type="tel" className="form-control profile-form-control" id="id" value={users?.id} disabled />
                </div>
                    <div className="mb-3">
                        <label htmlFor="name">Họ và tên</label>
                        <input type="text" className="form-control profile-form-control" id="name" value={users?.firstName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control profile-form-control" id="email" value={users?.email}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Profile;