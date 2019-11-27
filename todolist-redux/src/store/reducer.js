const defaultState = {
	todoLi: [],
	filterBtn: 'all'
}

export default (state = defaultState, action) => {
	if (action.type === 'add_items') {
		const newState = Object.assign({}, state);
		newState.todoLi.push({ text: action.value, isCheck: false });
		return newState;
	}

	if (action.type === 'change_item') {
		const newState = Object.assign({}, state);
		newState.todoLi[action.index].text = action.value;
		return newState;
	}

	if (action.type === 'delete_item') {
		const newState = Object.assign({}, state);
		newState.todoLi.splice(action.index, 1);
		return newState;
	}

	if (action.type === 'all_btn') {
		const newState = Object.assign({}, state);
		newState.filterBtn = 'all';
		return newState;
	}

	if (action.type === 'active_btn') {
		const newState = Object.assign({}, state);
		newState.filterBtn = 'active';
		return newState;
	}

	if (action.type === 'completed_btn') {
		const newState = Object.assign({}, state);
		newState.filterBtn = 'completed';
		return newState;
	}

	if (action.type === 'check_btn') {
		const newState = Object.assign({}, state);
		if (newState.todoLi[action.index].isCheck) {
			newState.todoLi[action.index].isCheck = false;
		} else {
			newState.todoLi[action.index].isCheck = true;
		}
		return newState;
	}

	if (action.type === 'clear_btn') {
		const newState = Object.assign({}, state);
		const newArr = [];
		newState.todoLi.map((item) => {
			if (!item.isCheck) {
				newArr.push(item);
			}
		})
		newState.todoLi = newArr;
		return newState;
	}

	if (action.type === 'tickAll_item') {
		const newState = Object.assign({}, state);
		if (action.value == "alltick") {
			action.value = "_alltick";
			newState.todoLi.map((item) => {
				if (item.isCheck) {
					item.isCheck = false;
				}
			})
		} else {
			action.value = "alltick";
			newState.todoLi.map((item) => {
				if (!item.isCheck) {
					item.isCheck = true;
				}
			})
		}
		return newState;
	}
	
	if (action.type === 'init_list_action') {
		const newState = Object.assign({}, state);
		newState.todoLi = action.data;
		return newState;
	}

	return state;
}