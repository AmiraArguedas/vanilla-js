class auto {
    constructor(marca, version) {
        this.marca = marca
        this.version = version
    }



        mostrarAuto(){
                
          return  `este vehiculo es ${this.marca} ${this.version}`;
                
        }


    
}


const miCarroToyota = new auto ('Toyota', '2024');
const miCarroTesla = new auto ('Tesla', '2020');



console.log(miCarroToyota.mostrarAuto());


