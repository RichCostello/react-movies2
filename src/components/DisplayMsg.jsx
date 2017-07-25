import React from 'react';

 export default function DisplayMsg(props) {

    if(!props.hasOwnProperty('message')){
      return(<div></div>);
    } else  {
      return(<div>{props.message}</div>);
    }
}
