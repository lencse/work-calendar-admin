import * as React from 'react';

export default class Header extends React.Component<{}, {}> {

    constructor () {
        super();
    }

    render () {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <div className="mdl-layout-spacer"></div>
                </div>
            </header>
        );
    }

}
