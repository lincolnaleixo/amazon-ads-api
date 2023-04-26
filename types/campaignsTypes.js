/**
 * @typedef {'AUTO' | 'MANUAL'} SponsoredProductsTargetingType
 * @typedef {'ENABLED' | 'PAUSED' | 'ARCHIVED' | 'DELETED' | 'FINISHED' | 'SUSPENDED'} SponsoredProductsEntityState
 * @typedef {'LEGACY_FOR_SALES' | 'AUTO_FOR_SALES' | 'MANUAL' | 'RULE_BASED'} SponsoredProductsBiddingStrategy
 * @typedef {'DAILY' | 'MONTHLY'} SponsoredProductsBudgetType
 * @typedef {'PLACEMENT_TOP'} SponsoredProductsPlacement
 * @typedef {'CAMPAIGN_STATUS_ENABLED'} SponsoredProductsCampaignServingStatus
 */

/**
 * @typedef {Object} SponsoredProductsPlacementBidding
 * @property {number} percentage
 * @property {SponsoredProductsPlacement} placement
 */

/**
 * @typedef {Object} SponsoredProductsDynamicBidding
 * @property {SponsoredProductsPlacementBidding[]} placementBidding
 * @property {SponsoredProductsBiddingStrategy} strategy
 */

/**
 * @typedef {Object} SponsoredProductsBudget
 * @property {SponsoredProductsBudgetType} budgetType
 * @property {number} budget
 * @property {number} effectiveBudget
 */

/**
 * @typedef {Object} SponsoredProductsTags
 * @property {string} [key]
 */

/**
 * @typedef {Object} SponsoredProductsServingStatusDetails
 * @property {string} name
 * @property {string} helpUrl
 * @property {string} message
 */

/**
 * @typedef {Object} SponsoredProductsCampaignExtendedData
 * @property {string} lastUpdateDateTime
 * @property {SponsoredProductsCampaignServingStatus} servingStatus
 * @property {SponsoredProductsServingStatusDetails[]} servingStatusDetails
 * @property {string} creationDateTime
 */

/**
 * @typedef {Object} Campaign
 * @property {number} profileId
 * @property {string} [portfolioId]
 * @property {string} [endDate]
 * @property {string} campaignId
 * @property {string} name
 * @property {SponsoredProductsTargetingType} targetingType
 * @property {SponsoredProductsEntityState} state
 * @property {SponsoredProductsDynamicBidding} dynamicBidding
 * @property {string} startDate
 * @property {SponsoredProductsBudget} budget
 * @property {SponsoredProductsTags} [tags]
 * @property {SponsoredProductsCampaignExtendedData} extendedData
 */

/**
 * @typedef {Object} CampaignsResponse
 * @property {number} totalResults
 * @property {Campaign[]} campaigns
 * @property {string} [nextToken]
 */
