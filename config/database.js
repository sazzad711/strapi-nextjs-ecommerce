const parse = require('pg-connection-string').parse;

module.exports = ({ env }) =>{
    
   if(env('NODE_ENV') === 'production') {
     const config = parse(process.env.DATABASE_URL)
     return {
       defaultConnection: 'dafault',
       connections: {
         default: {
           connector: 'bookshelf',
           settings:{
             client: 'postgress',
             host: config.host,
             port: config.port,
             database: config.database,
             username: config.user,
             password: config.password

           },
           options: {
            ssl: {
              rejectUnauthorized: false,
            },


           }
         }
       }
     }
   }

   return {

      }
};
