import * as React from 'react';
import User from '../Store/User';
import Header from './Header';
import { Deserializer } from 'ts-jsonapi'; 

export class HeaderState {
    public user;
}

export default class HeaderContainer extends React.Component<{}, HeaderState> {

    constructor (props) {
        super(props);
        this.state = { user: new User() };
    }

    private componentDidMount() {
        fetch(
            '/api/user/me',
            {
                credentials: 'include'
            }
        ).then((resp) => {
            resp.json().then((data) => {
                let ds = new Deserializer();
                let user: User = ds.deserialize(data);
                this.setState({user: user});
            });
        });
    }

    render () {
        return <Header user={ this.state.user } />;
    }

}
