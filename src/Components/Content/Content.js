import React from 'react';
import Week from './week.jpeg';
import './Content.css';
function Content(){
    return(
        <div className='content'>
            <div>
                <h3 className='heading'>Ordinary Year:- </h3>
                <p>The Year which is not a leap year is called an ordinary years. An ordinary year has 365 days</p>
                <h3 className='heading'>Leap Year:-</h3>
                <ul>
                    <li>Every year divisible by 4 is a leap year, if it is not a century</li>
                    <li>Every 4th century is a leap year and no other century is a leap year</li>
                </ul>
                <p><strong>Note:</strong> A leap year has 366 days</p>
                <h3 className='heading'>Odd Days:- </h3>
                <p>We are supposed to find the day of the week on a given date. For this, we use the concept of 'odd days'. </p>
                <p>In a given period, the <strong>number of days more than the complete weeks</strong> are called odd days.</p>
                <h3>Counting of Odd Days:-</h3>
                <p>1 ordinary year = 365 days = (52 weeks + 1 day) .<br></br>Therefore, 1 ordinary year has 1 odd day.</p>
                <p>1 leap year = 366 days = (52 weeks + 2 days).<br></br> Therefore, 1 leap year has 2 odd days.</p>
                <p>100 years = 76 ordinary years + 24 leap years <br></br>
                             = (76*1 +24*2) odd days = 124 odd days.<br></br>
                             = (17 weeks + days) 5 odd days.</p>
                <p>Therefore, Number of odd days in 100 years = 5.</p>
                <p>Number of odd days in 200 years = (5 x 2) = 3 odd days.</p>
                <p>Number of odd days in 300 years = (5 x 3) = 1 odd day. </p>
                <p>Number of odd days in 400 years = (5 x 4 + 1) = '0' odd day.</p>
                <p>Similarly, each one of 800 years, 1200 years, 1600 years, 2000 years etc. has "0" odd days.</p>
                <img src={Week} className="weekimg"/>
            </div>

        </div>

    );

}
export default Content;