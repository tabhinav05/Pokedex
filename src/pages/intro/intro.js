import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from "../../assets/123.png";

import './intro.css';

const Intro = () => {

const [Values,setValues] = useState({
    fullName:"",
    PokeWorldName:"",
    Age:"",
    Email:""
});

const [Submitted, setSubmitted] = useState(false);
const [Valid, setValid] = useState(false);

const setData = () => {
    let data = Values; 
    sessionStorage.setItem('profileData', JSON.stringify(data));
}


const handleFullNameinputChange = (event) => {
    setValues({...Values, fullName: event.target.value})
}

const handlePokeWorldNameinputChange = (event) => {
    setValues({...Values, PokeWorldName: event.target.value})
}

const handleAgeinputChange = (event) => {
    setValues({...Values, Age: event.target.value})
}

const handleEmailinputChange = (event) => {
    setValues({...Values, Email: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(Values.fullName && Values.PokeWorldName && Values.Age && Values.Email){
        setValid(true);
    }
    setData();
    setSubmitted(true);
}


    return (
        <div className="app-contaner">
         <h1><img className="Pokeball" src={Pokeball}  alt=""/>PokeDex<img className="Pokeball" src={Pokeball} alt="" /></h1>
         

                {Submitted && Valid? 
                <div className="form-container">
                <div class="success-message">Success! Thank you for registering</div>
                <Link className="continue-link" to="/quiz"><button className="continue"> Quick Quiz </button></Link>
                </div>
                :
                <div className="form-container">
                <form class="register-form" onSubmit={handleSubmit}>
                <input
                onChange={handleFullNameinputChange}
                  value={Values.fullName}
                  class="form-field"
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                />
                {/* Uncomment the next line to show the error message */}
                {Submitted && !Values.fullName? <span className="input-error">Please enter a Full Name</span> : null}
                <input
                        onChange={handlePokeWorldNameinputChange}
                  value={Values.PokeWorldName}
                  class="form-field"
                  type="text"
                  placeholder="PokeWorld Name"
                  name="pokeworldname"
                />
                {/* Uncomment the next line to show the error message */}
                {Submitted && !Values.PokeWorldName? <span className="input-error">Please enter a PokeWorld Name</span> : null}
                <input
                        onChange={handleEmailinputChange}
                  value={Values.Email}
                  class="form-field"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                {/* Uncomment the next line to show the error message */}
                {Submitted && !Values.Email? <span className="input-error">Please enter a Email</span> : null}
                <input
                        onChange={handleAgeinputChange}
                  value={Values.Age}
                  class="form-field"
                  type="number"
                  placeholder="Age"
                  name="age"
                />
                {/* Uncomment the next line to show the error message */}
                {Submitted && !Values.Age? <span className="input-error">Please enter your Age</span> : null}
                <button class="form-field" type="submit">
                  Register
                </button>
              </form> 
              </div>
                }
            
            
        </div>
    )
}

export default Intro
