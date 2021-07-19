import React, { useEffect, useState, Link } from 'react';


const Card = () => {
    const [User, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>


            {
                User.map((Raj) => {



                    return (
                        <>
                            <div className="card" style={{ width: "12rem;", cursor: 'pointer' }}>
                                <img className="card-img-top" src={Raj.avatar_url} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Tittle</h5>
                                    <p className="card-text">RAJVARDHAN SINGH SOLANKI</p>
                                    <Link to="#" class="btn btn-primary">Visit</Link>
                                </div>
                            </div>

                        </>
                    );
                })
            }



        </>
    );
}
export default Card;