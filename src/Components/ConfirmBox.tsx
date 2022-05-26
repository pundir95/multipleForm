import React from "react";
import { IFromState } from "./MultipleForm";

type confrmProps={
    formValue:IFromState
}

const ConfirmBox=(props:confrmProps)=>{
    const {formValue}=props;

    return (
        <>
        <ul>
       <li>Name:{formValue.name}</li>
       <li>FatherName:{formValue.fatherName}</li>
       <li>MotherName:{formValue.motherName}</li>
       <li>Email:{formValue.email}</li>
        </ul>
        </>
    )
}
export default ConfirmBox;