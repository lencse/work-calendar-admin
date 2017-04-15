import User from './User';
import DayType from './DayType';
import { Deserializer } from 'ts-jsonapi';
import { assign } from 'lodash';

const deserializer  = new Deserializer({
    keyForAttribute: 'camelCase'
});

export default class State {
    
    public user: User = new User();
    public dayTypes: DayType[] = [];

    public static getInitialState(): State {
        return new State();
    }

    public load(): Promise<any> {
        return this.loadUser().then((state) => {
            return state.loadDayTypes();
        })
    }

    private loadDayTypes(): Promise<any> {
        return fetch('/api/day-type', { credentials: 'include' })
            .then((resp) => {
                return resp.json().then((data) => {
                    let dayTypes = deserializer.deserialize(data);
                    return Promise.resolve(assign(this, {dayTypes: dayTypes}));
                });
            });
    }

    private loadUser(): Promise<any> {
        return fetch('/api/user/me', { credentials: 'include' })
            .then((resp) => {
                return resp.json().then((data) => {
                    let user = deserializer.deserialize(data);
                    return Promise.resolve(assign(this, {user: user}));
                });
            });
    }
}
