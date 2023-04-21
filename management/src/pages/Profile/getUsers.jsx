import { Link } from "react-router-dom";

function GetUsers({ users }) {
    if (!users) return 'no data';
    if (!Array.isArray(users)) return 'results are not array'
    return (
        <>
            <h2>Employee Management</h2>
            <div class="input-group pb-4">
                <div class="form-outline search-input">
                    <input id="search-input" type="search" placeholder="Search" className="form-control"/>
                </div>
                <button id="search-button" type="button" class="btn btn-search btn-info">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user) => (
                            <tr key={user?.id}>
                                <td>{user?.id}</td>
                                <td><Link to={{pathname: `/details/${user?.id}`}}>{user?.firstName} {user?.lastName}</Link></td>
                                <td>{user?.company.title}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.address.address}, {user?.address.city}</td>
                                <td><button type="button" class="btn btn-edit btn-success">Edit</button> / <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default GetUsers;