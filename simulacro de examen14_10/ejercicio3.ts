class CanalesTV{
    private canalActual: number;
    private nombreCanalActual: string;
  
    public constructor(canalActual:number,nombreCanalActual:string){
      this.canalActual= canalActual;
      this.nombreCanalActual= nombreCanalActual;  
  } 
 
   public mostrarNumeroCanal(){
      console.log("El numero de canal actual es "+ this.canalActual);
  }
   public nombrarCanalActual(){
      console.log("El nombre de canal actual es "+ this.nombreCanalActual);
    }
}   
  

class AvVideo extends CanalesTV{
  
  private plataforma: string;
  public constructor(canalActual:number,nombreCanalActual:string, plataforma:string){
  super(1,"Tv Publica");
  this.plataforma=plataforma;
  }

  public plataformaActual(){
    console.log("El nombre de la plataforma actual es "+ this.plataforma);
  } 
}

let canal2:CanalesTV= new CanalesTV(2,"TYC");
let plataforma1:AvVideo= new AvVideo(1,"series","Nexflix");

canal2.mostrarNumeroCanal();
canal2.nombrarCanalActual();
plataforma1.plataformaActual();
  