"use strict";
class BuildHouse {
    constructor(houseParts = []) {
        this.houseParts = houseParts;
    }
    static of() {
        return new BuildHouse();
    }
    buildWalls() {
        console.log('Built Walls');
        this.houseParts.push('Walls');
        return this;
    }
    buildRoof() {
        console.log('Built Roof');
        this.houseParts.push('Roof');
        return this;
    }
    buildFloor() {
        console.log('Built Floor');
        this.houseParts.push('Floor');
        return this;
    }
    buildPool() {
        console.log('Built Pool');
        this.houseParts.push('Pool');
        return this;
    }
    buildAttic() {
        console.log('Built Attic');
        this.houseParts.push('Attic');
        return this;
    }
    buildBasement() {
        console.log('Built Basement');
        this.houseParts.push('Basement');
        return this;
    }
    buildGarage() {
        console.log('Built Garage');
        this.houseParts.push('Garage');
        return this;
    }
    buildBackyard() {
        console.log('Built Backyard');
        this.houseParts.push('Backyard');
        return this;
    }
    build() {
        return this.houseParts;
    }
}
const smallHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().build();
console.log(smallHouse);
const bigHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().buildGarage().buildPool().buildBackyard().build();
console.log(bigHouse);
