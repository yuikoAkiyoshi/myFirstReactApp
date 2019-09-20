import React, {Component} from 'react';
import './App.css';
import title from './img/title.png';
import kabakichi from './img/kabakiti_yoko.png';

//関数コンポーネント
const App =() => (<Counter></Counter>)

  class Counter extends Component{
    constructor(){
      super()
      this.state ={
        age:26,
        income:25,
        savings:700,
        old:0.7,
        show: false,
      }
    }
    // inputテキストの動的入れ替え処理
    onChangeText1(event) {
      const value = event.target.value;
      this.setState({
        age: value,
      });
    }
    onChangeText2(event) {
      const value = event.target.value;
      this.setState({
        income: value,
      });
    }
    onChangeText3(event) {
      const value = event.target.value;
      this.setState({
        savings: value,
      });
    }
    onChangeText4(event) {
      const value = event.target.value;
      this.setState({
        old: (Math.round(value*10))/10,
      });
    }
    //button押した時に結果欄を表示
    onClickShow(event) {
      this.setState({
        show:!this.state.toggle
      });
    }

    render(){
      return (
        <React.Fragment>
          <div className="mainWrapper">
            <div className="subWrapper">
              <div className="title"><img src={title} alt="必要貯蓄額シュミュレーター"></img></div>
              <div className="wrapper">
                <div className ="inputArea">
                  <div className="inputArea__container">
                    <p className="inputArea__text">▼入力してください</p>
                    <div className="inputArea__wrapper">
                      <label className="inputItem">
                        <span className="inputTitle">年齢</span>
                        <input type="number" onChange={event => this.onChangeText1(event)}/>
                      </label>
                      <label className="inputItem">
                        <span className="inputTitle">手取り月収<span className="inputTitle--mini">（万円）</span></span>
                        <input type="number" onChange={event => this.onChangeText2(event)} />
                      </label>
                      <label className="inputItem">
                        <span className="inputTitle">現在貯蓄額<span className="inputTitle--mini">（万円）</span></span>
                        <input type="number" onChange={event => this.onChangeText3(event)} />
                      </label>
                      <label className="inputItem">
                        <span className="inputTitle">老後生活水準<span className="inputTitle--mini">（倍）</span></span>
                        <input type="number" step="0.1" onChange={event => this.onChangeText4(event)} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="simulation">
                  <div className="simulation__container">
                    <button　className="simulation__btn" onClick={ ()=> this.onClickShow()}>シュミレーション開始</button>
                  </div>
                </div>
                <div className="resultArea" id={this.state.show ? "resultShow":"resultHide"} >
                  <div className="resultArea__container">
                    <div className="resultArea__text">あなたの月間必要貯蓄額は</div>
                    <Amount amount={(Math.floor(((this.state.old*this.state.income*12 -(this.state.income)*12*0.3-(this.state.savings-1000)/30)/(((65 - this.state.age)/30+this.state.old)*this.state.income*12)*this.state.income)*10))/10} />
                    <div className="resultArea__text">万円です！</div>
                  </div>
                </div>
                <div className="kabakichi">
                  <div className='arrow_box'>がんばって貯金しよう！</div>
                  <img src={kabakichi} alt='かばきち'></img>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
}

//動的に変更される必要貯蓄額

const Amount =(props) =>{
  return<div className="resultArea__amount">{props.amount}</div>
}

export default App;
