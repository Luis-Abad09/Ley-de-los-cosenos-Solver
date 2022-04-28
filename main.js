/* =========================================================================== */
/* =============================== CONSTANTES =============================== */
/* =========================================================================== */
let anguloA = document.getElementById('angulo-a');
let anguloB = document.getElementById('angulo-b');
let anguloC = document.getElementById('angulo-c');
let catetoA = document.getElementById('cateto-a');
let catetoB = document.getElementById('cateto-b');
let catetoC = document.getElementById('cateto-c');


const ilustracionAnguloA = document.querySelector('.angulo-a');
const ilustracionAnguloB = document.querySelector('.angulo-b');
const ilustracionAnguloC = document.querySelector('.angulo-c');
const ilustracionCatetoA = document.querySelector('.cateto-a');
const ilustracionCatetoB = document.querySelector('.cateto-b');
const ilustracionCatetoC = document.querySelector('.cateto-c');

const form = document.querySelector('form'); 
const reset = document.querySelector('.refresh');
const calcular = document.querySelector('.calcular');


const datoAnguloA = document.querySelector('.data-angulo-a');
const datoAnguloB = document.querySelector('.data-angulo-b');
const datoAnguloC = document.querySelector('.data-angulo-c');
const datoCatetoA = document.querySelector('.data-cateto-a');
const datoCatetoB = document.querySelector('.data-cateto-b');
const datoCatetoC = document.querySelector('.data-cateto-c');


let A;
let B;
let C;
let a;
let b;
let c;


let activoAnguloA;
let activoAnguloB;
let activoAnguloC;
let activoCatetoA;
let activoCatetoB;
let activoCatetoC;


// CAMBIAR LOS VALORES DE VALOR 
let datosTriangulo = {
    anguloA: {
        valor: Number(anguloA.value),
        activo: "si"
    },
    anguloB: {
        valor: Number(anguloB.value),
        activo: "si"
    },
    anguloC: {
        valor: Number(anguloC.value),
        activo: "si"
    },
    catetoA: {
        valor: Number(catetoA.value),
        activo: "si"
    },
    catetoB: {
        valor: Number(catetoB.value),
        activo: "si"
    },
    catetoC: {
        valor: Number(catetoC.value),
        activo: "si"
    }
}


/* =========================================================================== */
/* =============================== EVENTOS =============================== */
/* =========================================================================== */
// EJECUTAR EVENTO AL DAR CLICK EN EL BOTON CALCULAR
form.addEventListener('submit', e => {
    e.preventDefault();
    resolverTriangulo();
})


// ACTUALIZAR OBJETO DATOS TRIANGULO CUANDO CAMBIE UN VALOR EN EL INPUT
form.addEventListener('keyup', ()=> {
    datosTriangulo = {
        anguloA: {
            valor: Number(anguloA.value),
            activo: "si"
        },
        anguloB: {
            valor: Number(anguloB.value),
            activo: "si"
        },
        anguloC: {
            valor: Number(anguloC.value),
            activo: "si"
        },
        catetoA: {
            valor: Number(catetoA.value),
            activo: "si"
        },
        catetoB: {
            valor: Number(catetoB.value),
            activo: "si"
        },
        catetoC: {
            valor: Number(catetoC.value),
            activo: "si"
        }
    }
})


reset.addEventListener('click', () =>{
    resetHTML();
})


// EVENTOS DE ESTILOS
calcular.addEventListener('mouseover', e =>{
    e.target.style.transform = "scale(1.3)";
})

calcular.addEventListener('mouseout', e =>{  
    e.target.style.transform = "scale(1)";
})



/* =========================================================================== */
/* =============================== FUNCIONES =============================== */
/* =========================================================================== */
const resolverTriangulo = ()=> {
    // OBTENER VALOR DE LOS ANGULOS Y CATETOS DEL OBJETO DATOSTRIANGULO
    A = datosTriangulo.anguloA.valor;
    B = datosTriangulo.anguloB.valor;
    C = datosTriangulo.anguloC.valor;
    a = datosTriangulo.catetoA.valor;
    b = datosTriangulo.catetoB.valor;
    c = datosTriangulo.catetoC.valor;

    activoAnguloA = datosTriangulo.anguloA.activo;
    activoAnguloB = datosTriangulo.anguloB.activo;
    activoAnguloC = datosTriangulo.anguloC.activo;
    activoCatetoA = datosTriangulo.catetoA.activo;
    activoCatetoB = datosTriangulo.catetoB.activo;
    activoCatetoC = datosTriangulo.catetoC.activo;


    let contador = 0;

    while( true ) {

        if ( activoAnguloA === 'si' && activoCatetoB === 'si' && activoCatetoC === 'si') {
            if( A > 0 && b > 0 && c > 0 ) {
                resolverCatetoA();
            }
        }

        if ( activoAnguloB === 'si' && activoCatetoA === 'si' && activoCatetoC === 'si' ) {
            if( B > 0 && a > 0 && c > 0 ) {
                resolverCatetoB();
            }
        }

        if ( activoAnguloC === 'si' && activoCatetoA === 'si' && activoCatetoB === 'si' ) {
            if( C > 0 && a > 0 && b > 0 ) {
                resolverCatetoC();
            }
        }

        if ( a > 0 && b > 0 && c > 0 ) {
            resolverAnguloA();
            resolverAnguloB();
            resolverAnguloC();
        }
        

        // CONTROLAR BUCLE
        contador += 1;
        if( A > 0 && B > 0 && C > 0 && a > 0 && b > 0 && c > 0 ) {
            console.log('Contador' + ' ' + contador);
            console.log(datosTriangulo);
            console.log('Saliendo del Bucle');
            break
        }

        if (contador === 10 ) {
            break;
        }
    }

    pintarDatos();


    // console.table(datosTriangulo);
}

const resolverAnguloA = () =>{
    const respuesta = (Math.acos((Math.pow(a, 2) - Math.pow(b, 2) - Math.pow(c, 2)) / (-2 * b * c))) * (180 / Math.PI);

    datosTriangulo.anguloA.valor = respuesta;
    A = respuesta;

    // console.log(respuesta);
    return respuesta;
}


const resolverAnguloB = () =>{
    const respuesta = (Math.acos((Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c, 2)) / (-2 * a * c))) * (180 / Math.PI);

    datosTriangulo.anguloB.valor = respuesta;
    B = respuesta;

    // console.log(respuesta);
    return respuesta;
}


const resolverAnguloC = () =>{
    const respuesta = (Math.acos((Math.pow(c, 2) - Math.pow(a, 2) - Math.pow(b, 2)) / (-2 * a * b))) * (180 / Math.PI);

    datosTriangulo.anguloC.valor = respuesta;
    C = respuesta;

    // console.log(respuesta);
    return respuesta;
}


const resolverCatetoA = () =>{
    const respuesta = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - (2 * b * c * (Math.cos(A / (180 / Math.PI)))));

    datosTriangulo.catetoA.valor = respuesta;  
    a = respuesta;

    datosTriangulo.anguloA.activo = 'no';
    datosTriangulo.catetoA.activo = 'no';
    datosTriangulo.catetoB.activo = 'no';
    datosTriangulo.catetoC.activo = 'no';

    activoAnguloA = 'no';
    activoCatetoA = 'no';
    activoCatetoB = 'no';
    activoCatetoC = 'no';

    // console.log(datosTriangulo);
    // console.log(respuesta);

    return respuesta;
}


const resolverCatetoB = () =>{
    const respuesta = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - (2 * a * c * (Math.cos(B / (180 / Math.PI)))));

    datosTriangulo.catetoB.valor = respuesta;  
    b = respuesta;

    datosTriangulo.anguloB.activo = 'no';
    datosTriangulo.catetoA.activo = 'no';
    datosTriangulo.catetoB.activo = 'no';
    datosTriangulo.catetoC.activo = 'no';

    activoAnguloB = 'no';
    activoCatetoA = 'no';
    activoCatetoB = 'no';
    activoCatetoC = 'no';

    // console.log(datosTriangulo);
    // console.log(respuesta);

    return respuesta;
}


const resolverCatetoC = () =>{
    const respuesta = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - (2 * a * b * (Math.cos(C / (180 / Math.PI)))));

    datosTriangulo.catetoC.valor = respuesta;  
    c = respuesta;

    datosTriangulo.anguloC.activo = 'no';
    datosTriangulo.catetoA.activo = 'no';
    datosTriangulo.catetoB.activo = 'no';
    datosTriangulo.catetoC.activo = 'no';

    activoAnguloC = 'no';
    activoCatetoA = 'no';
    activoCatetoB = 'no';
    activoCatetoC = 'no';

    // console.log(respuesta);

    return respuesta;
}


const pintarDatos = ()=> {
    // PINTAR DATOS EN TRIANGULO
    ilustracionAnguloA.textContent = `A= ${Number(A.toFixed(2))}`;
    ilustracionAnguloB.textContent = `B= ${Number(B.toFixed(2))}`;
    ilustracionAnguloC.textContent = `C= ${Number(C.toFixed(2))}`;

    ilustracionCatetoA.textContent = `a = ${Number(a.toFixed(2))}`;
    ilustracionCatetoB.textContent = `b = ${Number(b.toFixed(2))}`;
    ilustracionCatetoC.textContent = `c = ${Number(c.toFixed(2))}`;

    // PINTAR DATOS EN DATOS
    datoAnguloA.textContent = `A= ${Number(A.toFixed(2))}`;
    datoAnguloB.textContent = `B= ${Number(B.toFixed(2))}`;
    datoAnguloC.textContent = `C= ${Number(C.toFixed(2))}`;

    datoCatetoA.textContent = `a = ${Number(a.toFixed(2))}`;
    datoCatetoB.textContent = `b = ${Number(b.toFixed(2))}`;
    datoCatetoC.textContent = `c = ${Number(c.toFixed(2))}`;
}


const resetHTML = ()=> {
    // RESETEAR FORM
    form.reset();


    // RESETEAR DATOS
    datoAnguloA.textContent = '';
    datoAnguloB.textContent = '';
    datoAnguloC.textContent = '';

    datoCatetoA.textContent = '';
    datoCatetoB.textContent = '';
    datoCatetoC.textContent = '';


    // RESETEAR ILLUSTRACION
    ilustracionAnguloA.textContent = '';
    ilustracionAnguloB.textContent = '';
    ilustracionAnguloC.textContent = '';

    ilustracionCatetoA.textContent = '';
    ilustracionCatetoB.textContent = '';
    ilustracionCatetoC.textContent = '';
    

    // RESETEAR VARIABLES
    A = 0;
    B = 0;
    C = 0;
    a = 0;
    b = 0;
    c = 0;


    // RESETEAR CONTADOR
    contador = 0;


    datosTriangulo = {
        anguloA: {
            valor: 0,
            activo: "si"
        },
        anguloB: {
            valor: 0,
            activo: "si"
        },
        anguloC: {
            valor: 0,
            activo: "si"
        },
        catetoA: {
            valor: 0,
            activo: "si"
        },
        catetoB: {
            valor: 0,
            activo: "si"
        },  
        catetoC: {
            valor: 0,
            activo: "si"
        }
    }
}


    