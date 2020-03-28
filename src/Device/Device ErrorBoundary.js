import React from 'react';
import classes from './Device.css';


const device = (props) => {

  const rnd = Math.random();

  if (rnd > 0.7) {
     throw new Error('Something went wrong');
   }

  return (
    
    <div className={classes.Device}>
      <p key="key1" onClick={props.click}> 
        {props.name}  {props.MAC} {props.children}
        <input type="text" onChange={props.changed}  
        value={props.name}/>
      </p>
    </div>  
  );
};
    

export default device;