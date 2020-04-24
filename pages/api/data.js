export default (req, res) => {
    console.log('recibido1')
    if (req.method === 'POST') {
      // Process a POST request
      /* res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ name: 'John Doe' })) */
      return('OK')
      
    } else {
      // Handle any other HTTP method
      console.log('No Llego')
    }
    
    
  }