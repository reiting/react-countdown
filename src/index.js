import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div>
                <h1>Countdown</h1>
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
    <Countdown />,
    document.getElementById('root')
);
