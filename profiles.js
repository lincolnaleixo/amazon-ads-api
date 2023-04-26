import Core from './base/core.js'

import './types/profilesTypes.js'

/**
 * @class
 * @classdesc Represents the Amazon Advertising Profiles API.
 * @extends Core
 */
class Profiles extends Core {
  /**
   * list advertising profiles.
   * @returns {Promise<[Profile]>} A promise that resolves to an array of Profile objects.
   */
  async list () {
    const list = await this._request('get', '/v2/profiles', '', {}, {})
    return list
  }
}

export default Profiles
