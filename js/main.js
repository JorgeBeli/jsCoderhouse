const describir = (palabra) =>{
    palabra = prompt('ingrese su palabra')
    if (isNaN(palabra)&& palabra !== null && palabra!==''){
        let vocales=0;
        for (let i=0; i<palabra.length;i++){
            if (palabra[i]==='a'||palabra[i]==='e'||palabra[i]==='i'||palabra[i]==='o'||palabra[i]==='u'){
                vocales +=1
            }
        }
        alert(`Tu palabra tiene un total de ${vocales} vocales :)`)
    }else {
        alert(`Ingresa una palabra no: '${palabra}' >:C`);
    }
}
describir()