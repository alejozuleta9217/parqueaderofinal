export default class MapFile{
  
    static fileregistrer (data){
      let location = [];
        if(data === undefined){
          return location;
        }else{
          for (let i = 0; i < data.length; i++) {
            location[i] =
               {
                  ID: data[i].numero_modulo,
                  FirstName: data[i].estado_modulo,
               }          
           }
        }
      
      return location;
    }  
  
  }