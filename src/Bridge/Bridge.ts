export interface Thing {
    getShape:() => string
    setShape:(shape: string) => void   
    getColor:() => string
    setColor:(color: string) => void
    speakLouder:() => void
    speakSoftly:() => void
    getVoice: () => number
}

export class Shape {
    constructor(protected thing: Thing){
    }

    createShape(shape: string){
        this.thing.setShape(shape)
        console.log(`The shape is a: ${this.thing.getShape()}`)
    }

    changeColor(color: string){
        this.thing.setColor(color)
        console.log(`${this.thing.getShape()} has now this color: ${this.thing.getColor()}`)
    }

    removeShape(){
        this.thing.setShape('removed')
        console.log(`The shape is a: ${this.thing.getShape()}`)
    }

    volume(){
        console.log(this.thing.getVoice())
    }

    louder(){
        this.thing.speakLouder()
    }

    softly(){
        this.thing.speakSoftly()
    }
}

class AdvancedShape extends Shape {
    yenYang(){
        this.thing.setColor('black and white with white and black dots')
    }
}

class Triangle implements Thing {
    private color = 'black'
    private shape = 'triangle'
    private speak = 50

    getShape(){
        return this.shape
    }

    setShape(){
        this.shape = 'triangle'
    }

    getColor(){
        return this.color
    }

    setColor(color: string){
        this.color = color
    }

    speakLouder() {
        this.speak = this.speak + 10
    }

    speakSoftly() {
        this.speak = this.speak - 10
    }

    getVoice(){
        return this.speak
    }
    
}

const triangle = new Triangle()
const shape = new Shape(triangle)

shape.changeColor('blue')
shape.volume()
shape.softly()
shape.volume()
shape.softly()
shape.volume()
shape.softly()
shape.volume()
shape.louder()
shape.volume()
shape.louder()
shape.volume()





