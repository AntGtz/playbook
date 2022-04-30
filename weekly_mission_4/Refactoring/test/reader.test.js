describe("Unidad de pruebas para reader", () => {
    test("1)Verificar que se lea el json", () => {
        const Reader = require("./../app/lib/utils/Reader")
        expect(reader).not.toBe(undefined)
    })
})