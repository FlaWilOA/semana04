

const productos=[
    {
        id:1,
        nombre:'Pizza Americana',
        precio:25
    },
    {
        id:2,
        nombre:'Pizza Española',
        precio:30
    },
    {
        id:3,
        nombre:'Pizza Latina',
        precio:35
    }
]
let rpt;
let carrito=[];

let _divTotal = document.getElementById("total");
let htmlProductos = '' ;
productos.map(e=>{
   htmlProductos += e.nombre + '<br>';
})

//_divTotal.innerHTML = htmlProductos;

const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...product,
            cantidad:quantity
        }
    ]
    console.log(carrito)
}

const calcularTotal=()=>{    
    let htmlTotal = "<table> "; 
    let sumaTotal = 0;
    let _divHistorial = document.getElementById("historial");
    
    carrito.map(e=>{
        sumaTotal += e.cantidad * e.precio;
        htmlTotal += 
        `
         <tr>
            <td> ${e.nombre} </td>
            <td> ${e.precio} </td>
            <td> ${e.cantidad} </td>
            <td> ${ e.cantidad * e.precio} </td>
         </tr>
        `;
        let Cantidad_a_Pagar=carrito.reduce((acc,current)=>acc+current.cantidad*current.precio, 0);
    console.log(Cantidad_a_Pagar);
    document.querySelector('span').textContent=Cantidad_a_Pagar + " nuevos soles ";
    })
    _divHistorial.innerHTML = htmlTotal;

    console.log(sumaTotal);
}

while(rpt!=0){
    let productId=prompt('Ingrese el id del producto:\n1:Pizza Aericana\n2:Pizza Española\n3:Pizza Latina');
    let c=prompt('Ingrese la cantidad')
    agregarCarrito(productId,c)
    rpt=prompt('Desea continuar: si=cualquier tecla no=0')

}

calcularTotal();
console.log("HE TERMINADOO!");