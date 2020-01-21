import React from 'react';

const Stats = props => {
  const totalNums = props.nums.length;
  const odds = props.nums.filter(num => num % 2);
  const totalOdds = odds.length;
  const evens = props.nums.filter(num => (num > 0 ? !(num % 2) : ''));
  const totalEvens = evens.length;
  let uniqueNums = props.nums.filter(
    (num, index, numArr) => numArr.indexOf(num) === index
  );
  console.log('evens', evens);
  return (
    <div>
      <h3>Stats</h3>
      <p>There are {totalNums} total numbers</p>
      <p>There are {totalOdds} odd numbers</p>
      <div className="number-list">
        {odds.map((num, i) => {
          return (
            <div className="num" style={{ marginRight: 5 + 'px' }} key={i}>
              {num > 0 ? ` ${num}` : null}
            </div>
          );
        })}
      </div>

      <p>There are {totalEvens} even numbers</p>
      <div className="number-list">
        {evens.map((num, i) => {
          return (
            <div className="num" style={{ marginRight: 5 + 'px' }} key={i}>
              {num > 0 ? ` ${num}` : null}
            </div>
          );
        })}
      </div>

      <p>There are {uniqueNums.length} unique numbers</p>
      <div className="number-list">
        {uniqueNums.map((num, i) => {
          return (
            <div className="num" style={{ marginRight: 5 + 'px' }} key={i}>
              {num > 0 ? ` ${num}` : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
