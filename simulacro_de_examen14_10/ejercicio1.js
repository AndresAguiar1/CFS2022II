var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.emitiendoSonido = function () {
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(name) {
        return _super.call(this, name) || this;
    }
    Perro.prototype.emitiendoSonido = function () {
        console.log("el sonido del perro de nombre " + this.name, 'wuff wuff\n');
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(name) {
        return _super.call(this, name) || this;
    }
    Gato.prototype.emitiendoSonido = function () {
        console.log("el sonido del gato de nombre " + this.name, "meow meow\n");
    };
    return Gato;
}(Animal));
var gato1 = new Gato("michifu2");
gato1.emitiendoSonido(); // -> meow meow
var perro1 = new Perro("Pocky2");
perro1.emitiendoSonido(); // -> wuff wuff
