'use strict';

let init = require('./steps/init')
let { an_authenticated_user } = require('./steps/given')
let { we_invoke_create_note } = require('./steps/when')
let idToken;

describe('Given an authenticated uses', () => {
    beforeAll(async () => {
        init()
        let user = await an_authenticated_user();
        idToken = user.AuthenticationResult.IdToken
    })


    describe('When we invoke POST /notes endpoint', () => {
        it('should create a new note', async () => {
            const body = {
                id: "140",
                title: "My test note title",
                body: "Hello this is my test note"
            }

            let result = await we_invoke_create_note({ idToken, body })
            expect(result.statusCode).toEqual(201);
            expect(result.body).not.toBeNull();
        });
    })
})
