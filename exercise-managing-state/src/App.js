import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score';
import Game from './Game';

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
 /* constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {value1: Math.floor(Math.random() * 100),
                  value2: Math.floor(Math.random() * 100),
                  value3: Math.floor(Math.random() * 100),
                  proposedAnswer: 0,
                  numQuestions: 0,
                  numCorrect : 0,
                  
                 }
    }
    checkAnswerIsTrue = ()=>{

      
      const {value1,value2,value3 ,proposedAnswer,numCorrect,numQuestions} = this.state
       if(value1+value2+value3 === proposedAnswer){
        this.setState({value1: Math.floor(Math.random() * 100),
          value2: Math.floor(Math.random() * 100),
          value3: Math.floor(Math.random() * 100),
          proposedAnswer: value1+ value2 +value3 +  Math.floor(Math.random() * 100),
          numCorrect: numCorrect +1,
          numQuestions: numQuestions +1,

        });
         
      }
      else{
        this.setState({value1: Math.floor(Math.random() * 100),
          value2: Math.floor(Math.random() * 100),
          value3: Math.floor(Math.random() * 100),
          proposedAnswer: value1+ value2 +value3 +  Math.floor(Math.random() * 100),
          numQuestions: numQuestions +1,

        });
         
      }
      
    }
    checkAnswerIsWrong = ()=>{

      
      const {value1,value2,value3 ,proposedAnswer,numCorrect,numQuestions} = this.state
       if(value1+value2+value3 != proposedAnswer){
        this.setState({value1: Math.floor(Math.random() * 100),
          value2: Math.floor(Math.random() * 100),
          value3: Math.floor(Math.random() * 100),
          proposedAnswer: value1+ value2 +value3 +  Math.floor(Math.random() * 100),
          numCorrect: numCorrect +1,
          numQuestions: numQuestions +1,

        });
         
      }
      else{
        this.setState({value1: Math.floor(Math.random() * 100),
          value2: Math.floor(Math.random() * 100),
          value3: Math.floor(Math.random() * 100),
          proposedAnswer: value1+ value2 +value3 +  Math.floor(Math.random() * 100),
          numQuestions: numQuestions +1,

        });
         
      }
      
    }

    componentDidMount(){
      const {proposedAnswer} = this.state
      this.setState({
        proposedAnswer: this.state.value1 + this.state.value2 + this.state.value3 +  Math.floor(Math.random() * 100)
        
      })
      console.log('Count---componentDidMount' , proposedAnswer);
    }

  render() {
    const {value1,value2,value3, numQuestions,proposedAnswer, numCorrect} = this.state
    // const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3; 
 // this.setState({proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3 });
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.checkAnswerIsTrue}>True</button>
          <button onClick={this.checkAnswerIsWrong}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
} */



 state = {
  correctAnswer: 0,
  numQuestions: 0,
};



handleAnswer = answerWasCorrect => {
  if (answerWasCorrect) {
    this.setState(currState => ({
      correctAnswer: currState.correctAnswer + 1,
    }));
  }
  this.setState(currState => ({
    numQuestions: currState.numQuestions + 1,
  }));
};

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={this.handleAnswer} />
        <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
      </div>
    </div>
  );
}
}
export default App;

