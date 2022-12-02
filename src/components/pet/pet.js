import './pet.css'
import {Link, Router} from "react-router-dom";
import avatar1 from "../cat.png";
import avatar2 from "../dog.png";

const Pet = (props) => {
    const pet = props.pet
    return (
        <div className='pet'>
            <span>a pet</span>
            {pet && <div className='pet-card'>
                    <img className='avatar' src={(Math.floor(Math.random() * (3 - 1) ) + 1) == 1 ? avatar1 : avatar2}/>
                    <div>{pet.name}</div>
                    <Link to={`pets/${pet.id}`}>to pet</Link>
                </div>
            }

        </div>
    )
}

export default Pet;