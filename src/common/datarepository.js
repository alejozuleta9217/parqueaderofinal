export default class MapFile{
  
    static fileregistrer (data){
      let location = [];   
      
      if(data === undefined){
        return location;
        }else{
          for (let i = 0; i < data.length; i++) {
            location[i] =
               {
                  ID: data[i].id_historial_registro,
                  FirstName: data[i].id_modulo,
                  Prefix: data[i].identificacion,
                  BirthDate: data[i].fecha_ingreso,
                  fechasalida: data[i].fecha_salida
               }          
           }
        }
      return location;
    }  
  
  }
  