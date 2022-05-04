import React from 'react';
import github from './github.png';
import linkin from './linkin.png';
import wesite from './wesite.png';
import './Personal.css'
function Personal()
{
    return(
        <div className='personal'>
            <p>created by <strong>panchali upendra</strong> in 2022</p>
            <div className='dev'>
                <td><a href={"https://github.com/PanchaliUpendra"}><img src={github} className="imgxl"/></a></td>
                <td><a href={"https://www.linkedin.com/in/panchali-upendra-242387193/"}><img src={linkin} className="imgss"/></a></td>
                <td><a href={"https://panchaliupendra.netlify.app/"}><img src={wesite} className="imgss"/></a></td>
            </div>
            <p>_____________________________________________________________________________________________</p>
            <p>upendrapanchali2000@gmail.com</p>
        </div>
        );
}
export default Personal;
