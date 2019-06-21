import React, { Component } from 'react'
import CurrentTime from './CurrentTime';
import CurrentTime24 from './CurrentTime24';
import AlarmTime from './AlarmTime';

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time12: <div className="CurrentTime"><CurrentTime/></div>,
            time24: <CurrentTime24/>
        }

    }
    toggleClass() {
        console.log(this.state.active)
        this.setState=({
         active:true,
       })
      }

    alarm(){
        console.log('alarm');
    }
    ampm(){
        let time12 = this.state.time12;
        let time24 = this.state.time24;
        console.log(this.state.time12);
        console.log(this.state.time24);
    }
    alarmSet(){
        console.log('alarmSet');
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
                <div><span className="button alarm" onClick={(e) => this.alarm(e)}></span></div>
                <div><span className="button ampm" onClick={(e) => this.ampm(this.CurrentTime)}></span></div>
                <div><span className="button alarmSet" onClick={(e) => this.alarmSet(e)}></span></div>
                <div><span className="button alarmStop" onClick={(e) => this.alarmStop(e)}></span></div>
                <div><span className="button alarmSnooze" onClick={(e) => this.alarmSnooze(e)}></span></div>
                        {this.state.time12}
                        <div className="CurrentTime24">{this.state.time24}</div>
                        <AlarmTime/>
                </div>
            </div>
        )
    }
}
export default Timer
