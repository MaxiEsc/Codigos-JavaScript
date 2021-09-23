class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get obtTipoEntrada(){
        return this._tipoEntrada 
    }

    set camTipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get obtMarca(){
        return this._marca
    }
    set camMarca(marca){
        this._marca = marca
    }

}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRatones = ++Raton.contadorRatones
    }

    get obtIdRatones(){
        return this._idRatones
    }

    toString(){
        return `Raton = [ ID Raton: ${this._idRatones} \n Marca: ${super.obtMarca} \n Tipo Entrada: ${super.obtTipoEntrada} ]`
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get obtIdTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado = [ ID Teclado: ${this._idTeclado} \n Marca: ${super.obtMarca} \n Tipo Entrada: ${super.obtTipoEntrada} ]`
    }
}

class Monitor {

    static contadorMonitor = 0

    constructor (nombre, marca ,tamanio){
        this._idMonitor = ++Monitor.contadorMonitor
        this._nombre = nombre
        this._marca = marca
        this._tamanio = tamanio
    }

    get obtIdMonitor(){
        return this._idMonitor
    }

    get obtNombre(){
        return this._nombre
    }

    set camNombre(nombre){
        this._nombre = nombre
    }

    get obtMarca(){
        return this._marca  
    }

    set camMarca(marca){
        return this._marca
    }

    get obtTamanio(){
        return this._tamanio
    }

    set camTamanio(tamanio){
        this._tamanio = tamanio
    }

    toString(){
        return `Monitor = [ ID Monitor: ${this._idMonitor} \n Marca: ${this._marca} \n Tamaño: ${this._tamanio} ]`
    }
}

class Computadora {

    static contadorComputadoras = 0

    constructor( monitor, raton ,teclado, name){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;       
        this._nombre = name;
    }

    get obtIdComputadora(){
        return this._idComputadora
    }

    get obtNombre(){
        return this._nombre
    }

    set camNombre(nombre){
        this._nombre = nombre
    }

    get obtMonitor(){
        return this._monitor
    }

    set camMonitor(monitor){
        this._monitor = monitor
    }

    get obtTeclado(){
        return this._teclado
    }

    set camTeclado(teclado){
        this._teclado = teclado
    }

    get obtRaton(){
        return this._raton
    }

    set camTeclado(teclado){
        this._teclado = teclado
    }

    toString(){
        return `Computadora = [ID Computadora: ${this.obtIdComputadora}  | Nombre: ${this.obtNombre} \n Monitor: ${this.obtMonitor} \n Teclado: ${this.obtTeclado} \n Raton: ${this.obtRaton} ]`
    }
}

class Orden{

    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrden;        
        this._arr_cpu = [] ; 
        //this._contadordeCpus = 0 en caso de no usar push  
        this._muestra = '';    
    }

    get ObtIdOrden(){
        return this._idOrden
    }

    agregarComputadora(cpu){        
        this._arr_cpu.push(cpu)
        // tambien se puede utilizar this._arr_cpu[this._contadordeCpus] = cpu pero probemos el push esta vez 
    }

    mostrarOrden(){
        let acumulador = '';
        for(let recorrer of this._arr_cpu){
            acumulador += '\n' + recorrer.toString() + ' | ';
        }
        console.log( '[ ' + acumulador + ' ]');
    }

    get mostrar(){
        this._muestra = ' ';
        for(let recorrer of this._arr_cpu){
            this._muestra += '\n' + recorrer.toString() + ' | ';
        }
        return this._muestra;
    }

    toString(){
        return `| Orden: ${this.ObtIdOrden} | ${this.mostrar}`
    }
}

let rat1 = new Raton('USB','Verbatim');
let rat2 = new Raton('Cable','Noga');

console.log(rat1.toString());
console.log(rat2.toString());

let tec1 = new Teclado('USB',"Dell");
let tec2 = new Teclado('Cable', 'Acer')

console.log(tec1.toString());
console.log(tec2.toString());

let mon1 = new Monitor('CTR','Samsung','15 pulgadas');
let mon2 = new Monitor('LED','Lenovo','19 pulgadas');

console.log(mon1.toString());
console.log(mon2.toString());

let cpu1 = new Computadora(mon1 ,tec1, rat1 , 'No Gamer');
let cpu2 = new Computadora(mon2 ,tec2 ,rat2 , 'Gamer');

console.log(cpu1.toString());
console.log(cpu2.toString());

let ord1 = new Orden();
ord1.agregarComputadora(cpu1);
ord1.agregarComputadora(cpu2);

//ord1.mostrarOrden();

console.log(ord1.toString());
