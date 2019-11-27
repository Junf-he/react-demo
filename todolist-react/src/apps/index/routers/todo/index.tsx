import { Art, Component } from 'art';
import Ajax from 'art-ajax';
// import 'antd/dist/antd.css';
// import { DatePicker } from 'antd'; 
import './index.css';

interface IProps { }
interface IState {
  todoLi: any[];
  filterBtn: string;
}

export default class Todo extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      todoLi: [],
      filterBtn: 'all'
    };
    Ajax.get("/api/todos/list").then(({data})=>{
      this.setState({
        todoLi:data.beans
      })
    })
  }

  private handleClick = (e: any) => {
    if (e.keyCode == 13) {
      let result = [...this.state.todoLi];
      if (e.target.value) {
        result.push({ text: e.target.value, isCheck: false });
      }
      this.setState({
        todoLi: result,
        filterBtn: 'all'
      })
      e.target.value = '';
    }
  }

  private allClick = () => {
    this.setState({
      filterBtn: 'all'
    })
  }

  private activeClick = () => {
    this.setState({
      filterBtn: 'active'
    })
  }
  private CompletedClick = () => {
    this.setState({
      filterBtn: 'completed'
    })
  }

  private clearClick = () => {
    let newArr = [...this.state.todoLi];
    let _newArr: any = [];
    newArr.map((text) => {
      if (!text.isCheck) {
        _newArr.push(text);
      }
    })
    this.setState({
      todoLi: _newArr
    })
  }

  private check = (index: any) => {
    let newArr = [...this.state.todoLi];
    if (newArr[index].isCheck) {
      newArr[index].isCheck = false;
      // e.target.className="_tick";
    } else {
      newArr[index].isCheck = true;
      // e.target.className="tick";
    }
    this.setState({
      todoLi: newArr
    })
  }

  private delete = (index: any) => {
    const newArr = [...this.state.todoLi]
    newArr.splice(index, 1)
    this.setState({
      todoLi: newArr
    })
  }

  private tickAll = (e: any) => {
    let newArr = [...this.state.todoLi];
    if (e.target.className == "alltick") {
      e.target.className = "_alltick";
      newArr.map((text) => {
        if (text.isCheck) {
          text.isCheck = false;
        }
      })
    } else {
      e.target.className = "alltick";
      newArr.map((text) => {
        if (!text.isCheck) {
          text.isCheck = true;
        }
      })
    }
    this.setState({
      todoLi: newArr
    })
  }

  private change = (e: any, index: any) => {
    let newArr = [...this.state.todoLi];
    newArr[index].text = e.target.value;
    this.setState({
      todoLi: newArr
    })
  }

  public render() {
    return (
      <Art.Fragment>
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
                    <input checked={this.state.todoLi[index].isCheck} type="checkbox" onClick={() => { this.check(index) }} className="check" />
                    {/* <span onClick= {(e)=>{this.check(e,index)}} className="tick"></span> */}
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
                }
                )}

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
      </Art.Fragment>
    );
  }
}

