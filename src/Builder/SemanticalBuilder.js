var BuildHouse = /** @class */ (function () {
    function BuildHouse(houseParts) {
        if (houseParts === void 0) { houseParts = []; }
        this.houseParts = houseParts;
    }
    BuildHouse.of = function () {
        return new BuildHouse();
    };
    BuildHouse.prototype.buildWalls = function () {
        console.log('Built Walls');
        this.houseParts.push('Walls');
        return this;
    };
    BuildHouse.prototype.buildRoof = function () {
        console.log('Built Roof');
        this.houseParts.push('Roof');
        return this;
    };
    BuildHouse.prototype.buildFloor = function () {
        console.log('Built Floor');
        this.houseParts.push('Floor');
        return this;
    };
    BuildHouse.prototype.buildPool = function () {
        console.log('Built Pool');
        this.houseParts.push('Pool');
        return this;
    };
    BuildHouse.prototype.buildAttic = function () {
        console.log('Built Attic');
        this.houseParts.push('Attic');
        return this;
    };
    BuildHouse.prototype.buildBasement = function () {
        console.log('Built Basement');
        this.houseParts.push('Basement');
        return this;
    };
    BuildHouse.prototype.buildGarage = function () {
        console.log('Built Garage');
        this.houseParts.push('Garage');
        return this;
    };
    BuildHouse.prototype.buildBackyard = function () {
        console.log('Built Backyard');
        this.houseParts.push('Backyard');
        return this;
    };
    BuildHouse.prototype.build = function () {
        return this.houseParts;
    };
    return BuildHouse;
}());
var smallHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().build();
console.log(smallHouse);
var bigHouse = BuildHouse.of().buildWalls().buildRoof().buildFloor().buildGarage().buildPool().buildBackyard().build();
console.log(bigHouse);
