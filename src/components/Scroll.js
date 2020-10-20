import React from 'react';

const Scroll = (props) => {
  return(
    <div style={
      {
        overflowY: 'scroll', 
        height: '600px', 
        borderBottom: '5px solid gray'
      }
    }>
      {props.children}
    </div>
  );
}

export default Scroll;
