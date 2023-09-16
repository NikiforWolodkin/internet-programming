const factorialNextTick = (value: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (value === 0) {
            resolve(1);
            return;
        }

        process.nextTick(() => {
            factorialNextTick(value - 1)
                .then(result => {
                    resolve(value * (result as number));
                })
                .catch(reject);
        });
    });
};

export default factorialNextTick;