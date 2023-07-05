import { quickLog } from './index';

describe('quickLog', () => {
  it('should log the parameter types and values', () => {
    // Create a mock function for testing
    function mockFunction(a: string, b: number, c: boolean): string {
      return 'Mock result';
    }

    // Create a spy to mock the console.log function
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Wrap the mock function with quickLog
    const wrappedFunction = quickLog(mockFunction);

    // Call the wrapped function
    wrappedFunction('test', 123, true);

    // Verify that the console.log function was called with the expected arguments
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      1,
      'Parameters: Param1: string, "test", Param2: number, 123, Param3: boolean, true'
    );
    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      2,
      'Return: string, "Mock result"'
    );

    // Restore the original console.log function
    consoleLogSpy.mockRestore();
  });
});
