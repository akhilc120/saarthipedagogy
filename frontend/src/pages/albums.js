import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './style.css';

const Album = () => {
    const params = useParams();
    const { userid } = params;
    let [albums, setAlbum] = useState([]);
    // console.log(userid);
    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:5000/idalbum/${userid} `)
                .then((res) => res.json())
                .then((data) => setAlbum(data));
        }
        fetchData();
    }, [])

    console.log(albums);
    return (
        <div>
            <h1>Albums</h1>
            <Link to={'/'} > <button className="btnAlb">Back</button></Link>

            {albums.map((album, id) => {
                return (
                    <div className="album" key={id}>
                        <Link to={`/photobyalbumid/${album._id}/${album.user_id} `} >
                            <div >
                                <h1>{album.Name} </h1>
                                <p>{album.update_date} </p>
                            </div>
                        </Link>

                    </div>
                )
            })}
        </div>

    )
}

export default Album;