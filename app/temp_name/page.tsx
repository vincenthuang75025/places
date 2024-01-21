"use client";
// @ts-ignore
import RangeDatePicker from '../../components/RangeDatePicker.js';
import '../../components/styles.scss';

const Page2 = () => {

    const onDateChange = (startDate: Date, endDate: Date) => {
        console.log(startDate, endDate)
    }

    return <RangeDatePicker
    startDate={new Date()}
    endDate={new Date()}
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
}


export default Page2;