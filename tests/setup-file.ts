import {connect, disconnect} from './utils/database';

beforeAll(async() => await connect());
afterAll(async() => await disconnect());
