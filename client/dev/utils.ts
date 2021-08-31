const getRandomInRange = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sample = <T>(array: T[]): T => array[getRandomInRange(0, array.length - 1)]
