import server from './server/server'
import "reflect-metadata"
import { AppDataSource } from './config/data-source';
import { preloadData } from './helpers/preloadData';
import { PORT } from './config/envs';
// AppDataSource.initialize()
// .then(res => {console.log('Conexión a la base de datos realizada con éxito');
// preloadData()
// .then(res =>{
//     server.listen(PORT, ()=>{
//         console.log(`server listening on port ${PORT}`);
//     })
//  })
    
// })

const initializeApp = async ()=>{
    await AppDataSource.initialize()
    console.log('Conexión a la base de datos realizada con éxito')
    //await preloadData()
    server.listen( PORT, ()=>{
        console.log(`server listening on port ${PORT}`);
    
    })
}; 
initializeApp()