import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
import CurrentTime24 from './CurrentTime24';
import AlarmTime from './AlarmTime';
import DatePicker from "react-datepicker";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time12: <div className="CurrentTime"><CurrentTime/></div>,
            time24: <div className="CurrentTime24 hide"><CurrentTime24/></div>,
            AlarmTime: <div className="AlarmTime hide"><AlarmTime/></div>,
            active24: false,
            activeAlarm: false
        }
    }

    ampm(){

        this.setState({
            active24: !this.state.active24,
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime hide"}><AlarmTime/></div>,
            time12: <div className={this.state.active24 ? "CurrentTime hide": "CurrentTime"}><CurrentTime/></div>,
            time24: <div className={this.state.active24 ? "CurrentTime24": "CurrentTime24 hide"}><CurrentTime24/></div>
        });
    }

    showAlarm(){
            this.setState({
                activeAlarm: !this.state.activeAlarm,
                time12: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime hide": "CurrentTime") : "CurrentTime hide" }><CurrentTime/></div>,
                time24: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime24": "CurrentTime24 hide") : "CurrentTime24 hide" }><CurrentTime24/></div>,
                AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime"}><AlarmTime/></div>,
            })
    }

    hideAlarm(){
        this.setState({
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime hide"}><AlarmTime/></div>,
            time12: <div className={this.state.active24 ? "CurrentTime hide": "CurrentTime"}><CurrentTime/></div>,
            time24: <div className={this.state.active24 ? "CurrentTime24": "CurrentTime24 hide"}><CurrentTime24/></div>
        })
    }

    alarmCheck(){
        this.alarmSet();
        setTimeout( () => {this.hideAlarm();}, 3000);
    }


    alarmSet(){
        this.setState({
            activeAlarm: !this.state.activeAlarm,
            time12: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime hide": "CurrentTime") : "CurrentTime hide" }><CurrentTime/></div>,
            time24: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime24": "CurrentTime24 hide") : "CurrentTime24 hide" }><CurrentTime24/></div>,
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime"}><AlarmTime/></div>,
        })
    }
    alarmStop(){
        console.log('alarmStop');
    }
    alarmSnooze(){
        console.log('alarmSnooze');
    }
    render(){
        return(
            <div className="App-clock">
                <div className="clock">
                <div><span className="button alarmCheck" onClick={(e) => this.alarmCheck(e)}></span></div>
                <div><span className="button ampm" onClick={(e) => this.ampm()}></span></div>
                <div><span className="button alarmSet" onClick={(e) => this.alarmSet(e)}></span></div>
                <div><span className="button alarmStop" onClick={(e) => this.alarmStop(e)}></span></div>
                <div><span className="button alarmSnooze" onClick={(e) => this.alarmSnooze(e)}></span></div>
                        {this.state.time12}
                        {this.state.time24}
                        {this.state.AlarmTime}

                </div>

            </div>
        )
    }
}
export default Timer
