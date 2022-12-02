import {useEffect, useState} from "react";
import './welcome.css'
import avatar1 from './cat.png'
import avatar2 from './dog.png'
import avatar3 from './panda.png'



const Welcome = (props) => {

    let page = 1;
    const name = props.name;

    const [people, setPeople] = useState([])
    const [pets, setPets] = useState([])

    const nextPageHandler = () => {
        page++;
        console.log(page)
    }

    const prevPageHandler = () => {
        page--;
    }

    const getCountries = () => {
        fetch('http://localhost:8000/countries')
            .then(res => res.json())
            .then(data => console.log(data))

    }

    const country = {
        id: 9,
        name: 'Ukraine',
        capital: 'Kyiv'
    }

    const addCountry = () => {
        fetch('http://localhost:8000/countries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
            body: JSON.stringify(country)
        })
    }



    const getPeople = () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                // setPeople(data.results)
                // console.log(data)
            })
    }

    const getPets = () => {
        fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
            .then(response => response.json())
            .then(data => {
                setPets(data.slice((page-1) * 10, page * 10))
                // console.log(data.slice((page-1) * 10, page * 10))

            })
    }

    // getPeople()

    const dateNow = new Date()
    // console.log(dateNow.toISOString())
    // console.log(new Date().toISOString())

    const pet = {
        id: Date.now(),
        category: {
            id: 333,
            name: "Olya'sPets"
        },
        name: "lilhumster",
        photoUrls: [
            "string"
        ],
        tags: [
            {
                id: 0,
                name: "string"
            }
        ],
        status: "available"
    }

    const addPet = () => {
        fetch('https://petstore.swagger.io/v2/pet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
            body: JSON.stringify(pet)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        getPets()
        // addPet()
        addCountry()
        getCountries()
    }, [])






    return (
        <div className='container'>
            {/*Welcome component from {name}*/}
            <div>{people.length > 0 && people[0].name}</div>
            {people.length > 0 && people.map(person => {
                return <div key={person.created}>{person.name} -- {person.hair_color}</div>
            })}

            {pets.length > 0 && pets.map(pet => {
                return <div className='pet' key={pet.id*Math.random()}>
                    <img className='avatar' src={(Math.floor(Math.random() * (3 - 1) ) + 1) == 1 ? avatar1 : avatar2}/>
                    {pet.name}
                </div>
            })}
            <div>
                <button onClick={prevPageHandler}>previous page</button>
                <button onClick={nextPageHandler}>next page</button>
            </div>

        </div>
    )
}

export default Welcome;