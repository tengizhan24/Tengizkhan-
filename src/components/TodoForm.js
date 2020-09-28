import React, { Component } from 'react';

import {connect} from 'react-redux';

import { addTodo } from '../redux/actions';

import styles from './TodoForm.module.css';

class TodoForm extends Component {
  state={
    text: ""
  }
  
  handleSubmit = (e)=>{
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: this.state.text,
      status: false
    };
    this.props.addTodo(todo);
    this.setState({
      text: ""
    });
  }
  
  handleInput = (e)=>{
    const text = e.target.value;
    this.setState({ text });
  }
  
  render() {
    return (
      <div>
        <form className={styles.addForm} onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleInput}
            value={this.state.text} 
            className={styles.addInp} 
            type="text" 
            required
          />
          <div>
            <button className={styles.myBtn} type="submit">Отправить</button>
            <button className={styles.myBtn} type="reset">Отмена</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return state.todo;
}

export default connect(mapStateToProps, { addTodo })(TodoForm)
