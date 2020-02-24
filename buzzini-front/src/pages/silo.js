import React, { Component } from 'react'
import whithStyles from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Box from '@material-ui/core/Box'

const styles = {
    
}

class silo extends Component {
    constructor(){
        super();
        this.state = {
            value: 0
        }
    }
  cambioPestaña = (event, newValue) => {
    this.setState({
        value: newValue
    })    
  }

    render() {
        
        return (
            <div>
            <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.cambioPestaña} aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
            <Box value={this.state.value}>
                Hola Mundo
            </Box>
            <Box value={this.state.value}>
                Hola Mundo 2
            </Box>
            <Box value={this.state.value}>
                Hola Mundo 3
            </Box>
            
            </div>
        )
    }
}

export default whithStyles(styles)(silo)