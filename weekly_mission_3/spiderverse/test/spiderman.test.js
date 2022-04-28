describe("Unit test for spiderman class", () => {
    test('1) create an spiderman object', () => {
        const Spiderman = require("./../app/spiderman")
        const andrewGarfield = new Spiderman("The Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony")

        expect(andrewGarfield.name).toBe("The Amazing Spiderman");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony")
    });
    test("2) Use the method getInfo()", () =>{
        const Spiderman = require("./../app/spiderman")
        const tomHolland = new Spiderman("Friendly neighborhood", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios")
    });
  })