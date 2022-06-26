import React, { useState } from "react";
import Child from "./Child";

const Parent = () =>{
    const [formData , setFormData] = useState(
        {firstName : '' , lastName:'',age:'',gender:''}
    )

    const[isToggled,setIsToggled] = useState(false)

    const handleChangeInfo = (e) =>{
        setFormData({...formData,[e.target.name]:[e.target.value]})
    }

    const handleSubmit = () =>{
        console.log('Form Data is : ' , formData)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name : </label>
                <input name="firstName" type='text' value={formData.firstName} onChange={handleChangeInfo}></input>
                <label>Last Name : </label>
                <input name="lastName" type='text' value={formData.lastName} onChange={handleChangeInfo}></input>
                <label>Age : </label>
                <input name="age" type='text' value={formData.age} onChange={handleChangeInfo}></input>
                <p>Name is {formData.firstName}{formData.lastName} , Age is {formData.age} and Gender is {formData.gender}</p>
                <button type="button" onClick={()=>setIsToggled(!isToggled)}>More..</button>
                {isToggled && <Child gender={formData.gender} genderFunc={handleChangeInfo}></Child>}
                <button type="button" onClick={handleSubmit}>Send !</button>
            </form>
        </>
    )
}

export default Parent