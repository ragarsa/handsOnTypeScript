let isHungry: boolean = true;

let chain: string[] = ['Hola', 'Qué tal'];

let chain1: Array<string | number> = ['hola', 'qué tal', 1];


//type 
type Player =
    {
        x: number,
        y: number,
        health: number
    }

let player: Player = {
    x: 1, 
    y: 1, 
    health: 100
}

interface Players {
    x: number, 
    y: number, 
    health: number,
    superpower: boolean
}

let player1: Players = {
    x:0, 
    y:0,
    health: 100,
    superpower: true
}

let player2: Players = {
    x:2, 
    y:1,
    health: 80,
    superpower:true
}

