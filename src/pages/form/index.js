import React,{ Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            inputValue: '',
            textareaValue: '',
            selectValue: ''
        }
    }

    handleSubmit = () => {
        const {inputValue, textareaValue, selectValue} = this.state
        console.log(`input value is ${inputValue}`)
        console.log(`textarea value is ${textareaValue}`)
        console.log(`select value is ${selectValue}`)
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render(){
        const {inputValue, textareaValue, selectValue} = this.state
        return (
            <div>
                <div>
                    <label>input:<input type="text" value={inputValue} name="inputValue" onChange={e => this.handleChange(e)} /></label>
                </div>
                <div>
                    <label>textarea:<textarea value={textareaValue} name="textareaValue" onChange={e => this.handleChange(e)}/></label>
                </div>
                <div>
                    <label>select:
                        <select value={selectValue} name="selectValue" onChange={this.handleChange}>
                            {!selectValue && <option value=""></option>}
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default Form