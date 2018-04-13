import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Head from '../components/head'
import Navbar from '../components/navbar'
import Header from '../components/header'


export default () => (
  <div className='container'>
    <Head />
    <MuiThemeProvider>
      <Navbar />
      <Header />
    </MuiThemeProvider>
  </div>
)