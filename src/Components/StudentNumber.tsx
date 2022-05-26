import React from "react";
import { Button, Form } from "react-bootstrap";

type numberProps={
handlChange:(value:string,filedName:string)=>void;
 nextStep:()=>void;
 prevStep:()=>void;

}
const StudentNumber=(props:numberProps)=>{
    const {  handlChange,nextStep,prevStep} = props;
    return(
        <>
         <div className="container w-50 mt-4">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" name="name" placeholder="Enter email"
                      onChange={(event:any)=>handlChange(event.target.value,"email")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" name="phonenumber" placeholder="Enter phonenumber" 
                      onChange={(event:any)=>handlChange(event.target.value,"fatherName")}
                    />
                </Form.Group>
            </Form>
            <Button  className="mx-3 btn-success" onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep}>Continue</Button>
            </div>
        </>
    )
}

export default StudentNumber;