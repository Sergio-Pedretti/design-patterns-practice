var Database = /** @class */ (function () {
    function Database() {
        Database.instance = new Database();
    }
    Database.getInstance = function () {
        if (Database.instance === null) {
            return new Database();
        }
        return Database.instance;
    };
    return Database;
}());
var firstInstance = Database.getInstance();
var secondInstance = Database.getInstance();
console.log(firstInstance === secondInstance);
