import React, {Component} from 'react'
import {BoilingVerdict, TemperatureInput} from './components'

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        
        const rounded = Math.round(output * 1000) / 1000;
        console.log(rounded.toString())
        return rounded.toString();
    }

    render(){
        const {scale, temperature} = this.state
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator