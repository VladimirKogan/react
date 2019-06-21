import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
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
            hours: new Date("00:00:00").getHours(),
            hoursD: (new Date().getHours()%10),
            hoursS: Math.floor((new Date().getHours()/10)),

            minute: new Date().getMinutes(),
            minuteD: this.minute.getMinutes()%10,
            minuteS: Math.floor((new Date().getMinutes()/10)),

            seconds: new Date().getSeconds(),
            secondsD: (new Date().getSeconds()%10),
            secondsS: Math.floor((new Date().getSeconds()/10))
        };


    }
    ampm(){
        console.log(this.state.minute);
        this.state.minute += 1;
    }
    render(){
        return(
            <div className="display">
            <div><span className="button ampm" onClick={(e) => this.ampm(e)}></span></div>
                <div className="weekdays"><div className="weekday">{this.state.weekDay.map((item) => <span className={item.status}>{item.day}</span>)}</div></div>
                <div className="digits">
                    <div className={this.state.array[this.state.hoursS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.hoursD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class"+1 :"dots class"+ 2}></div>
                    <div className={this.state.array[this.state.minuteS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.minuteD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class"+1 :"dots class"+ 2}></div>
                    <div className={this.state.array[this.state.secondsS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.secondsD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>

                    <div className="alarm"></div>
                </div>
            </div>

        )
    }
}
export default AlarmTime
