import React, { useEffect, useState } from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function User() {
    let [users, setUser] = useState([]);
    useEffect(() => {
        // let data=fetch("http://localhost:5000");
        // console.log(data);
        async function fetchData() {
            fetch("http://localhost:5000")
                .then((res) => res.json())
                .then((data) => setUser(data));
        }
        fetchData();
    }, []);
    console.log(users);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user, id) => {
                return (
                    <div className="user" key={id}  >
                        <Link to={`/idalbum/${user._id}`} >
                            <div>
                            <b>First Name : </b><p className="name">{user.firstName} </p><br />
                            <b>Last Name : </b><p className="name">{user.lastName}</p><br />
                            <b>Phone Number : </b><p className="name">{user.phone_no}</p><br />
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div >
    )
}