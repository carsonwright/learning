import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hangman from './Hangman';
import { faker } from '@faker-js/faker';

function App() {
  const ref = React.useRef<HTMLInputElement>(null);
  const [wrongGuesses, setWrongGuesses] = React.useState(0);
  const [correctGuesses, setCorrectGuesses] = React.useState<string[]>([]);
  const [word, setWord] = React.useState('');
  
  const generateWord = () => {
    setWord(faker.lorem.word())
  }

  const handleAddGuess= ()=>{
    if(ref.current != null && word.includes(ref.current.value)){
      setCorrectGuesses([...correctGuesses, ref.current.value])
    }else{
      setWrongGuesses(wrongGuesses+1)
    }
    if(word == overwrittenWord()){
      alert('You won!')
    }else if(wrongGuesses == 10){
      alert('You lost! The word was '+ word)
    }
  }
  
  const handleResetGuess= ()=>{
    generateWord()
    setWrongGuesses(0)
    setCorrectGuesses([])
  }

  const overwrittenWord = ()=>(
    word.split('').map((letter) => {
      if(correctGuesses.includes(letter)){
        return letter
      }
      return '_'
    }).join('')
  )


  return (
    <div className="App">
      The word is:
      <br />
      &nbsp;{overwrittenWord().split('').join(' ')}&nbsp;
      <br />
      <br />
      <Hangman wrongGuesses={wrongGuesses}  />
      <br />
      <input type="text" ref={ref} />
      <button onClick={handleAddGuess} className='guess'>Guess</button>
      <br />
      <br />
      Restart Game?
      <br />
      <button onClick={handleResetGuess}>reset</button>
    </div>
  );
}

export default App;
