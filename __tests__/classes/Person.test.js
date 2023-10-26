const Person = require("../../classes/Person");
// import {describe, expect, it} from "@jest/globals";

describe("Test Person Class", () => {
    p1 = new Person("Adil", "Paris")
    it("Can create an instance", () => {
        expect(p1).toBeInstanceOf(Person);

    })

    it("Name and destination assined correctly", () => {
        expect(p1.name).toBe("Adil");
        expect(p1.destination).toBe("Paris");

    })

    it("bags is an empty array", () => {
        expect(p1.bags).toEqual([]);

    })

    it("Add bags to bags array", () => {
        p1.addBag("1112");
        p1.addBag("1113");
        p1.addBag("1114");
        expect(p1.bags).toEqual(["1112", "1113", "1114"]);

    })


})