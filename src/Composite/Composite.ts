interface Graphic {
    id: number
    move: (x:number,y:number) => void
    draw: () => void
}

class Dot implements Graphic {
    id = Math.floor(Math.random()*10000)
    x: number
    y: number
    constructor(x: number,y:number){
        this.x = x
        this.y = y
    }

    move (x: number, y: number) {
        this.x += x
        this.y += y
    }

    draw () {
        console.log('DRAW DOT')
    }
}

class Compound implements Graphic {
    id = Math.floor(Math.random()*10000)
    children: Graphic[] = []
    constructor(){
    }

    add (child: Graphic) {
        this.children.push(child)
    }

    remove (child: Graphic) {
        this.children = this.children.filter(el => el.id !== child.id)
    }

    move (x: number, y: number) {
        for(const child of this.children){
            child.move(x,y)
        }
    }

    draw () {
        for(const child of this.children){
            child.draw()
        }
    }
}

class Circle extends Dot {
    radius: number
    constructor(x:number, y:number, radius:number){
        super(x, y)
        this.radius = radius
    }

    draw(): void {
        console.log('DRAW CIRCLE')
    }
}


class ImageEditor {
    all = new Compound()
    constructor(){
    }

    load() {
        this.all = new Compound()
        const dot = new Dot(5, 5)
        const circle = new Circle(10,10, 8)
        this.all.add(dot)
        this.all.add(circle)
    }

    groupSelected(components: Graphic[]) {
        const group = new Compound()
        for(const component of components){
            group.add(component)
            this.all.remove(component)
        }
        this.all.add(group)
        this.all.draw()
    }
}




const client = new ImageEditor()

client.load()
const dot = new Dot(1, 1)
const circle = new Circle(3,3, 5)
client.groupSelected([])
console.log('-----------')
client.groupSelected([dot, circle])
console.log('-----------')
client.load()
client.groupSelected([dot, circle])
client.groupSelected([dot, circle])

