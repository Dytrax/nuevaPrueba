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
    fetch("estacion.herokuapp.com/api/data")
    .then((res) => {
      this.setState({data:res})
      
    })
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
