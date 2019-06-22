import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
import DatePicker from "react-datepicker";
import { setHours } from 'date-fns'
import Timer from './Timer';

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
            hours: new Date(2019, 5, 20, 0, 0).getHours(),
            date: new Date(2019, 5, 20, 0, 0).getDate().toLocaleString(),
            hoursD: (new Date(2019, 5, 20, 0, 0).getHours()%10),
            hoursS: Math.floor((new Date(2019, 5, 20, 0, 0).getHours()/10)),

            minute: new Date(2019, 5, 20, 0, 0).getMinutes(),
            minuteD: (new Date(2019, 5, 20, 0, 0).getMinutes()%10),
            minuteS: Math.floor((new Date(2019, 5, 20, 0, 0).getMinutes()/10)),

            seconds: new Date(2019, 5, 20, 0, 0).getSeconds(),
            secondsD: (new Date(2019, 5, 20, 0, 0).getSeconds()%10),
            secondsS: Math.floor((new Date(2019, 5, 20, 0, 0).getSeconds()/10))
        };


    }
    alarmSnooze1(){
        console.log('alarmSnooze1');
    }
    alarmSnooze2(){
        console.log('alarmSnooze2');
    }

    ampm(){
        console.log(new Date(2019, 5, 20, 0, 0));
    }
    render(){
        return(
            <div className="display">
                <div className="weekdays" onClick={(e) => this.alarmSnooze(e)}><div className="weekday">{this.state.weekDay.map((item) => <span className={item.status}>{item.day}</span>)}</div></div>
                <div className="digits">
                <span className="button alarm ampm" onClick={(e) => this.alarmSnooze1(e)}></span>
                <span className="button alarm alarmStop" onClick={(e) => this.alarmSnooze2(e)}></span>
                    <div className={this.state.array[this.state.hoursS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.hoursD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class"+1 :"dots class"+ 2}></div>
                    <div className={this.state.array[this.state.minuteS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.minuteD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class"+1 :"dots class"+ 2}></div>
                    <div className={this.state.array[this.state.secondsS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.secondsD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div></div>
                    <div className="alarm" onClick={(e) => this.ampm(e)}></div>

                </div>
            </div>

        )
    }
}
export default AlarmTime
