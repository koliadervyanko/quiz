import './index.css';
import questions from "./components/Questions"
import Result from './components/Result';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  let onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }

  }


  return (
    <div className="App">
      {
        step !== questions.length ? <Game question={question} onClickVariant={onClickVariant} step={step} /> : <Result correct={correct}/>
      }

    </div>
  );
}

export default App;
