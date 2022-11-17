class Motor{
 private marca: string;
 private cantidadDeCilindros: number;
 private rpm: number;

 public constructor(marca: string, cantidadDeCilindros: number){

 this.marca = marca;
 this.cantidadDeCilindros = cantidadDeCilindros;
 this.rpm = 0;
}

public getCantidadDeCilindros():number{
 return this.cantidadDeCilindros;
}

public mostrarRpmMotor():void {
    this.rpm += 8500;
}
}

let motorTc: Motor = new Motor('Ford',6);

motorTc.mostrarRpmMotor();
console.log(motorTc);


class MotorTractor extends Motor{
 private horasMotor:number;  
 
 public constructor(marca:string, cantidadDeCilindros: number){
 super(marca,cantidadDeCilindros);
 this.horasMotor=0;
 }
 public mostrarHorasMotor():void {
    this.horasMotor += 50000;
}
}

let tractorDeutzVerde:MotorTractor = new MotorTractor('Deutz',4)
tractorDeutzVerde.mostrarHorasMotor();
console.log(tractorDeutzVerde);

class AutoCarrera{
    private tipoCajaCambios: string;
    private cantidadDeMarchas: number;
    private motor:Motor;
    public constructor(tipoCajaCambios: string, cantidadDeMarchas: number,motor:Motor){
       this.tipoCajaCambios=tipoCajaCambios;
       this.cantidadDeMarchas=cantidadDeMarchas;
       this.motor=motor;
    }
}
let AutoTcPista:AutoCarrera= new AutoCarrera('Zeta',6,motorTc);
console.log(AutoTcPista);


abstract class TurismoCarretera {
    abstract getNombre ():string;
    mostrarNombre (){
        console.log (`El nombre del equipo Ford Oficial es ${this.getNombre()}`);
    }
}
class NombreEquiposTurismoCarretera extends TurismoCarretera{
    getNombre(): string {
        return "Guri Matinez Sport"; 
    }
}
const equipoMartinezTc = new NombreEquiposTurismoCarretera();
equipoMartinezTc.mostrarNombre();



interface Servicio{
    diasTranscurridosUltimoCambioAceite:number;
    cambiarAceite():void;
}
 class RegistroCambioAceite implements Servicio{
    diasTranscurridosUltimoCambioAceite: 300;
    cambiarAceite(){
        console.log("es necesario cambio de aceite")
    }
 }