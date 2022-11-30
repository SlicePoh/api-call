
import Users from "./components/Hero";
import './App.css';
import { useEffect } from "react";
import React, { Component } from 'react'
let timer = null;
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

    componentDidMount() {
      timer = setTimeout(() =>{ 
        console.log('Hello, World!')
        this.updateState();
      }, 3000)
    };
    
    componentWillUnmount() {
      clearTimeout(timer);
    }
  render(){
    
    
    return (
    <>
      <nav>
          <div className="flex justify-between items-center bg-opacity-30 bg-gray-600 p-4">
            <div className=" text-xl mx-4 font-bold font-sans ">
              <h1>SpaceX</h1>
            </div>
            <div className="border-2 border-white hover:border-black rounded-md mx-4 p-2 bg-rose-700 hover:bg-rose-500 text-white hover:text-black">
              <button onClick={useEffect}>Get Users</button>
            </div>
          </div>
      </nav>
      <div className="box2">
       <Users loading={this.state.loading} users={this.state.users_data}/>
      </div>
    </>
    )
  }
}


	
export default App;