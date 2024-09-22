import hangman1 from './images/hangman1.png';
import hangman2 from './images/hangman2.png';
import hangman3 from './images/hangman3.png';
import hangman4 from './images/hangman4.png';
import hangman5 from './images/hangman5.png';
import hangman6 from './images/hangman6.png';
import hangman7 from './images/hangman7.png';
import hangman8 from './images/hangman8.png';
import hangman9 from './images/hangman9.png';
import hangman10 from './images/hangman10.png';
import hangman11 from './images/hangman11.png';

interface Props {
    wrongGuesses: number;
}

const images = [
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
    hangman8,
    hangman9,
    hangman10,
    hangman11
]

const Hangman = ({wrongGuesses}: Props) => { 
    const imageSrc = images[wrongGuesses]

    return (
        <img src={imageSrc} />
    );
}

export default Hangman;