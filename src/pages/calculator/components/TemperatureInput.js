import React, {Component} from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component{

    handleChange = (e) => {
        this.props.onChange(e.target.value)
        this.setState({
            temperature: e.target.value
        })
    }
    
    render (){
        const {scale, temperature} = this.props
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange = {this.handleChange}/>
            </fieldset>
        )
    }
}

export default TemperatureInput