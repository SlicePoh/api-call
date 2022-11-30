import React, { useState } from 'react'

export default function Navbar() {
    const [users, setUsers] = useState([]);

    const API= async()=>{
        const response= await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        setUsers(jsonresponse);
    }
    return (
        <div>
            <div className=" flex justify-center items-center p-4 bg-green-500  " >    
                <p>Hitachii</p>
                <button onClick={API} className=" border-2 border-black rounded-md p-2 mx-4 bg-red-600 " type="submit">Get Users</button>
                <ul>
                    {users.map((element) => {
                        return `<div class="card">
                                    <div class="profile-image">
                                  <img src="${element.avatar}" alt="">
                            </div>
                            <div class="card-content">
                                <h3>${element.first_name} ${element.last_name}</h3>
                                <h2>${element.email}</h2>
                                <h2>User ID: ${element.id}</h2>
                            </div>
                        </div>`;
                    })}
                </ul>
            </div>
        </div>
    )
}
