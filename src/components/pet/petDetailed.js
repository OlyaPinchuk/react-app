import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Card, CardContent, Typography} from "@mui/material";
import './petDetailed.css'
import avatar1 from "../cat.png";
import avatar2 from "../dog.png";

const PetDetailed = () => {

    const [pet, setPet] = useState()

    const params = useParams()
    const petId = params.petID

    const getPet = (petId) => {
        fetch(`http://localhost:3000/pets/${petId}`)
            .then(res => res.json())
            .then(data => {
                setPet(data)
                console.log(data)
            })
    }

    useEffect(() => {
        getPet(petId)
    }, [])


    return (
        <div>
            {pet &&
            <Card className={'card'}>
                <CardContent>
                    <img className='avatarDetails' src={(Math.floor(Math.random() * (3 - 1) ) + 1) == 1 ? avatar1 : avatar2}/>
                    <Typography className='name'>
                        Name: {pet.name}
                    </Typography>
                    <Typography>
                        Species: {pet.species}
                    </Typography>
                    <Typography>
                        Age: 2
                    </Typography>
                </CardContent>
            </Card>
            }
        </div>
    )
}

export default PetDetailed;