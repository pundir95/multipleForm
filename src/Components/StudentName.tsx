import React from "react";
import { Button, Form } from "react-bootstrap";
import { IFromState } from "./MultipleForm";
import StepCount from "./StepCount";

type IProps = {
    formValue: IFromState,
    handleChange: (value: string, filedName: string) => void,
    nextStep: () => void,
}

const StudentName = (props: IProps) => {
    const { formValue, handleChange,nextStep} = props;
    return (
        <>
           
        <div className="container w-50 mt-4">

            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" name="name" placeholder="Enter name"
                      onChange={(event:any)=>handleChange(event.target.value,"name")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" name="fatherName" placeholder="Enter fathername" 
                      onChange={(event:any)=>handleChange(event.target.value,"fatherName")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" name="motherName" placeholder="Enter MotherName" 
                       onChange={(event:any)=>handleChange(event.target.value,"motherName")}
                    />
                </Form.Group>
            </Form>

            <Button onClick={nextStep}>Continue</Button>
            </div>
        </>
    )
}
export default StudentName;
