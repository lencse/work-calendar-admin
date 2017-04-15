import * as React from 'react';
import Header from './Header';
import State from '../Store/State';

export default class AdminMain extends React.Component<{}, State> {

    constructor () {
        super();
        this.state = State.getInitialState();
    }

    private componentDidMount() {
        this.state.load().then((newState) => {
            this.setState(newState);
        });
    }

    render () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header is-small-screen">
                <Header user={ this.state.user} />
                <main className="mdl-layout__content">
                    <div className="mdl-grid">
                    </div>
                </main>
            </div>
        );
    }

}