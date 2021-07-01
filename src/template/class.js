import React, { Component } from 'react';
import { increment } from '../actions/templateActions';
import { connect } from 'react-redux';

class classComponent extends Component {

    constructor(props){
        super(props);

        this.state ={
            title: ""
        }
    }
}

render(){
    return (
        <>
        <h3>{this.state.title}</h3>
        <h3>{this.props.count}</h3>
        </>
    )
}