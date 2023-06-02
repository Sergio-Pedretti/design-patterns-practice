class RoundPin {
    radius: number
    constructor(radius: number){
        this.radius = radius
    }
}

class RoundHole {
    radius: number
    constructor(radius: number){
        this.radius = radius
    }

    fit (radius: number) {
        console.log('Only fits if it\'s a round pin')
        if(radius <= this.radius){
            console.log('It Fits')
            return
        }
        console.log('Get Another, does not fit')   
    }
}

class SquarePin {
   format = {
    height: 0,
    width: 0
}

   constructor(height: number, width:number){
    this.format.height = height
    this.format.width = width
   }
}


class AdapterSquarePinToRound extends RoundPin {
    radius: number
    constructor(private readonly square: SquarePin){
        super(square.format.height)
        const sum = (square.format.height * square.format.height) + (square.format.width * square.format.width)
        this.radius = Math.sqrt(sum)
    }
}

const pin = new RoundPin(8)
const square = new SquarePin(4,4)
const adaptedSquare = new AdapterSquarePinToRound(square)
const hole = new RoundHole(16)

hole.fit(pin.radius)

//Not assignable because it has different expected interfaces
//hole.fit(square.format)

hole.fit(adaptedSquare.radius)

const square2 = new SquarePin(20,20)
const adaptedSquare2 = new AdapterSquarePinToRound(square2)

hole.fit(adaptedSquare2.radius)

