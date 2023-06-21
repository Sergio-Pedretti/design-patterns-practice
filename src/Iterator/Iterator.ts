interface MyIterator<T> extends Iterator<T> {
    reset: () => void
    next: () => IteratorResult<T>
}

class MyDefaultIterator implements MyIterator<string> {
    private index = 0
    constructor(private readonly dataStructure: MyDataStructure) {

    }

    next(): IteratorResult<string> {
        const items = this.dataStructure.getItems()
        const returnValue = this.makeValue(items[this.index])
        returnValue.done = this.index >= this.dataStructure.size()
        this.index += 1;
        return returnValue
    }

    reset ():void {
        this.index = 0
    }

    private makeValue (value: string): IteratorResult<string> {
        return {
            value,
            done: false
        }
    }
}

class MyReverseIterator implements MyIterator<string> {
    constructor(private readonly dataStructure: MyDataStructure) {
        
    }
    private index = this.dataStructure.size() - 1

    next(): IteratorResult<string> {
        const items = this.dataStructure.getItems()
        const returnValue = this.makeValue(items[this.index])
        returnValue.done = this.index < 0
        this.index -= 1;
        return returnValue
    }

    reset ():void {
        this.index = this.dataStructure.size() -1
    }

    private makeValue (value: string): IteratorResult<string> {
        return {
            value,
            done: false
        }
    }
}

class MyDataStructure {
    private collection: string[] = []
    private iterator: MyIterator<string> = new MyDefaultIterator(this)

    addItems (...items: string[]): void {
        items.forEach(item => this.collection.push(item))
    }

    getItems (): string[] {
        return this.collection
    }

    size ():number {
        return this.collection.length
    }

    changeIterator (iterator: MyIterator<string>):void {
        this.iterator = iterator
    }

    [Symbol.iterator]():MyIterator<string> {
        this.iterator.reset()
        return this.iterator
    }
}

export const main = () => {
    const dataStructure = new MyDataStructure()
    dataStructure.addItems('A', 'B', 'C', 'D', 'E')

    const [a, b] = dataStructure

    console.log(a, b)
    console.log('###')

    for(const data of dataStructure){
        console.log(data)
    }
    console.log('###')
    dataStructure.changeIterator(new MyReverseIterator(dataStructure))

    for(const data of dataStructure) {
        console.log(data)
    }
}

main()