import React from 'react';
import Image1 from './image1.jpg';
import './Bodypart.css'
function Bodypart(){
    return(
        <div className='Bodypart'>
            <img src={Image1} className="image1"/>
            <div>
                <h3 className='intro'>Introduction :-</h3>
                <p>The Calendar which we currently follow is called the Gregorian Calendar. 
                    It is named after Pope Gregory XIII, who introduced it in October 1582.</p>

                <p>The calendar was a refinement to the Julian calendar amounting to a. The

                    motivation for the reform was to stop the drift of the calendar and set the

                    date for Easter celebrations. Transition to the Gregorian calendar would

                    restore the holiday to the time of the year in which it was celebrated when

                    introduced by the early Church.</p>

                    <p>The reform was adopted initially by the Catholic countries of Europe. Protestants and Eastern Orthodox 
                    countrie continued to use the traditional Julian calendar and adopted the Gregorian reform after a time,

                    for the sake of convenience in international trade.</p>
                    <p> The last European country to adopt the reform was Greece, in 1923.</p>
            </div>
        </div>
    );
}
export default Bodypart;