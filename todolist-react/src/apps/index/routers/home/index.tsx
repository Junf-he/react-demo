import { Art, Component } from 'art';

interface IProps { }
interface IState {
  userName: string;
  passWord: string;
}

export default class Home extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };
    // this.change = this.change.bind(this);
  }
  //使用箭头函数绑定this有3种方法
  // 1. 如本代码所示 事件绑定 onChange = {this.change},在声明change方法时，用箭头函数
  // 2. 事件绑定 onChange = {(e)=>{this.change(e)}}, 声明change方法时，可直接声明 private change(e){}
  // 3. 事件绑定 onChange={this.change}, 声明change方法时，直接声明private change(e){}, 在构造函数constructor中添加 this.change = this.change.bind(this)
  // 4. 事件绑定 onChange = {this.change.bind(this)}, 声明change方法时，直接声明private change(e){}
  private change = (e: Art.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'userName') {
      this.setState({
        userName: value
      })
    } else {
      this.setState({
        passWord: value
      })
    }
  }
  public render() {
    const { userName, passWord } = this.state;
    return (
      <Art.Fragment>
        <div >
          <h3>Home 页面</h3>
          <input type="text" name="userName" placeholder="用户名" onChange={this.change} />
          <input type="text" name="passWord" placeholder="密码" onChange={this.change} />
        </div>
        <div>
          <p>用户名： <span>{userName}</span></p>
          <p>密码: <span>{passWord}</span></p>
        </div>
      </Art.Fragment>
    );
  }
}
