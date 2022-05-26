import React from "react";
import { Button, Form } from "react-bootstrap";

interface iProps{
    handlChange:(value:string,filedName:string)=>void,
    prevStep:()=>void,
    nextStep:()=>void,

}

const StudentAdress=(props:iProps)=>{
    const { prevStep, handlChange,nextStep} = props;

    return(
        <>
             <div className="container w-50 mt-4">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" name="address" placeholder="Enter Address"
                      onChange={(event:any)=>handlChange(event.target.value,"address")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" name="phonenumber" placeholder="Enter Permananent" 
                      onChange={(event:any)=>handlChange(event.target.value,"permananentAdress")}
                    />
                </Form.Group>
            </Form>
            <Button  className="mx-3 btn-success" onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep} >Submit</Button>
            </div>
        </>
    )
}
export default StudentAdress;