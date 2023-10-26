const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person")

describe("Bag", () => {
    const bag = new Bag(20, "123");
    it("should create an instance of the bag class", () => {
        expect(bag).toBeInstanceOf(Bag);

    })
    it("should have the correct weight and id assigned", () => {
        expect(bag.weight).toBe(20);
        expect(bag.id).toBe("123");

    })
    it("should have null value by default", () => {
        expect(bag.getOwner()).toBe(null);

    })
    it("should be able to assign an owner", () => {
        const person = new Person("John", "Jeff");
        bag.assignOwner(person);
        expect(bag.getOwner()).toEqual(person);
        

    })
})