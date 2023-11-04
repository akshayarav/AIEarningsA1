// QUESTION 1 ------------------------------------------------------------------

export const arrayMean = (array: number[]): number | undefined => {
    let sum: number = 0;
    for (const val of array) {
        sum += val;
    }
    return sum / array.length;
};

// QUESTION 2 ------------------------------------------------------------------

export type Apartment = {
    id: string;
    rent: number;
};

export const affordableHousing = (
    listings: Apartment[],
    budget: number
): string[] => {
    let res: string[] = []
    for (const listing of listings) {
        if (listing.rent <= budget) {
            res.push(listing.id)
        }
    }
    return res;
};

// QUESTION 3 ------------------------------------------------------------------

export const evenEven = (array?: string[]): boolean => {
    if (array === undefined) {
        return true;
    }

    for (const str of array) {
        if (str.length % 2 === 0 && !str.includes('even')) {
            return false;
        }
    }

    return true;
};


// QUESTION 4 ------------------------------------------------------------------

// TODO: You should replace this "any" with an accurate type in your submission!
export type Doggo = { name: string, age: number, breed: string };

export const makeSentences = (array: Doggo[]): string[] => {
    let res: string[] = []
    for (const a of array) {
        let curr: string = a.name + " is " + Math.round(a.age * 10) / 10 + " years old, and is a " + a.breed + ".";
        res.push(curr);
    }
    return res;
};

// DEMO ------------------------------------------------------------------------
const doggos = [
    { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
    { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
    { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
];

makeSentences(doggos);

