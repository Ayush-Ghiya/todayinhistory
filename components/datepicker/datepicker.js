import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState } from 'react';
import styles from '../../styles/Datepicker.module.scss';
const Datepicker = ({startDate, setStartDate,handleChange}) => {
    
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.btn} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  
  return (
    <DatePicker  selected={startDate}
    
      onChange={(date,e) => {
        handleChange(date,e);
        setStartDate(date)}}
      customInput={<ExampleCustomInput />}
      withPortal
      />
  )
}

export default Datepicker