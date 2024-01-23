"use client";
// @ts-ignore
import RangeDatePicker from '../../components/RangeDatePicker.js';
import '../../components/styles.scss';

import { useState } from 'react';

import postVisit from "./temp";

const Page2 = () => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [location, setLocation] = useState("")

  const onDateChange = (start: Date, end: Date) => {
    setStartDate(start)
    setEndDate(end)
  }

  const submitVisit = () => {
    postVisit(startDate, endDate, location)
  }

  return (<>
  <div className="flex flex-row">
    <input className="w-1/4" type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
    <RangeDatePicker
      startDate={startDate}
      endDate={endDate}
      onChange={(startDate: Date, endDate: Date) => onDateChange(startDate, endDate)}
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date(2100, 0, 1)}
      dateFormat="D"
      monthFormat="MMM YYYY"
      startDatePlaceholder="Start Date"
      endDatePlaceholder="End Date"
      disabled={false}
      className="w-1/2"
      startWeekDay="monday"
    />
  </div>
    <button onClick={submitVisit}>Click</button>
  </>)
}


export default Page2;