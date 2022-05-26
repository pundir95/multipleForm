import React,{useState} from "react";
import { IFromState } from "./MultipleForm";
import { BsCheck } from "react-icons/bs";


type AccordionSection = {
    number: number;
    show: boolean;
    numberDisplay:boolean
  };
type IProps = {
    formValue: IFromState,
    circleData:AccordionSection[]
}
const StepCount=(props:IProps)=>{
    const {formValue,circleData}=props;
   
    return (
        <>
        <div className="circle mb-3">
           {
               circleData.map((data,index)=>{
                   return (
                       <>
                       <div className={`circleItem ${ formValue.step==index || data.show?'stepColor':''}`}>{data.numberDisplay?<BsCheck style={{color:'#fff' ,fontSize: "1.5em"}}/>: data.number}</div>
                       </>
                   )
               })
           }
        </div>
        </>
    )
}

export default StepCount;