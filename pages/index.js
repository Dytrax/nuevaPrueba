import React, { Component } from 'react'
import Head from 'next/head'
import styles from "./assets/styles.module.css"
const img =  'data:image/jpeg;base64,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'

import { InputGroup, InputGroupAddon, InputGroupText, Input,Button } from 'reactstrap';

const Auth = {
  userName:"Admin",
  passWord:"Hola@321"
}

import PostLogin from './postLogin'
export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(),
    login:false
    };
  }
  checkLogin(){ 
    console.log(this.userName + this.passWord)
    const result =  (this.userName===Auth.userName && this.passWord===Auth.passWord)

    this.setState({login:result})
    
  }
  postLogin(){
    return(
      <PostLogin/>
    )
  }
  loginCheck(){
    return(
      <div>
          <h5>Login</h5>
          
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=>{this.userName=e.target.value}} placeholder="Usuario" innerRef="userRef"/>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>*</InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=>{this.passWord=e.target.value}} type="password" placeholder="Contraseña" innerRef="passwordRef"/>
      </InputGroup>
      <br />
      <Button color="primary"
       onClick={() => this.checkLogin()}
      >Login</Button>{' '}
      
        </div>
    )
  }
  render () {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Estación Meteorológica <a>Bienvenidos!</a>
        </h1>
        <img className="imgMicro" src={img}/>
        <br />
        { //Check if message failed
        (this.state.login === false)
          ? (this.loginCheck()) 
          : (this.postLogin())
      }
        
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )}
}
