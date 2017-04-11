import * as React from 'react';

export default class LoginForm extends React.Component<{}, {}> {

    onSubmit(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement) {
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();
        let body = new FormData();
        body.append('username', username);
        body.append('password', password);
        fetch('/login', {
            method: 'POST',
            body: body
        });
    }

    render () {
        let usernameInput: HTMLInputElement;
        let passwordInput: HTMLInputElement;

        return (
            <div className="mdl-card mdl-shadow--2dp">
                <form onSubmit={ e => {
                        e.preventDefault();
                        this.onSubmit(usernameInput, passwordInput);
                    } }>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Work Calendar Admin</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input
                                    className="mdl-textfield__input"
                                    type="text"
                                    id="username"
                                    ref={ node => { usernameInput = node } }
                                />
                                <label className="mdl-textfield__label" htmlFor="username">Felhasználónév</label>
                            </div>
                        </div>
                        <div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input
                                    className="mdl-textfield__input"
                                    type="password"
                                    id="password"
                                    ref={ node => { passwordInput = node } }
                                />
                                <label className="mdl-textfield__label" htmlFor="username">Jelszó</label>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button type="submit" className="mdl-button color-text--teal mdl-js-button mdl-js-ripple-effect pull-right">
                            Bejelentkezés
                        </button>
                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        );
    }

}
