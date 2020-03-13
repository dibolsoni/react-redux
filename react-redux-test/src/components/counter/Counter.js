import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import * as CounterActions from "./counterActions";
import counterReducer from './counterReducer';






class Counter extends Component {
    constructor(props) {
        super(props);
               
        this.state = {  }
    }

    componentDidMount() {
        console.log(this.boundActionCreators)
    }

    render() { 
        
        return (
            <div>
               <button onClick={() => this.props.del}>-</button>
                    <span>{this.props.count}</span>
               <button onClick={() => this.props.add}>+</button>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(CounterActions.INC),
    del: () => dispatch(CounterActions.DEC)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);