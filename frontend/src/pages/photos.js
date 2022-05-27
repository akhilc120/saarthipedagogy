import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './style.css';

const Photo = () => {
    const params = useParams();
    const { albumid,userid } = params;
    let [photos, setPhoto] = useState([]);
    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:5000/photobyalbumid/${albumid} `)
                .then((res) => res.json())
                .then((data) => setPhoto(data));
        }
        fetchData();
    }, [])

    console.log(photos);
    return (
        <div>
            <h1>Photos</h1>
            <Link to={`/idalbum/${userid}`} > <button className="btnAlb1">Back</button></Link>

            {photos.map((photo, id) => {
                return (
                    <div className="photo" key={id}>
                        <img src={photo.img} alt="photo"className="imgphoto" ></img>
                    </div>
                )
            })}
        </div>

    )
}

export default Photo;