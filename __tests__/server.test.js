'use strict';

const superTest = require('supertest');
const server = require('../server.js');
const request = superTest(server.app);

describe('SERVER',()=>{
    it('handle Wrong routes', async ()=>{
        const response = await request.get('/ddd');
        expect(response.status).toEqual(404)
    })
    it('handle server error', async ()=>{
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    })
    it('handle Correct routes', async ()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello world')
    })
})