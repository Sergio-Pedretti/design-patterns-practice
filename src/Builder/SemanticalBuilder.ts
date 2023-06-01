class BuildHouse {
    private constructor (
    private readonly houseParts: string[] = []
  ) {}

    static of(){
        return new BuildHouse()
    }

    buildWalls(): BuildHouse {
        console.log('Built Walls')
        this.houseParts.push('Walls')
        return this
    }
    buildRoof(): BuildHouse {
        console.log('Built Roof')
        this.houseParts.push('Roof')
        return this
    }
    buildFloor(): BuildHouse {
        console.log('Built Floor')
        this.houseParts.push('Floor')
        return this
    }
    buildPool(): BuildHouse {
        console.log('Built Pool')
        this.houseParts.push('Pool')
        return this
    }
    buildAttic(): BuildHouse {
        console.log('Built Attic')
        this.houseParts.push('Attic')
        return this
    }
    buildBasement(): BuildHouse {
        console.log('Built Basement')
        this.houseParts.push('Basement')
        return this
    }
    buildGarage(): BuildHouse {
        console.log('Built Garage')
        this.houseParts.push('Garage')
        return this
    }
    buildBackyard(): BuildHouse {
        console.log('Built Backyard')
        this.houseParts.push('Backyard')
        return this
    }
    build(): string[] {
        return this.houseParts
    }
}

const smallHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().build()
console.log(smallHouse)
const bigHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().buildGarage().buildPool().buildBackyard().build()
console.log(bigHouse)
