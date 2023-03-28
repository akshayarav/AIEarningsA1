import {
    arrayMean,
    affordableHousing,
    evenEven,
    makeSentences,
    type Apartment,
    type Doggo,
} from "./index";
describe("arrayMean", () => {
    it("works", () => {
        expect(arrayMean([5, 5, 5, 5, 5])).toEqual(5);
        expect(arrayMean([1, 2, 3, 4, 5])).toEqual(3);
        expect(arrayMean([]) === undefined).toEqual(true);
    });
    it("doesn't work", () => {
        expect(arrayMean([1, 2, 3])).not.toEqual(1);
    });
});
describe("affordableHousing", () => {
    const apts: Apartment[] = [
        { id: "orbis", rent: 5000 },
        { id: "ereve", rent: 12345 },
        { id: "henesys", rent: 1337 },
    ];
    it("works", () => {
        expect(affordableHousing([], 20000)).toEqual([]);
        expect(affordableHousing(apts, 20000).sort()).toEqual([
            "ereve",
            "henesys",
            "orbis",
        ]);
        expect(affordableHousing(apts, 5000).sort()).toEqual([
            "henesys",
            "orbis",
        ]);
        expect(affordableHousing(apts, 4000).sort()).toEqual(["henesys"]);
        expect(affordableHousing(apts, 1337).sort()).toEqual(["henesys"]);
        expect(affordableHousing(apts, 1000).sort()).toEqual([]);
        expect(affordableHousing(apts, -1000).sort()).toEqual([]);
    });
});
describe("evenEven", () => {
    it("works", () => {
        expect(evenEven()).toEqual(true);
        expect(evenEven([])).toEqual(true);
        expect(evenEven(["seven"])).toEqual(true);
        expect(evenEven(["bob"])).toEqual(true);
        expect(evenEven(["bob", "steven"])).toEqual(true);
        expect(evenEven(["bob", "steven", "even"])).toEqual(true);
        expect(evenEven(["bob", "steven", "anna"])).toEqual(false);
        expect(evenEven(["bob", "steven", "even", "anna"])).toEqual(false);
        expect(evenEven(["banana"])).toEqual(false);
    });
});
describe("makeSentences", () => {
    const doggos: Doggo[] = [
        { name: "Sparky", age: 3.35, breed: "Pomeranian Husky" },
        { name: "Oreo", age: 5.42, breed: "Dalmatian" },
        { name: "Stella", age: 4, breed: "Alaskan Klee Kai" },
        { name: "Snowball", age: 65 / 7, breed: "Wofer" },
    ];
    it("works", () => {
        expect(makeSentences([])).toEqual([]);
        expect(makeSentences(doggos)).toEqual([
            "Sparky is 3.4 years old and is a Pomeranian Husky",
            "Oreo is 5.4 years old and is a Dalmatian",
            "Stella is 4.0 years old and is a Alaskan Klee Kai",
            "Snowball is 9.3 years old and is a Wofer",
        ]);
    });
});
