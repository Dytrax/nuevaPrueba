const waitUntil = require('async-wait-until');
var data = []

export default async (req, res) => {
    
    console.log('req.body')
    console.log(req.body)
    console.log(req.connection.remoteAddress)
    if (req.method === 'POST') {
        if(req.body.hasOwnProperty('client') ){
           try{
            var dataEnviar;
            await waitUntil(()=>{
                return (req.body.client<data.length)
            },172800000
            )
            .then(()=>{dataEnviar=data})
        }catch(e){
            dataEnviar='micro no respondido'
                //res.status(200).json('micro no respondido')
                console.log(e)
        }
           
            
            /* .then(()=>{ */
            console.log('Recibido POST')
            res.status(200).json(dataEnviar)
        /* }) */
            console.log('saliendo')
            
        } else{
            // Process a POST request
            data.push(req.body)
            res.status(200).json(req.body)
        }
      
      
      
      
    } else if(req.method === 'GET') {
      // Handle any other HTTP method
      
    }else{
        res.status(404).json('paila')
    }
    
    
  }