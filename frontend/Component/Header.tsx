import * as React from 'react';
import User from '../Store/User';

export interface HeaderProps {
    user: User;
}

export default class Header extends React.Component<HeaderProps, {}> {

    constructor () {
        super();
    }

    onLogout() {
        window.location.href = '/logout';
    }

    render () {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <div>
                        Work Calendar Admin
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <div className="avatar-dropdown" id="icon">
                        <span>{ this.props.user.username }</span>
                        <img src="images/Icon_header.png" />
                    </div>

                    <ul className="mdl-menu mdl-list mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp account-dropdown"
                        htmlFor="icon">
                        <li className="mdl-list__item mdl-list__item--two-line">
                            <span className="mdl-list__item-primary-content">
                                <span className="material-icons mdl-list__item-avatar"></span>
                                <span>{ this.props.user.username }</span>
                                <span className="mdl-list__item-sub-title">{ this.props.user.email }</span>
                            </span>
                        </li>
                        <li className="list__item--border-top"></li>
                        <li className="mdl-menu__item mdl-list__item">
                            <span className="mdl-list__item-primary-content" onClick={ this.onLogout }>
                                <i className="material-icons mdl-list__item-icon text-color--secondary">exit_to_app</i>
                                Kijelentkezés
                            </span>
                        </li>
                    </ul>
                            
                </div>
            </header>
        );
    }

}
