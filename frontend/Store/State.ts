import User from './User';
import DayType from './DayType';
import { Deserializer } from 'ts-jsonapi';
import { assign } from 'lodash';

const deserializer  = new Deserializer({ keyForAttribute: 'camelCase' });

export default class State {
    
    public user: User = new User();
    public dayTypes: DayType[] = [];

    public static getInitialState(): State {
        return new State();
    }

    public load(): Promise<any> {
        return this.chain(this, [
            ['day-type', 'dayTypes'],
            ['user/me', 'user']
        ]);
    }

    private chain(state: State, resouces: string[][]): Promise<any> {
        if (resouces.length === 0) {
            return Promise.resolve(state);
        }

        let params = resouces.pop();
        return this.loadResource(params[0], params[1]).then((state) => {
            return this.chain(state, resouces);
        });
    }

    private loadResource(path: string, resource: string): Promise<any> {
        return fetch(
            `/api/${path}`,
            { credentials: 'include' }
        ).then((resp) => {
            return resp.json().then((data) => {
                let delta = {};
                delta[resource] = deserializer.deserialize(data);
                return Promise.resolve(assign(this, delta));
            });
        });
    }
}
