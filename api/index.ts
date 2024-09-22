import express, { Request, Response } from 'express';
import { generate } from 'random-words';


const app = express();
const port = 3000;



const Game : {
    word: string;
    letters: string[];
    guesses: number;
} = {
    word: '',
    letters: [],
    guesses: 0
}

const generateGame = ()=>{
    Game.word = generate({exactly: 1, join: " " });
    Game.letters = [],
    Game.guesses = 0
}

let index = 0

app.post('/guess', (req: Request, res: Response) => {
    const letter = req.query.letter as string

    Game.letters.push(letter)

    res.json(Game)
})

app.get('/game', (req: Request, res: Response) => {
    res.json(Game)
})

app.delete('/game', (req: Request, res: Response) => {
    generateGame()
    res.json(Game)
})


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});