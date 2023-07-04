function quickLog(fn: (...args: any[]) => any): (...args: any[]) => any {
  return (...args: any[]) => {
    const parameterTypes = Object.entries(args).map(([index, arg]) => {
      const type = typeof arg;
      const value = JSON.stringify(arg);
      return `Param${parseInt(index) + 1}: ${type}, ${value}`;
    });

    console.log(`Parameters: ${parameterTypes.join(', ')}`);

    const result = fn(...args);

    console.log(`Return: ${typeof result}, ${JSON.stringify(result)}`);

    return result;
  };
}

export { quickLog };
