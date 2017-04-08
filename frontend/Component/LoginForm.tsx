import * as React from 'react';

export default class LoginForm extends React.Component<{}, {}> {

    onSubmit(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement) {
        console.log(usernameInput.value.trim(), passwordInput.value.trim());
    }

    render () {
        let usernameInput: HTMLInputElement;
        let passwordInput: HTMLInputElement;

        return (
            <div className="login-form mdl-layout__content">
                <main className="mdl-layout__content form-layout-middle">
                    <div className="form-layout-inner">
                        <div className="mdl-grid">
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}
