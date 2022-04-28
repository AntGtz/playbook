const UserView = require('./../../app/views/UserView')

describe("Tests for Userview", () =>{
    TextDecoderStream("1) return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // 
        expect(result.error).toMatch(/payload no existe/)
    })
})