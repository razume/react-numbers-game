import React from 'react';

const Numbers = props => {
  return (
    <div>
      <h3>Numbers:</h3>
      <br></br>
      <div className="number-list">
        {props.nums.map((num, i) => {
          return (
            <div className="num" style={{ marginRight: 5 + 'px' }} key={i}>
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Numbers;
