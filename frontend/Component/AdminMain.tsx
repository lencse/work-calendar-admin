import * as React from 'react';
import LoginForm from './LoginForm';

export default class AdminMain extends React.Component<{}, {}> {

    constructor () {
        super();
    }

    render () {
        return (
            <div className="login-form mdl-layout__content">
                <main className="mdl-layout__content">
                    <div className="mdl-grid">
                        <LoginForm />
                    </div>
                </main>
            </div>
        );
    }

}