import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

class Countdown extends React.Component {
    // sets the state to be undefined so we can define it ourselves when needed
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        /* Creating a setInterval function that allows us to set consts. Days, hours, minutes,
        and seconds are formatted by MomentJS. Countdown is then (the final date and time we 
        want counted) minus now (the current date). Then we set the state to be the days, hours,
        minutes, and seconds in the correct format. 
         */
        this.interval = setInterval(()=> {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ days, hours, minutes, seconds });
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    
    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div>
                <h1>Countdown To Christmas!</h1>
                <div className='countdown-wrapper'>
                    <div className='countdown-item'>
                        {days}
                        <span>days</span>
                    </div>
                    <div className='countdown-item'>
                        {hours}
                        <span>hours</span>
                    </div>
                    <div className='countdown-item'>
                        {minutes}
                        <span>minutes</span>
                    </div>
                    <div className='countdown-item'>
                        {seconds}
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
	<Countdown 
		timeTillDate="12 25 2019, 12:00 am" 
		timeFormat="MM DD YYYY, h:mm a" 
	/>, 
	document.getElementById('root')
);
