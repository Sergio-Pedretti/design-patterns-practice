"use strict";
class Database {
    constructor() {
        Database.instance = new Database();
    }
    static getInstance() {
        if (Database.instance === null) {
            return new Database();
        }
        return Database.instance;
    }
}
const firstInstance = Database.getInstance();
const secondInstance = Database.getInstance();
console.log(firstInstance === secondInstance);
