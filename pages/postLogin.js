import React, { Component } from 'react'

export default class PostLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(),
    login:false,
    data:['data1','dato2','data3','dato4','data5','dato6']
    };
  }
  enviarFetch(){
    const res = await fetch('estacion.herokuapp.com/api/data')     
    const json = await res.json()
    console.log(res)
    console.log(json)
    this.setState({data:json})     
    this.enviarFetch()
    /* try{
    
      const query = await fetch("estacion.herokuapp.com/api/data" ,{  
            method: 'GET', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          
          })
          let responseJson = await query
          this.setState({data:responseJson})
          console.log(responseJson)
          //return [ query.status,responseJson]
  
      }catch(error){
        console.error(error)
      }  */
    /* fetch("estacion.herokuapp.com/api/data")
    .then((res) => {
      this.setState({data:res})
      
    }) */
  }
  componentDidMount(){
    this.enviarFetch()
  }

  
  render () {
  return (
    <div style={{width:'100%'}}>
      <ul style={{height:'500px',overflowY:'scroll'}}>
        {this.state.data.reverse().map(
          (value,index)=>{
            return(<li>
              {value
              }
            </li>)
          }

        )}
      </ul>
      
    </div>
  )}
}
