
import express from 'express';
import APIRouter from './src/router/api/api.router'

import Config from 'config'
import path from 'path';
import fs from 'fs';

import MariaDBRepo from './src/intergration/backend/repository/interface/MariaDBRepo'
import LoggerService from './services/logger/logger.service'
(async() =>{
    try {
        const appConf = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/config/app.conf.json'), 'utf8'))
        const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/package.json'), 'utf8'))
        const app = express();
        const port = 3000;
        
        await MariaDBRepo.createConnection(appConf);
      
        app.listen(port,() =>{
            LoggerService.info(`APPLICATION VERSION: ${packageJson.version} PORT: ${port}`)
           // LoggerService.info(`GRAPH: ${server.graphqlPath}`)  
        } )

         
            
        app.use('/api',APIRouter.router());
    } catch (error:any) {
        console.error(error);
        process.exit(1);
    }
   
})();
