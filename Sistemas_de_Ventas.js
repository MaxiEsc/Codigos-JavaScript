class Producto{

    static contadorProductos = 0;

    constructor (nombre , precio){
        this._nombre = nombre
        this._precio = precio
        this._idProducto = ++Producto.contadorProductos
    }

    get obtIdProducto(){
        return this._idProducto
    }

    get obtNombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get obtPrecio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio
    }

    toString(){
        return `idProducto: ${this._idProducto} |  Nombre: ${this._nombre} \n Precio: ${this._precio} \n`
    }
}

class Orden {

        static contadorOrdenes = 0;
        static get MAX_PRODUCTOS() {
            return 5;
        }
        constructor (){
            this._idOrden = ++Orden.contadorOrdenes
            this._arreglo = [];
            this._contadorProductosAgregados = 0;
        }

        get idOrden(){
            return this._idOrden
        }

        agregarProducto(producto){
            if(this._arreglo.length < Orden.MAX_PRODUCTOS){
                this._arreglo[this._contadorProductosAgregados++] = producto; //this._productos.push(producto) es mas facil pero la hecha tiene mas sentido
            }else{
                console.log("Usted ha alcanzado la cantidad maxima de limite de compra total de: " + this._arreglo.length)
            }
        }

        get calcularTotal(){
            let acumuladorTotal = 0;
             /*
            for (let i = 0; i < this._arreglo.lenght; i++){
                acumuladorTotal += this._arreglo[i].obtPrecio();
            } // por alguna razon no funciona es curioso
           */
            for(let los_productos of this._arreglo){
                acumuladorTotal += los_productos.obtPrecio;
            }
            
            return acumuladorTotal;
        }

        mostrarOrden(){
            let ordenProductos = '->';
            for(let muestra_productos of this._arreglo){
                ordenProductos += '\n' + muestra_productos.toString() + ' | ';
            }
            console.log( '[' + ordenProductos + ']')
        }

        toString(){
            return `IdOrden: ${this._idOrden} | Total:  ${this.calcularTotal} \n | ${this.ordenProductos} `
        }
}

let muestra_1 = new Producto('celular', 300);
let muestra_2 = new Producto('heladera', 8000);
let muestra_3 = new Producto('ventilador', 70);
let muestra_4 = new Producto('mueble', 400);
let muestra_5 = new Producto('mouse', 1000);
let muestra_6 = new Producto('ventana', 2000);
console.log(muestra_1.toString())

let orden_1 = new Orden();
orden_1.agregarProducto(muestra_1);
orden_1.agregarProducto(muestra_2);
orden_1.agregarProducto(muestra_3);
orden_1.agregarProducto(muestra_4);
orden_1.agregarProducto(muestra_5);
orden_1.agregarProducto(muestra_6);
orden_1.mostrarOrden();
console.log("total de la orden: " + orden_1.calcularTotal)


