const UserView = require('./../../app/views/UserView')

describe("Tests for Userview", () =>{
    test("1) return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("2) return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload={username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor valido/)
    })
    test("3) return an error object when try to create a new user with a payload missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor valido/)
    })
    test("4) create a user by given valid payload", () => {
        const payload= {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
})