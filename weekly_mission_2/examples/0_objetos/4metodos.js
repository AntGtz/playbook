let metodos={//define objeto
    color: 'Azul',
    sabor: 'Chocolate',//define propiedades

    unir:function(){//define el metodo(funcion)
        return `${this.color} y ${this.sabor}`//la funcion toma dos propiedades
    }
}

console.log(metodos['color'])//imprime una propiedad del objeto
console.log(metodos.unir())//imprime el metodo