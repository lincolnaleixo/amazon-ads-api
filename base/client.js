import Profiles from '../profiles.js'
import Campaigns from '../sp/campaigns.js'

/**
 * @class
 * @classdesc Represents the Amazon Advertising API client.
 */
class Client {
  /**
   * @param {?Object} tokens - The tokens object.
   *
  **/
  constructor (tokens = {}) {
    process.env.AMAZON_ADVERTISING_ACCESS_TOKEN = tokens?.accessToken
    process.env.AMAZON_ADVERTISING_REFRESH_TOKEN = tokens?.refreshToken
    process.env.AMAZON_ADVERTISING_DEV_CLIENT_ID = tokens?.clientId
    process.env.AMAZON_ADVERTISING_DEV_CLIENT_SECRET = tokens?.clientSecret
    this.profiles = new Profiles()
    this.sp = {
      campaigns: new Campaigns()
    }
  }
}

export default Client
