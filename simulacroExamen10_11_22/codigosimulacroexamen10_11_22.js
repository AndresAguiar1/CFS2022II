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
var Motor = /** @class */ (function () {
    function Motor(marca, cantidadDeCilindros) {
        this.marca = marca;
        this.cantidadDeCilindros = cantidadDeCilindros;
        this.rpm = 0;
    }
    Motor.prototype.getCantidadDeCilindros = function () {
        return this.cantidadDeCilindros;
    };
    Motor.prototype.mostrarRpmMotor = function () {
        this.rpm += 8500;
    };
    return Motor;
}());
var motorTc = new Motor('Ford', 6);
motorTc.mostrarRpmMotor();
console.log(motorTc);
var MotorTractor = /** @class */ (function (_super) {
    __extends(MotorTractor, _super);
    function MotorTractor(marca, cantidadDeCilindros) {
        var _this = _super.call(this, marca, cantidadDeCilindros) || this;
        _this.horasMotor = 0;
        return _this;
    }
    MotorTractor.prototype.mostrarHorasMotor = function () {
        this.horasMotor += 50000;
    };
    return MotorTractor;
}(Motor));
var tractorDeutzVerde = new MotorTractor('Deutz', 4);
tractorDeutzVerde.mostrarHorasMotor();
console.log(tractorDeutzVerde);
var AutoCarrera = /** @class */ (function () {
    function AutoCarrera(tipoCajaCambios, cantidadDeMarchas, motor) {
        this.tipoCajaCambios = tipoCajaCambios;
        this.cantidadDeMarchas = cantidadDeMarchas;
        this.motor = motor;
    }
    return AutoCarrera;
}());
var AutoTcPista = new AutoCarrera('Zeta', 6, motorTc);
console.log(AutoTcPista);
var TurismoCarretera = /** @class */ (function () {
    function TurismoCarretera() {
    }
    TurismoCarretera.prototype.mostrarNombre = function () {
        console.log("El nombre del equipo Ford Oficial es ".concat(this.getNombre()));
    };
    return TurismoCarretera;
}());
var NombreEquiposTurismoCarretera = /** @class */ (function (_super) {
    __extends(NombreEquiposTurismoCarretera, _super);
    function NombreEquiposTurismoCarretera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NombreEquiposTurismoCarretera.prototype.getNombre = function () {
        return "Guri Matinez Sport";
    };
    return NombreEquiposTurismoCarretera;
}(TurismoCarretera));
var equipoMartinezTc = new NombreEquiposTurismoCarretera();
equipoMartinezTc.mostrarNombre();
var RegistroCambioAceite = /** @class */ (function () {
    function RegistroCambioAceite() {
    }
    RegistroCambioAceite.prototype.cambiarAceite = function () {
        console.log("es necesario cambio de aceite");
    };
    return RegistroCambioAceite;
}());
