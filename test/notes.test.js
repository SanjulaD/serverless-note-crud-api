'use strict';

let init = require('./steps/init')
let { an_authenticated_user } = require('./steps/given')
let { we_invoke_create_note, we_invoke_update_note } = require('./steps/when')
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
                id: "143",
                title: "My test note title",
                body: "Hello this is my test note"
            }

            let result = await we_invoke_create_note({ idToken, body })
            expect(result.statusCode).toEqual(201);
            expect(result.body).not.toBeNull();
        });
    })

    describe('When we invoke PUT /notes/:id endpoint', () => {
        it('should update the note', async () => {
            const noteId = 143
            const body = {
                title: "My test note update",
                body: "Hello this is update"
            }

            let result = await we_invoke_update_note({ idToken, body, noteId })
            expect(result.statusCode).toEqual(200);
            expect(result.body).not.toBeNull();
        });
    })
})
