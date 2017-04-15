import User from './User';
import { Deserializer } from 'ts-jsonapi';
import { assign } from 'lodash';

const deserializer  = new Deserializer();

export default class State {
    
    public user: User = new User();

    public static getInitialState(): State {
        return new State();
    }

    public load(): Promise<any> {
        return fetch('/api/user/me', { credentials: 'include' })
            .then((resp) => {
                return resp.json().then((data) => {
                    let user = deserializer.deserialize(data);
                    return Promise.resolve(assign(this, {user: user}));
                });
            });
    }
}
