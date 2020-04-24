var data = []
export default (req, res) => {
    
    console.log('req.body')
    console.log(req.body)
    
    if (req.method === 'POST') {
      // Process a POST request
      data.push(req.body)
      res.status(200).json(req.body)
      
      
    } else if(req.method === 'GET') {
      // Handle any other HTTP method
      res.status(200).json(data)
    }else{
        res.status(404).json('paila')
    }
    
    
  }