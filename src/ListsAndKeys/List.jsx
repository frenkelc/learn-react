import React from 'react';
import './List.css';

class List extends React.Component{
  constructor(props){
    super(props);
    this.porps = {numbers: [1, 2, 3, 4, 5]};
  }
  
  render()
  {
    return(
        <NumberList numbers={this.props.numbers} />
    );
  }
}


function ListItems(props){
  return <li>{props.value}</li>;
}

  function NumberList(props){
  const numbers = this.props.numbers;
  
  return(
    <ul>
      {numbers.map((number) =>
      <listItem key={number.toString()}
                value={number} />
      )}
    </ul>
  );

  /*another way with tha same result
  const listItems = numbers.map((number) =>
   <listItem key={number.toString()}
            value={number}/>

  );
  return(
    <ul>
      {listItems}
      </ul>
  );*/
}


export default List;
