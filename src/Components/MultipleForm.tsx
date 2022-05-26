import React, { useState } from "react";
import ConfirmBox from "./ConfirmBox";
import StepCount from "./StepCount";
import StudentAdress from "./StudentAdress";
import StudentName from "./StudentName";
import StudentNumber from "./StudentNumber";

export interface IFromState {
    step: number,
    name: string,
    fatherName: string,
    motherName: string,
    email: string,
    phoneNumber: number | undefined,
    address: string,
    permananentAdress: string
}

const defaultValue = {
    step: 0,
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: undefined,
    address: '',
    permananentAdress: ''
}
const MultipleForm = () => {
    const [formValue, setFormValue] = useState(defaultValue);
    const [circleData, setCircleData] = useState([
        { number: 1, show: true, numberDisplay: false },
        { number: 2, show: false, numberDisplay: false },
        { number: 3, show: false, numberDisplay: false },
    ])

    const prevStep = () => {
        setFormValue({
            ...formValue,
            step: formValue.step - 1

        })
        let temp = [...circleData];
        temp[formValue.step] = {
            ...temp[formValue.step],
            show: false,
            numberDisplay: false

        }
        setCircleData(temp)

    }
    const nextStep = () => {
        setFormValue({
            ...formValue,
            step: formValue.step + 1

        })
        let temp = [...circleData];
        temp[formValue.step] = {
            ...temp[formValue.step],
            show: true,
            numberDisplay: true

        }
        setCircleData(temp)
    }
    console.log(circleData)
    const handlChange = (value: string, filedName: string) => {
        setFormValue({
            ...formValue,
            [filedName]: value
        })

    }
    const renderMulitplefunc = () => {
        if (formValue.step == 0) {
            return <StudentName formValue={formValue} handleChange={handlChange} nextStep={nextStep} />
        } else if (formValue.step == 1) {
            return <StudentNumber handlChange={handlChange} nextStep={nextStep}
                prevStep={prevStep} />
        } else if (formValue.step == 2) {
            return <StudentAdress handlChange={handlChange} nextStep={nextStep}
                prevStep={prevStep} />
        } else {
            return <ConfirmBox formValue={formValue} />
        }
        return (
            <>

            </>
        )
    }
    return (
        <>
            <div className="container w-50 mt-3">
                <StepCount formValue={formValue} circleData={circleData} />
                {renderMulitplefunc()}
            </div>

        </>
    )
}
export default MultipleForm;