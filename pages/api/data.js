export default (req, res) => {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(JSON.stringify(res))
    } else {
      // Handle any other HTTP method
    }
  }