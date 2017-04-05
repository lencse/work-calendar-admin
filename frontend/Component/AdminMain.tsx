import * as React from 'react';


export interface AdminMainState {
}

export default class SudokuMain extends React.Component<{}, AdminMainState> {

    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--0-col-phone">
                </div>
                <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">Work Calendar Admin</h2>
                        </div>
                        <div className="mdl-card__supporting-text mdl-card--expand">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" id="username" value=""/>
                                <label className="mdl-textfield__label" htmlFor="username">Felhasználónév</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="password" id="username" value=""/>
                                <label className="mdl-textfield__label" htmlFor="username">Jelszó</label>
                            </div>
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <button className="mdl-button color-text--teal mdl-js-button mdl-js-ripple-effect">
                            Bejelentkezés
                            </button>
                        </div>
                </div>
                <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--0-col-phone">
                </div>
            </div>
        );
    }

}