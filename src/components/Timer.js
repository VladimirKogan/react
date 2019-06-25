import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
import CurrentTime24 from './CurrentTime24';
import CurrentDate from './CurrentDate';
import AlarmTime from './AlarmTime';
import help from './img/0001.png';




class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time12: <div className="CurrentTime"><CurrentTime/></div>,
            time24: <div className="CurrentTime24 hide"><CurrentTime24/></div>,
            AlarmTime: <div className="AlarmTime hide"><AlarmTime/></div>,
            CurrentDate: <div className="CurrentDate hide"><CurrentDate/></div>,
            active24: false,
            activeAlarm: false,
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
      this.setState({
        startDate: date
      });
    }

    ampm(){
        this.setState({
            active24: !this.state.active24,
            AlarmTime: <div className="AlarmTime hide"><AlarmTime/></div>,
            CurrentDate: <div className="CurrentDate hide"><CurrentDate/></div>,
            time12: <div className={this.state.active24 ? "CurrentTime": "CurrentTime hide"}><CurrentTime/></div>,
            time24: <div className={this.state.active24 ? "CurrentTime24 hide": "CurrentTime24"}><CurrentTime24/></div>
        });
    }

    showDate(){
            this.setState({
                AlarmTime: <div className="AlarmTime hide"><AlarmTime/></div>,
                time12: <div className="CurrentTime hide"><CurrentTime/></div>,
                time24: <div className="CurrentTime24 hide"><CurrentTime24/></div>,
                CurrentDate: <div className="CurrentDate"><CurrentDate/></div>
            })
    }
    hideDate(){
        this.setState({
            CurrentDate: <div className="CurrentDate hide"><CurrentDate/></div>,
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime hide"}><AlarmTime/></div>,
            time12: <div className={this.state.active24 ? "CurrentTime hide": "CurrentTime"}><CurrentTime/></div>,
            time24: <div className={this.state.active24 ? "CurrentTime24": "CurrentTime24 hide"}><CurrentTime24/></div>
        })
    }

    hideAlarm(){
        this.setState({
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime hide"}><AlarmTime/></div>,
            time12: <div className={this.state.active24 ? "CurrentTime hide": "CurrentTime"}><CurrentTime/></div>,
            time24: <div className={this.state.active24 ? "CurrentTime24": "CurrentTime24 hide"}><CurrentTime24/></div>
        })
    }

    alarmCheck2(){
        this.showDate();
        setTimeout( () => {this.hideDate();}, 4000);
    }


    alarmSet(){
        this.setState({
            activeAlarm: !this.state.activeAlarm,
            time12: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime hide": "CurrentTime") : "CurrentTime hide" }><CurrentTime/></div>,
            time24: <div className={this.state.activeAlarm ? (this.state.active24 ? "CurrentTime24": "CurrentTime24 hide") : "CurrentTime24 hide" }><CurrentTime24/></div>,
            AlarmTime: <div className={this.state.activeAlarm ? "AlarmTime hide": "AlarmTime"}><AlarmTime/></div>,
            CurrentDate: <div className={this.state.activeAlarm ? "CurrentDate hide": "CurrentDate hide"}><CurrentDate/></div>
        })
    }
    alarmStop(){
        sessionStorage.setItem('time','');
    }
    alarmSnooze(){
        sessionStorage.setItem('time', (parseInt(sessionStorage.getItem('time'))+5*60*1000));
    }
    render(){
        return(
            <div className="App-clock">
                <div className="clock">
                <div><span className="button alarmCheck" onClick={(e) => this.alarmCheck2(e)}></span></div>
                <div><span className="button ampm" onClick={(e) => this.ampm()}></span></div>
                <div><span className="button alarmSet" onClick={(e) => this.alarmSet(e)}></span></div>
                <div><span className="button alarmStop" onClick={(e) => this.alarmStop(e)}></span></div>
                <div><span className="button alarmSnooze" onClick={(e) => this.alarmSnooze(e)}></span></div>
                        {this.state.time12}
                        {this.state.time24}
                        {this.state.AlarmTime}
                        {this.state.CurrentDate}
                </div>

                <img src={help} alt=""/>
            </div>
        )
    }
}
export default Timer
