import {useEffect, useState, useMemo} from "react";
import cat from './cat.png';
import './pets.css'
import Pet from "./pet/pet";
import {Button, Pagination} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./welcome";
import Test from "./test";

const Pets = () => {

    const [pets, setPets] = useState()
    const [page, setPage] = useState(1)
    const [img, setImage] = useState()
    const [file, setFile] = useState()

    const getPets = () => {
        fetch('http://localhost:3000/pets', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
       }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPets(data.slice(((page-1)*10),(page*10)))
                console.log(data.slice(((page-1)*10),(page*10)))
            })
    }


    const pet = {
        // id: Math.floor(Math.random()*10),
        name: 'Ukraine',
        species: 'cat'
    }

    const addPet = () => {
        fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
            body: JSON.stringify(pet)
        }).then(() => {
            getPets()
        })
    }

    const handlePageChange = (e, value) => {
        console.log(e)
        console.log(value)
        setPage(value)
    }

    useEffect(() => {
        getPets()
        // addPet()
    },[page])

    const imageHandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
    }

    // console.log(file)


    return (
        <div className='main'>
            <div>
                <input type='file' onChange={imageHandler}/>
                <Button onClick={addPet}>Add a pet</Button>
            </div>

            <div className='container'>
                {pets && pets.map(pet => {
                    return <Pet key={pet.id} pet={pet}></Pet>
                })}
            </div>
            <Pagination onChange={handlePageChange} className='pagination' count={5} variant="outlined" color="primary"></Pagination>

        </div>
    )
}

export default Pets;