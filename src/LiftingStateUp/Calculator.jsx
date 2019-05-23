import React from 'react';
import './Calculator.css';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props){
  if(props.celzius >= 100){
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature)
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component{
 constructor(props){
   super(props);
   this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scala: 'c'};
 }

 handleCelsiusChange(temperature) {
  this.setState({scale: 'c', temperature});
}

handleFahrenheitChange(temperature) {
  this.setState({scale: 'f', temperature});
}

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
         <TemperatureInput
           scala ='c'
           temperature = {celsius}
           onTemperatureChange = {this.handleCelsiusChange} />

           <TemperatureInput
           scala ='f'
           temperature = {fahrenheit}
           onTemperatureChange = {this.handleCelsiusChange} />   

           <BoilingVerdict
           celsius={parseFloat(celsius)} />
      </div>
      );
  }
}

export default Calculator;

