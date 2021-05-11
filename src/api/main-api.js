import { instance } from './instance';

export default class MainAPI {
    constructor() {
        this.axios = instance;
    }
}
