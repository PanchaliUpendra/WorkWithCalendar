import React from 'react';
import './Countodd.css'
function Countodd()
{
    let [year,setyear]=React.useState(0);
    function add(e)
    {


        setyear(e.target.value);
    }
    let[yr,setyr]=React.useState("");

    function add2()
    {
        if((year%4===0 && year%100!==0)||(year%400===0))
        {
            setyr("leap year");
        }else{
            setyr("ordinary year");
        }
        
    }
    return(
        <div>
             <h3 className='countodd'>Find the given year is leap year or not:</h3>
        <div className='form1'>
           
            < form className='form2'>
                <label>year:
                    <input type='number' onChange={add} />
                </label>
            </form>
        <button onClick={add2} className='prak'>button</button>
        <p>Answer:-<br></br>the given is <strong>{year}</strong> and this year is <strong>{yr}</strong></p>
        </div>
        </div>
    );
}
export default Countodd;