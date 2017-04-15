import * as React from 'react';
import HeaderContainer from './HeaderContainer';

export default class AdminMain extends React.Component<{}, {}> {

    constructor () {
        super();
    }

    render () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header is-small-screen">
                <HeaderContainer />
                <main className="mdl-layout__content">
                    <div className="mdl-grid">
                    </div>
                </main>
            </div>
        );
    }

}