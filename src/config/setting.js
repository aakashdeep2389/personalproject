import { developer, stag, production, local } from './index'
import _ from 'lodash'

const setting = {}

export default (() => {
    switch (process.env.REACT_APP_ENV) {
        case 'developer':
        case 'dev':
            return _.merge(developer, setting);
            break;
        case 'stag':
            return _.merge(stag, setting);
            break;
        case 'production':
        case 'prod':
            return _.merge(production, setting);
            break;
        case 'localhost':
        case 'local':
            return _.merge(local, setting);
            break;
    }
})