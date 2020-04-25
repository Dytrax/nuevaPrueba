import React from 'react'
import Head from 'next/head'
import styles from "../assets/styles.module.css"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {md} from '../md.js'
const ReactMarkdown = require('react-markdown/with-html')
export default function DataCenter() {
  return (
    <div className="container">
      <ReactMarkdown
        source={md}
        escapeHtml={false}
      />
    </div>
  )
}
