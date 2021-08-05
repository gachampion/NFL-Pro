export const swapArrayElements = <T>(
    arr: Array<T>,
    firstIndex: number,
    secondIndex?: number,
): Array<T> => {
    if (!secondIndex) return arr;
    const result = Array.from(arr);
    const [removed] = result.splice(firstIndex, 1);
    result.splice(secondIndex, 0, removed);

    return result;
};
