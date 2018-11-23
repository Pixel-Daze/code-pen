import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

const TodoView = ({todo}) => (
    <li>
        <input 
            type="checkbox"
            defaultChecked={todo.finished}
            onClick={()=>todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

@inject('store')
@observer
class MobxTodo extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    submit = () => {
        console.log(this.props)
        this.props.store.listStore.addTodo(this.state.title)
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        const {store} = this.props
        return <div>
            <input type="text" value={this.state.title} name="title" onChange={e => this.handleChange(e)}/>
            <button onClick={this.submit}>submit</button>
            <ul>
                {store.listStore.todos.map(todo => 
                    <TodoView todo={todo} key={todo.id}/>
                )}
            </ul>
            Tasks left: {store.listStore.unfinishedTodoCount}
        </div>
    }
}




export default MobxTodo