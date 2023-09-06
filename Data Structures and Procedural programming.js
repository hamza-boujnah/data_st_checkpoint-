//Problem 1 Solution (Sum of Distinct Elements)

function sumOfDistinctElements(set1, set2) {
    let distinctElements = [];

    // Add distinct elements from set1 to the distinctElements array
    for (let element of set1) {
        if (!set2.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Add distinct elements from set2 to the distinctElements array
    for (let element of set2) {
        if (!set1.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of distinct elements
    let sum = 0;
    for (let element of distinctElements) {
        sum += element;
    }

    return sum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)

// Problem 2 Solution (Orthogonal Vectors)

function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vector dimensions must match.");
    }

    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }

    return product;
}

function areOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
            const dot = dotProduct(vectors[i], vectors[j]);
            if (dot !== 0) {
                return false; // Not orthogonal
            }
        }
    }
    return true; // All pairs are orthogonal
}

// Example usage
const vectors = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];
const isOrthogonal = areOrthogonal(vectors);
console.log("Are the vectors orthogonal?", isOrthogonal); // Output: true
