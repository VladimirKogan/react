import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
import { setHours } from 'date-fns'
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

class AlarmTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            array: ['zero','one','two','three','four','five','six','seven','eight','nine'],
            weekDay: [
                    {day:'SUN',status:'active'},
                    {day:'MON',status:'active'},
                    {day:'TUE',status:'active'},
                    {day:'WED',status:'active'},
                    {day:'THU',status:'active'},
                    {day:'FRI',status:'active'},
                    {day:'SAT',status:'active'},
                ],
            hoursD: (new Date().getHours()%10),
            hoursS: Math.floor((new Date().getHours()/10)),
            minuteD: (new Date().getMinutes()%10),
            minuteS: Math.floor((new Date().getMinutes()/10)),
            daysD: ((new Date().getDate())%10).toLocaleString(),
            daysS: Math.floor(((new Date().getDate())/10)).toLocaleString(),
            monthD: ((new Date().getMonth()+1)%10).toLocaleString(),
            monthS: Math.floor(((new Date().getMonth()+1)/10)).toLocaleString(),

            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(date) {
      this.setState({
        startDate: date,
        hours: date.getHours(),
        hoursD: (date.getHours()%10).toLocaleString(),
        hoursS: Math.floor((this.state.hours/10)).toLocaleString(),

        minute: date.getMinutes(),
        minuteD: ((date.getMinutes())%10).toLocaleString(),
        minuteS: Math.floor(((date.getMinutes())/10)).toLocaleString(),

        days: date.getDate(),
        daysD: ((date.getDate())%10).toLocaleString(),
        daysS: Math.floor(((date.getDate())/10)).toLocaleString(),

        month: date.getMonth()+1,
        monthD: ((date.getMonth()+1)%10).toLocaleString(),
        monthS: Math.floor(((date.getMonth()+1)/10)).toLocaleString()
      });
    }

    setAlarm(){
        sessionStorage.setItem('time', this.state.startDate.getTime());
        this.setState({
            hours: this.state.startDate.getHours(),
            hoursD: (this.state.hours%10).toLocaleString(),
            hoursS: Math.floor((this.state.hours/10)).toLocaleString(),

            minute: this.state.startDate.getMinutes().toLocaleString(),
            minuteD: (this.state.minute%10).toLocaleString(),
            minuteS: Math.floor((this.state.minute/10)).toLocaleString(),

            days: this.state.startDate.getDate(),
            daysD: (this.state.days%10).toLocaleString(),
            daysS: Math.floor((this.state.days/10)).toLocaleString(),

            month: this.state.startDate.getMonth()+1,
            monthD: (this.state.month%10).toLocaleString(),
            monthS: Math.floor((this.state.month/10)).toLocaleString()
        });
    }

    render(){
        return(
            <div className="display">
                <div className="weekdays" onClick={(e) => this.alarmSnooze(e)}><div className="weekday">{this.state.weekDay.map((item) => <span className={item.status}>{item.day}</span>)}</div></div>
                <div className="digits">
                    <div className={this.state.array[this.state.hoursS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.hoursD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class"+1 :"dots class"+ 2}></div>
                    <div className={this.state.array[this.state.minuteS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.minuteD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className="invisible dots"></div>
                    <div className={this.state.array[this.state.daysS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.daysD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className="invisible dots"></div>
                    <div className={this.state.array[this.state.monthS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.monthD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div></div>
                    <div className="alarm" onClick={(e) => this.ampm(e)}></div>


                </div><div className="datePicker">
                <DatePicker
                selected={this.state.startDate}
                timeInputLabel="Time:"
                onChange={this.handleChange}
                dateFormat="MM/dd/yyyy h:mm aa"
                shouldCloseOnSelect={false}
                showDisabledMonthNavigation
                minDate={new Date()}
                showTimeInput
                /></div>
                <button className="setAlarm" onClick={(e) => this.setAlarm(e)}>Set Alarm</button>
            </div>

        )
    }
}
export default AlarmTime
