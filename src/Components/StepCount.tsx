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
               circleData.map((data1,index)=>{
                   return (
                       <>
                       <div className={`circleItem ${ formValue.step==index || data1.show?'stepColor':''}`}>{data1.numberDisplay?<BsCheck style={{color:'#fff' ,fontSize: "1.5em"}}/>: data1.number}</div>
                       </>
                   )
               })
           }
        </div>
        </>
    )
}

export default StepCount;