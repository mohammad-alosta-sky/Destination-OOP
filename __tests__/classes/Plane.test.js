const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person")


describe("Plane", () => {
    const plane = new Plane("BritishAirways", "LHR", "JFK");
    it("should create an instance of plane", () => {
        expect(plane).toBeInstanceOf(Plane);

    })
    it("should have have the correct company, origin and destination assigned", () => {
        expect(plane.company).toBe("BritishAirways");
        expect(plane.origin).toBe("LHR");
        expect(plane.destination).toBe("JFK");
    })
    it("should be able to initalise the passengers as an empty array", () => {
        expect(plane.getPassengers()).toEqual([]);
    })
    it("should add a passenger", () => {
        const person = new Person("John", "Jeff");
        plane.addPassengers(person);
        expect(plane.getPassengers()).toContain(person);
    })
    
})
