import axios from 'axios'

import './types/tokensTypes.js'

/**
 * Refreshes the access token and updates it in the database.
 * @returns {Promise<void>}
 * @throws {Error} If there is an error while refreshing the access token.
 */
export async function refreshAccessToken () {
  console.log('Refreshing access token...')
  try {
    const request = {
      method: 'post',
      url: 'https://api.amazon.com/auth/o2/token',
      data: {
        grant_type: 'refresh_token',
        client_id: process.env.AMAZON_ADVERTISING_DEV_CLIENT_ID,
        refresh_token: process.env.AMAZON_ADVERTISING_REFRESH_TOKEN,
        client_secret: process.env.AMAZON_ADVERTISING_DEV_CLIENT_SECRET
      }
    }

    const response = await axios(request)
    const newAccessToken = response.data.access_token

    console.log('Access token refreshed successfully')
    return newAccessToken
  } catch (error) {
    console.error('Error refreshing access token:', error.response ? error.response.data : error)
  }
}
