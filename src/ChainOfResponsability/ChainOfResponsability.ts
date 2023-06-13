interface Chain {
    setNext: (request: Chain) => void
    handler: (request: any) => void
}

class FirstStep implements Chain {
    next: Chain | null = null

    setNext (request: Chain) {
        this.next = request
    }

    handler (request: any) {
        console.log('Primeiro passo')
         if(this.next !== null){
            this.next.handler(request)
        }
    }
}

class SecondStep implements Chain {
    private next: Chain | null = null

    setNext (request: Chain) {
        this.next = request
    }

    handler (request: any) {
        console.log('Segundo passo')
         if(this.next !== null){
            this.next.handler(request)
        }
    }
}

const sourceCode = () => {
    const c1 = new FirstStep()
    const c2 = new SecondStep()

    c1.setNext(c2)
    c1.handler('OK')
}

sourceCode()