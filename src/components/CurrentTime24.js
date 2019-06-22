import React, { Component } from 'react'
import './styles/myStyles.css';
import './styles/clock.css';
import './styles/clockBtns.css';

class CurrentTime24 extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
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
        this.setState({

            time: new Date().toLocaleString(),
            ampm: new Date().getHours()>12?"PM":"AM",
            variab: (new Date().getDay()+1),

            hours: new Date().getHours(),
            hoursAMPM: this.state.hours>12?this.state.hours-12:this.state.hours,
            hoursD: (this.state.hours%10).toLocaleString(),
            hoursS: Math.floor((this.state.hours/10)).toLocaleString(),

            minute: new Date().getMinutes().toLocaleString(),
            minuteD: (new Date().getMinutes()%10).toLocaleString(),
            minuteS: Math.floor((new Date().getMinutes()/10)).toLocaleString(),

            seconds: new Date().getSeconds().toLocaleString(),
            secondsD: (new Date().getSeconds()%10).toLocaleString(),
            secondsS: Math.floor((new Date().getSeconds()/10)).toLocaleString()
        });
    }
    render(){
        return(
            <div className="display">
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
export default CurrentTime24
