import React, { Component } from 'react'
import './styles/myStyles.css';
import './styles/clock.css';
import './styles/clockBtns.css';

class CurrentDate extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
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
        let date = new Date().getDay();
        for (var i = 0; i < this.state.weekDay.length; i++) {
            if(i === date){
                this.state.weekDay[i].status = 'active';
            }else{
                this.state.weekDay[i].status = 'unactive';
            }
        }
        this.setState({
            date: this.state.time.getDate(),
            dateD: (this.state.date%10).toLocaleString(),
            dateS: Math.floor((this.state.date/10)).toLocaleString(),

            month: this.state.time.getMonth()+1,
            monthD: (this.state.month%10).toLocaleString(),
            monthS: Math.floor((this.state.month/10)).toLocaleString(),

            year: this.state.time.getYear(2),
            yearD: (this.state.year%10).toLocaleString(),
            yearS: Math.floor((this.state.year/100)).toLocaleString()
        });
    }
    render(){
        return(
            <div className="display">
                <div className="weekdays"><div className="weekday">{this.state.weekDay.map((item) => <span className={item.status}>{item.day}</span>)}</div></div>

                <div className="digits">
                    <div className={this.state.array[this.state.dateS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.dateD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class invisible"+1 :"dots invisible class"+ 2}></div>
                    <div className={this.state.array[this.state.monthS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.monthD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.secondsD%2===0?"dots class invisible"+1 :"dots invisible class"+ 2}></div>
                    <div className={this.state.array[this.state.yearS] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>
                    <div className={this.state.array[this.state.yearD] + " inline"}><span className="d1"></span><span className="d2"></span><span className="d3"></span><span className="d4"></span><span className="d5"></span><span className="d6"></span><span className="d7"></span></div>

                </div>
            </div>
        )
    }
}
export default CurrentDate
