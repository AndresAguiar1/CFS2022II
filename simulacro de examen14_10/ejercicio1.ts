class Animal{
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public sonidoPerro(){
    console.log ("el sonido del perro de nombre " +  this.name ,'wuff wuff\n');
  }
    public sonidoGato(){
      console.log("el sonido del gato de nombre " +   this.name ,"meow meow\n");
    }
}



class Perro extends Animal{
   constructor(name: string) {
  super(name);
  }
 }
 
 class Gato extends Animal{
  constructor(name: string) {
 super(name);
  }
 }
 let gato1: Gato = new Gato("michifu2");
 gato1.sonidoGato(); // -> meow meow
 let perro1: Perro = new Perro("Pocky2");
 perro1.sonidoPerro(); // -> wuff wuff
 