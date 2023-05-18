const pesos = [0.1, 0.1, 0.15, 0.15, 0.5]; 
const claseDW1 = {
    est1: {
        nombre: "Ana",
        notas: [96, 80, 90, 50, 75]
    },
    est2: {
        nombre: "Blas",
        notas: [84, 30, 1, 90, 60]
    },
    est3: {
        nombre: "Carlos Vega",
        notas: [100, 90, 75, 75, 73]
    },
    est4: {
        nombre: "Damian",
        notas: [65, 65, 65, 65, 65]
    },
    est5: {
        nombre: "Enma",
        notas: [90, 80, 70, 60, 50]
    },
    est6: {
        nombre: "Filomena",
        notas: [30, 40, 50, 60, 75]
    },

    promedio: function () {
        const notasPonderadas = this.notas.map((nota, i)=> nota * pesos[i]);
        const sumaNotasPonderadas = notasPonderadas.reduce((a, b) => a + b, 0 );
        const NotaFinal = (0,03 * sumaNotasPonderadas) / pesos.reduce((a, b) => a + b, 0); 
        return NotaFinal;
    },

    notaEjercicios: function (){
        const nota1 = this.notas[0] * 0.1;
        const nota2 = this.notas[1] * 0.1;
        const nota3 = this.notas[2] * 0.15;
        const nota4 = this.notas[3] * 0.15;
      
        const total = nota1 + nota2 + nota3 + nota4;
      return total
    }
};


console.log("- Mi nombre es: " + est3.nombre);
console.log("- Mis notas son: " + est3.notas);
console.log("- Mi nota total de los ejercicios es " + est3.notaejercicios)

