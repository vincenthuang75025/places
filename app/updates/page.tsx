"use client";
// @ts-ignore
import RangeDatePicker from '../../components/RangeDatePicker.js';
import '../../components/styles.scss';

import { useState } from 'react';

import {postVisit, changeDefaultLocation } from "./server";

const Page2 = () => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [location, setLocation] = useState("")
  const [defaultLoc, setDefaultLoc] = useState("")

  const onDateChange = (start: Date, end: Date) => {
    setStartDate(start)
    setEndDate(end)
  }

  const submitVisit = () => {
    postVisit(startDate, endDate, location)
  }

  const submitDefaultLoc = () => {
    changeDefaultLocation(defaultLoc)
  }

  // TODO: make the ui less bad and make submission feedback clearer

  return (<>
    <div className="flex flex-column">
      <div className="flex-1">
        <div className="flex-1 flex flex-row">
          <input className="w-1/3" type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
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
            className="w-1"
            startWeekDay="monday"
          />
        </div>
        <button onClick={submitVisit} className="flex-1">Click to add new visit</button>
      </div>

    </div>
    <div className="flex-1">
        <input className="w-1/3" type="text" placeholder="default location" onChange={(e) => setDefaultLoc(e.target.value)} />
        <button onClick={submitDefaultLoc} className="flex-1">Click to change default location</button>
    </div>
  </>)
}


export default Page2;