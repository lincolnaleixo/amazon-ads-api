import Base from '../base/core.js'

/**
 * @class
 * @classdesc Represents the base class for Amazon Advertising Sponsored Products (SP) API classes.
 * @extends Base
 */
class SpBase extends Base {
  constructor () {
    super()
    this.spApiVersion = 'v3' // Sponsored Products API version
    this.apiResource = 'sp' // Sponsored Products resource identifier
  }

  /**
   * Constructs a Sponsored Products URL path for the given resource.
   * @param {string} spResource - The Sponsored Products resource (e.g. 'campaigns').
   * @returns {string} The constructed URL path.
   */
  getSpUrl (spResource) {
    return `/${this.apiResource}/${spResource}`
  }
}

export default SpBase
