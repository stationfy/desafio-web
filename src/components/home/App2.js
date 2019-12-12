import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import appAction from '../../store/appActions';
import API from "../../services/API";

class Children extends Component {
    setText() {
        this.props.dispatch(appAction.setText('Aquele texto'))
    }

    render() {
        return (
            <Fragment>
                <button onClick={() => this.setText()}>Mudar texto</button>
            </Fragment>
        )
    }

    
}

const ChildrenConnected = connect(store => ({ text: store.text }))(Children)

class App2 extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.text}</h1>
                <h2>{login}</h2>
                <ChildrenConnected />
            </Fragment>
        )
    }
    async componentDidMount() {
        let userData = await API.get('/', {
            params: {
                results: 1,
                inc: 'name'
            }
        });

        userData = userData.data.results[0];

        const login = userData.login;
    }
}

export default connect(store => ({ text: store.text }))(App2)