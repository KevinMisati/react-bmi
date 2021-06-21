import React,{useState} from 'react'
import classes from "./BmiForm.module.css"

const BMIForm = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [formIsValid, setFormIsValid] = useState(false)
    const [heightIsValid, setHeightIsValid] = useState(true)
    const [weightIsValid,setWeightIsValid] = useState(true)
    const [bmi,setBmi] =useState()
    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const handleCalculate = (e) => {
        e.preventDefault()
        if (height.trim().length === 0) {
            setHeightIsValid(false)
        }
        
        if (weight.trim().length === 0) {
            setWeightIsValid(false)
        }
        
        const heightInMetres = +height / 100;
        console.log(heightInMetres, weight)
        const b = weight / (heightInMetres * heightInMetres)
        if (isNaN(b)) {
            alert("inputs must be nmbers")
            return;
        }
        console.log(b)
        setBmi(b)
        setHeight("")
        setWeight("")
    }
    return (
        <form className={classes.form}>

            <div className={classes.control}>
            <label htmlFor="height">Height (cm)</label>
            <input className={heightIsValid ? "" : classes.invalid} onChange={handleHeightChange} value={height} id="height" type="text" />  
            </div>
            <div className={classes.control}>
            <label htmlFor="weight">Weight (Kg)</label>
            <input className={weightIsValid ? "" : classes.invalid} onChange={handleWeightChange} value={weight} id="weight" type="text" />  
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            {height && weight && <p>Your BMI is {bmi}</p>}
        </form>
    )
}

export default BMIForm
