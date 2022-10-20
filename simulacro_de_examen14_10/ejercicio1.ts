class Animal{
  public name: string;
  public constructor(name: string) {
    this.name = name;
  } 
 public emitiendoSonido(){
 
}
}



class Perro extends Animal{
   public constructor(name: string) {
  super(name);
  }
  public emitiendoSonido():void{
    console.log ("el sonido del perro de nombre " +  this.name ,'wuff wuff\n');
  }
}

 
 class Gato extends Animal{
  public constructor(name: string) {
 super(name);
  }
  public emitiendoSonido():void{
    console.log("el sonido del gato de nombre " +   this.name ,"meow meow\n");
  }
 }
 let gato1: Gato = new Gato("michifu2");
 gato1.emitiendoSonido(); // -> meow meow
 let perro1: Perro = new Perro("Pocky2");
 perro1.emitiendoSonido(); // -> wuff wuff
 