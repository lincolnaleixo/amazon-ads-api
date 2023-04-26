import '../types/campaignsTypes.js'

import SpBase from './spBase.js'

/**
 * @class
 * @classdesc Represents the Amazon Advertising Sponsored Products (SP) Campaigns API.
 * @extends SpBase
 */
class Campaigns extends SpBase {
  /**
   * Fetches campaigns for the given profileId.
   * @param {string} profileId - The profile ID to fetch campaigns for.
   * @returns {Promise<Campaign[]>} A promise that resolves to the campaigns data.
   * @throws {Error} If there is an error while fetching campaigns.
   */
  async list (profileId) {
    const url = this.getSpUrl('campaigns/list')
    const data = await this._request('post', url, profileId, {}, {
      Accept: `application/vnd.${this.apiResource}Campaign.${this.spApiVersion}+json`,
      'Content-Type': `application/vnd.${this.apiResource}Campaign.${this.spApiVersion}+json`
    })

    return data.campaigns
  }
}

export default Campaigns
