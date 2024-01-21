"use client";
// @ts-ignore
import RangeDatePicker from '../../components/RangeDatePicker.js';
import '../../components/styles.scss';

import { useState } from 'react';

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()
export const dynamic = 'force-dynamic'

const Page2 = () => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [location, setLocation] = useState("")

  const onDateChange = (start: Date, end: Date) => {
    setStartDate(start)
    setEndDate(end)
  }

  const submitVisit = () => {
    console.log(startDate, endDate, location)

    // const visit = prisma.visit.create({
    //   data: {
    //     location: location,
    //     start: startDate,
    //     end: endDate,
    //     userId: 1,
    //     // todo: how to get user id?
    //   },
    // }).then(m => console.log(m));

    const postData = async () => {
      const data = {
        title: 1,
        post: 2,
      };

      const response = await fetch("/api/createVisit", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

  return (<>
    {/* input box for city name */}
    <input type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
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
      className="my-own-class-name"
      startWeekDay="monday"
    />
    {/* button to post start and end dates */}
    <button onClick={submitVisit}>Click</button>
  </>)
}


export default Page2;