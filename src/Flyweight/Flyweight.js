var LocationDelivery = /** @class */ (function () {
    function LocationDelivery(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    LocationDelivery.prototype.deliver = function (name, number) {
        console.log('Entrega para %s', name);
        console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
        console.log('Número: ', number);
        console.log('######');
    };
    return LocationDelivery;
}());
var DeliveryFactory = /** @class */ (function () {
    function DeliveryFactory() {
        this.locations = {};
    }
    DeliveryFactory.prototype.generateKey = function (input) {
        return Object.values(input).map(function (item) { return item.replace(/\s+/, ''); }).join('_');
    };
    DeliveryFactory.prototype.makeLocation = function (intrinsicState) {
        var key = this.generateKey(intrinsicState).toLowerCase();
        if (key in this.locations)
            return this.locations[key];
        this.locations[key] = new LocationDelivery(intrinsicState);
        return this.locations[key];
    };
    DeliveryFactory.prototype.getLocation = function () {
        return this.locations;
    };
    return DeliveryFactory;
}());
var deliveryContext = function (factory, name, number, street, city) {
    var location = factory.makeLocation({ street: street, city: city });
    location.deliver(name, number);
};
var mainCode = function () {
    var myFactory = new DeliveryFactory();
    console.time('1');
    deliveryContext(myFactory, 'Sérgio', '1054', 'Avenida Silva Jardim', 'Curitiba');
    console.timeEnd('1');
    console.time('2');
    deliveryContext(myFactory, 'Andreia', '1054', 'Avenida Silva Jardim', 'Curitiba');
    console.timeEnd('2');
    console.time('3');
    deliveryContext(myFactory, 'Jaqueline', '167', 'Coronel Zamith', 'Friburgo');
    console.timeEnd('3');
};
mainCode();
