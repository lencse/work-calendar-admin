import * as React from 'react';
import LoginForm from './LoginForm';

export default class AdminMain extends React.Component<{}, {}> {

    constructor () {
        super();
    }

    render () {
        return (
            <LoginForm />
        );
    }

}