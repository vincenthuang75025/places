// @ts-ignore
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';


export default function Page() {

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
