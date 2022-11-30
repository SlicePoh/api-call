import React from 'react'
import {SiJulia} from "react-icons/si";
const Users = ({loading,users}) => { 
    return loading ? (   
          <div className=" flex justify-center text-7xl my-40 ">
            <SiJulia className="Loader"></SiJulia>  
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="float-left w-1/3 ">
                        {
                          console.log(user)
                        }
                        <div className=" profile text-center rounded-xl m-4 p-4 bg-rose-800 text-white border-2 border-white ">
                          <img src={user.avatar} alt={user.avatar} className="avatar m-auto rounded-full"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;