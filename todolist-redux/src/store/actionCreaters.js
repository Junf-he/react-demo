import { ADD_ITEMS, CHANGE_ITEM, DELETE_ITEM, ALL_BTN, ACTIVE_BTN, COMPLETED_BTN, CHECK_BTN, CLEAR_BTN, TICKALL_BTN, INIT_LIST_ACTION } from "./actionTypes";
import axios from 'axios';

export const addItems = (value) => ({
	type: ADD_ITEMS,
	value
})

export const changeItem = (value, index) => ({
	type: CHANGE_ITEM,
	value,
	index
})

export const deleteItem = (index) => ({
	type: DELETE_ITEM,
	index
})

export const allBtn = () => ({
	type: ALL_BTN
})

export const activeBtn = () => ({
	type: ACTIVE_BTN
})

export const completedBtn = () => ({
	type: COMPLETED_BTN
})

export const checkBtn = (index) => ({
	type: CHECK_BTN,
	index
})

export const clearBtn = () => ({
	type: CLEAR_BTN
})

export const tickAllBtn = (value) => ({
	type: TICKALL_BTN,
	value
})

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

export const getTodoList = () => {
	return (dispatch) => {
		axios.get('./list.json').then((res) => {
			const data = res.data;
			const action = initListAction(data);
			dispatch(action);
		})
	}
}
