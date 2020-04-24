export default (req, res) => {
    console.log('recibido1')
    if (req.method === 'POST') {
      // Process a POST request
      res.status(200).json('ok')
      
      
    } else {
      // Handle any other HTTP method
      console.log('No Llego')
    }
    
    
  }