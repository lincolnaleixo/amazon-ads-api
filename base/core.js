import axios from 'axios'
import dotenv from 'dotenv'

import APIError from '../APIError.js'
import * as adsTokens from '../tokens.js'

dotenv.config()

/**
 * @class
 * @classdesc Represents the base class for Amazon Advertising API classes.
 */
class Base {
  constructor () {
    this.baseUrl = 'https://advertising-api.amazon.com'
  }

  /**
   * Makes an API request to the Amazon Advertising API.
   * @async
   * @param {string} method - The HTTP method for the request (e.g. 'get', 'post', etc.).
   * @param {string} url - The URL path for the request.
   * @param {string} [profileId] - The profile ID for the request.
   * @param {Object} [data] - The request data.
   * @param {Object} [customHeaders] - Custom headers for the request.
   * @returns {Promise<Object>} A promise that resolves to the API response data.
   * @throws {Error} If there is an error making the API request.
   */
  async _request (method, url, profileId, data, customHeaders) {
    try {
      const request = {
        method,
        url: this.baseUrl + url,
        headers: {
          Authorization: `Bearer ${process.env.AMAZON_ADVERTISING_ACCESS_TOKEN}`,
          'Amazon-Advertising-API-ClientId': process.env.AMAZON_ADVERTISING_DEV_CLIENT_ID,
          ...customHeaders
        }
      }

      if (profileId) {
        request.headers['Amazon-Advertising-API-Scope'] = profileId
        request.data = data
      }

      const response = await axios(request)
      return response.data
    } catch (error) {
      if (error?.response?.status === 401) {
        console.log('Access token expired, trying to refresh...')
        const refreshedToken = await adsTokens.refreshAccessToken()
        process.env.AMAZON_ADVERTISING_ACCESS_TOKEN = refreshedToken
        return await this._request(method, url, profileId, data)
      }

      const errorMessage = 'Error making API request:'
      console.error(errorMessage, error.response ? error.response.data : error)

      if (error.response) {
        throw new APIError(errorMessage, error.response.status, error.response.data)
      } else {
        throw new APIError(errorMessage)
      }
    }
  }
}

export default Base
