import React from 'react';
import './Weekday.css'
import oddmonth from './oddmonth.jpeg'
function Weekday(){
    var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var [month,setmon]=React.useState("");
    var [year,setye]=React.useState(0);
    var [day,setda]=React.useState(0);
    
    function addy(e){
        setye(e.target.value)
    }
    function add(e)
    {
        setmon(months[e.target.value-1]);
    }
    function adda(e)
    {
        setda(e.target.value);
    }
    var dt=new Date(`${month} ${day}, ${year} 23:15:00`);
    var da=dt.getDay();
    
    return(
        <div className='weekday'>
            <h3 className='weekhead'>find the day of the week</h3>
            <form>
                <label className='month'>Month:
                    <select onChange={add}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </label>
                <label className='yearofweek'>year:
                    <input type="number" onChange={addy}/>
                </label>
                <label className='yearofweek'>Date of the day:
                    <input type="number" onChange={adda}/>
                </label>
            </form>
            <p className='answe'>the day is: {days[da]}</p>
            <h3 className='imghead'>odd days in the months:</h3>
            <img src={oddmonth} className="imgurl"/>
            <h3 className='imghead'>Finding years with similar calendars:</h3>
            <div className='conclu'>
                <h4>For two different years having the same calendar , the following conditions should be statisfied:</h4>
                <ul>
                    <li>Both years must be of the same type. i.e., both years must be ordinary years or both years must be leap years.</li>
                    <li>1st January of both the years to have must be the same day of the week.</li>
                </ul>
                <p>It simply means that for a year to have the same calendar with X years , the total odd days from X should be 0.</p>
            </div>
        </div>
    );

}
export default Weekday;