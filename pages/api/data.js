export default (req, res) => {
    console.log('recibido1')
    if (req.method === 'POST') {
      // Process a POST request
      console.log('recibido2')
    } else {
      // Handle any other HTTP method
      console.log('No Llego')
    }
    
    
  }