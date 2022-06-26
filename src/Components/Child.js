import React from "react";

const Child = ({gender,genderFunc}) =>{
    const ChildToParent = (e) =>{
        genderFunc(e)
    }
    return(
        <>
            <label>Gender : </label>
            <select name="gender" value={gender} onChange={ChildToParent}>
                <option>Male</option>
                <option>Female</option>
                <option>Gay</option>
                <option>Bisexual</option>
                <option>Lesbian</option>
                <option>Queer</option>
            </select>
        </>
    )
}

export default Child