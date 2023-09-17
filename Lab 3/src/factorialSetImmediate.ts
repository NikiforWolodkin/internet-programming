const factorialSetImmediate = (value: number): Promise<number> => {
	return new Promise((resolve, reject) => {
		if (value === 0) {
			resolve(1);
			return;
		}

		setImmediate(() => {
			factorialSetImmediate(value - 1)
				.then(result => {
					resolve(value * result);
				})
				.catch(reject);
		});
	});
};

export default factorialSetImmediate;