// This will give you more control over the error object that you're throwing,
// so you can include only the essential information that you need.
// The calling function can then handle the custom APIError object and decide what to do with it.
// This approach helps you avoid having long error messages in the console while still providing
// the necessary information to handle the error properly.

/**
 * Custom APIError class that extends the built-in Error class
 * @extends Error
 */

class APIError extends Error {
  /**
   * Creates a new APIError instance
   * @param {string} message - The error message
   * @param {number} statusCode - The HTTP status code associated with the error
   * @param {*} responseData - The response data associated with the error, if any
   */
  constructor (message, statusCode, responseData) {
    super(message)
    this.statusCode = statusCode
    this.responseData = responseData
    this.name = 'APIError'
  }
}

export default APIError
