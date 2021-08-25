import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Plant({ match },) {

    const [plant, setPlant] = useState([])

    useEffect(() => {
        const fetchPlant = async () => {
            console.log(match.params.id)
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${match.params.id}`)
            const data = await res.json()
            console.log(data[0])
            setPlant(data[0])
        }
        fetchPlant()
    },[match.params.id])
    console.log(plant.id)

    return (
        <div>
            <h2 className="plant-name">Plant # {plant.id}</h2>
            <div className="plant-details">
                <div className="left"><img alt="" src={plant.url}/></div>
                <div className="right">
                    <ul className="plant-attr">
                        <li>Red: 8.69% chance</li>
                        <li>White: 10.29% chance</li>
                        <li>Camo: 5.74% chance</li>
                        <li>Up nose: 11.31% chance</li>
                        <li>Toast: 2.72% chance</li>
                        <li>Soda Hat: 1.48% chance</li>
                    </ul>
                    <Link to="/"><button className="opensea-btn">View on Opensea</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Plant;