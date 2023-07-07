/**
 * Wraps a function with logging capabilities to log the parameter types and values,
 * as well as the return value of the function.
 *
 * @param fn The function to be wrapped with logging.
 * @returns A new function that logs the parameter types and values, and returns the result of the wrapped function.
 */
function quickLog(fn: (...args: any[]) => any): (...args: any[]) => any {
  return (...args: any[]) => {
    // Extract the parameter types and values
    const parameterTypes = Object.entries(args).map(([index, arg]) => {
      // Get the type of the argument
      const type = typeof arg;

      // Convert the argument value to a string representation
      const value = JSON.stringify(arg);

      // Generate the parameter string in the format "ParamX: <type>, <value>"
      return `Param${parseInt(index) + 1}: ${type}, ${value}`;
    });

    // Log the parameter types and values
    console.log(`Parameters: ${parameterTypes.join(', ')}`);

    // Invoke the wrapped function with the provided arguments
    const result = fn(...args);

    // Log the return value of the wrapped function
    console.log(`Return: ${typeof result}, ${JSON.stringify(result)}`);

    // Return the result of the wrapped function
    return result;
  };
}

// Export the quickLog function
export { quickLog };
