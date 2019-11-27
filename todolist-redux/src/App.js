import React, { Component, Fragment } from 'react';
import store from './store';
import { addItems, changeItem, deleteItem, allBtn, activeBtn, completedBtn, checkBtn, clearBtn, tickAllBtn, getTodoList } from './store/actionCreaters'
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		store.subscribe(this.handleStoreChange);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleStoreChange = () => {
		this.setState(store.getState());
	}

	handleClick = (e) => {
		if (e.keyCode == 13) {
			if (e.target.value.trim()) {
				const action = addItems(e.target.value.trim());
				store.dispatch(action);
			}
			e.target.value = '';
		}
	}

	allClick = () => {
		const action = allBtn();
		store.dispatch(action);
		console.log(1)
	}

	activeClick = () => {
		const action = activeBtn();
		store.dispatch(action);
	}

	CompletedClick = () => {
		const action = completedBtn();
		store.dispatch(action);
	}

	clearClick = () => {
		const action = clearBtn();
		store.dispatch(action);
	}

	check = (index) => {
		const action = checkBtn(index);
		store.dispatch(action);
	}

	delete = (index) => {
		const action = deleteItem(index);
		store.dispatch(action);
	}

	tickAll = (e) => {
		const action = tickAllBtn(e.target.className);
		store.dispatch(action);
	}

	change = (e, index) => {
		const action = changeItem(e.target.value, index);
		store.dispatch(action);
	}

	componentDidMount() {
		const action = getTodoList();
		store.dispatch(action);
	}

	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<div className="head">
						<h1>todos</h1>
						<img onClick={(e) => { this.tickAll(e) }} className="_alltick" />
						<input className="input" placeholder="What need to be done?" onKeyDown={this.handleClick} />
					</div>
					<div className="list">
						<ul>
							{
								this.state.todoLi.map((text, index) => {

									let dom = (<li key={index} className="listyle" >
										<input checked={text.isCheck} type="checkbox" onClick={() => { this.check(index) }} className="check" />
										<input type="text" className="toggle" onChange={(e) => { this.change(e, index) }} value={text.text} />
										<button className="destroy" onClick={() => { this.delete(index) }}></button>
									</li>)

									if (this.state.filterBtn == "all") {
										return dom
									} else if (this.state.filterBtn == "active") {
										if (this.state.todoLi[index].isCheck == false) {
											return dom
										}
									} else {
										if (this.state.todoLi[index].isCheck == true) {
											return dom
										}
									}
								})
							}

						</ul>
					</div>
					<div className="footer">
						<span className="count">
							<strong>{(() => {
								let num = 0;
								this.state.todoLi.map((text) => {
									if (!text.isCheck) {
										num++
									}
								})
								return num
							})()}</strong>
							<span> </span>
							<span>item</span>
							<span> left</span>
						</span>
						<div className="filter">
							<div className="active all" onClick={this.allClick}>All</div>
							<div className="act" onClick={this.activeClick}>Active</div>
							<div className="com" onClick={this.CompletedClick}>Completed</div>
						</div>
						<button className="clear" onClick={this.clearClick}>Clear completed</button>
					</div>
				</div>
			</Fragment>
		)
	}
}
export default App;