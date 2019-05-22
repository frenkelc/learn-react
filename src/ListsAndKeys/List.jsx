import React from 'react';
import './List.css';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {numbers: [1, 2, 3, 4, 5]};
  }
  
  render()
  {
    return(
        <NumberList numbers={this.state.numbers} />
    );
  }
}

function NumberList(props){
  const numbers = this.state.numbers;
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}</li>

  );
  return(
    <ul>{listItems}</ul>
  );
}


export default List;
