import React, { Component } from 'react'
import './styles/myStyles.css';
import './styles/clock.css';
import './styles/clockBtns.css';
import logo from './img/bell.png';
import logo1 from './img/bell1.png';

class CurrentTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            alarmOn: false,
            alarmWork: false,
            time: new Date(),
            hours: new Date().getHours(),
            minute: new Date().getMinutes().toLocaleString(),
            seconds: new Date().getSeconds().toLocaleString(),
            array: ['zero','one','two','three','four','five','six','seven','eight','nine'],
            weekDay: [
                    {day:'SUN',status:'active'},
                    {day:'MON',status:'active'},
                    {day:'TUE',status:'active'},
                    {day:'WED',status:'active'},
                    {day:'THU',status:'active'},
                    {day:'FRI',status:'active'},
                    {day:'SAT',status:'active'},
                ]
        };
    }
    isAlarmOn(){
        if(sessionStorage.getItem('time') != ''){
            this.setState({
                alarmOn: true
            });
        }else{
            this.setState({
                alarmOn: false,
                alarmWork: false
            });
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(
        () => this.tick(),
        1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }


    tick() {
        let time = new Date().getDay();
        for (var i = 0; i < this.state.weekDay.length; i++) {
            if(i === time){
                this.state.weekDay[i].status = 'active';
            }else{
                this.state.weekDay[i].status = 'unactive';
            }
        }
        this.isAlarmOn();
        this.setState({

            time: new Date(),
            ampm: new Date().getHours()>12?"PM":"AM",
            variab: (new Date().getDay()+1),

            hours: new Date().getHours(),
            hoursAMPM: this.state.hours>12?this.state.hours-12:this.state.hours,
            hoursD: (this.state.hoursAMPM%10),
            hoursS: Math.floor((this.state.hoursAMPM/10)),

            minute: new Date().getMinutes(),
            minuteD: (new Date().getMinutes()%10),
            minuteS: Math.floor((new Date().getMinutes()/10)),

            seconds: new Date().getSeconds(),
            secondsD: (new Date().getSeconds()%10),
            secondsS: Math.floor((new Date().getSeconds()/10))
        });
        if(sessionStorage.getItem('time') && this.state.time.getTime() >= sessionStorage.getItem('time')){
                this.setState({alarmWork : !this.state.alarmWork})

        }
    }
    render(){
        return(
            <div className="display">
            <img className={this.state.alarmOn?"bell":"hide bell"} src={logo} alt=""/>
            <img className={this.state.alarmOn? (this.state.alarmWork?"bell":"hide bell"):"hide"} src={logo1} alt=""/>
                <div className="weekdays"><div className="weekday">{this.state.weekDay.map((item) => <span className={item.status}>{item.day}</span>)}</div></div>
                <div className={"ampm " + this.state.ampm}>{this.state.ampm}</div>
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
export default CurrentTime
