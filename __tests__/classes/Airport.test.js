const Airport = require("../../classes/Airport");

describe("Test the Airport class", () => {
    a1 = new Airport("Capital")
    it("Can create an instance", () => {
        expect(a1).toBeInstanceOf(Airport);
    })
    it("name and plane are assined to the correct values", () => {
        expect(a1.name).toBe("Capital");
        expect(a1.planes).toEqual([]);

    })

    it("can add planes", () => {
        a1.addPlane('A1254');
        a1.addPlane('B2354');
        expect(a1.planes).toEqual(["A1254", "B2354"]);
    })

})