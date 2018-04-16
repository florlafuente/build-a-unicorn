import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Head from '../components/head'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Form from '../components/form'


export default () => (
  <MuiThemeProvider>
    <div className='container'>
      <Head />
      <Navbar />
      <main>
        <Header />
        <Form />
      </main>
    </div>
    <style jsx>{`
      main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
    </MuiThemeProvider>
)