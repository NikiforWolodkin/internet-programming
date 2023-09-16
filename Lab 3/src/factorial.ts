const factorial = (value: number): number => {
    if (value === 0) {
        return 1;
    } else {
        return value * factorial(value - 1);
    }
}

export default factorial;