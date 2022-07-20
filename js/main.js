let ropa = ['remeras','camisas','chaquetas','buzos'];
let nuevaRopa = []
const todaLaListaMayuscula = (array)=>{
    for(let i=0;i<ropa.length;i++){
        let minuscula = ropa[i].toLowerCase()
        let primera = minuscula.charAt(0)
        let mayuscula = primera.toUpperCase()
        let resto = minuscula.substring(1)
        let juntar = mayuscula+resto
        nuevaRopa.push(juntar)
    }
}
const anunciar = ()=>{
    alert(`La lista es: ${nuevaRopa.join(', ')}.`)
}
const lista = (elementos) =>{
    const accion = prompt('Quiere ver,agregar o eliminar un objeto de la lista?');
    if(accion.toLowerCase()==='ver'||accion.toLowerCase()==='agregar'||accion.toLowerCase()==='eliminar'){
        if (accion.toLowerCase()==='agregar'){
            const nuevoElemento = prompt('Que nuevo elemento desea agregar?')
            if(!isNaN && nuevoElemento!='' && nuevoElemento!=null){
                ropa.push(nuevoElemento)
                todaLaListaMayuscula()
                anunciar()
            }else {
                alert(`"${nuevoElemento}" no es un elemento valido para agregar.`)
            }
        }else if(accion.toLowerCase()==='eliminar'){
            todaLaListaMayuscula(ropa)
            const removerElemento = prompt(`Que elemento desea eliminar? (${nuevaRopa})`)
            let existe = ropa.indexOf(removerElemento.toLowerCase())
            if(existe>=0){
                nuevaRopa.splice(existe,1)
                anunciar()
            }else{
                alert(`No se puede eliminar el elemento: "${removerElemento}" porqué no existe.`)
            }
        }else if(accion.toLocaleLowerCase()==='ver'){
            todaLaListaMayuscula(ropa)
            anunciar()
        }     
    }else {
        alert(`La accion "${accion}" no existe.`)
    }
}
lista()