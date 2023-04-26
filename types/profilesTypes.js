/**
 * @typedef {Object} AccountInfo
 * @property {string} marketplaceStringId - The identifier of the marketplace to which the account is associated.
 * @property {string} id - Identifier for sellers and vendors. Note that this value is not unique and may be the same across marketplace.
 * @property {("vendor"|"seller"|"agency")} type - The seller and vendor account types are associated with Sponsored Ads APIs. The agency account type is associated with DSP and Data Provider APIs.
 * @property {string} name - Account name.
 * @property {("KDP_AUTHOR"|"AMAZON_ATTRIBUTION")} subType - The account subtype.
 * @property {boolean} validPaymentMethod - Only present for Vendors, this returns whether the Advertiser has set up a valid payment method or not.
 */

/**
 * @typedef {Object} Profile
 * @property {number} profileId - The profile ID.
 * @property {("US"|"CA"|"MX"|"BR"|"UK"|"EG"|"DE"|"FR"|"ES"|"IT"|"NL"|"JP"|"AU"|"AE"|"SG"|"SE"|"PL"|"TR"|"BE"|"IN")} countryCode - The country code.
 * @property {("USD"|"CAD"|"MXN"|"BRL"|"GBP"|"EGP"|"JPY"|"EUR"|"AUD"|"AED"|"SEK"|"PLN"|"SGD"|"TRY"|"INR")} currencyCode - The currency code.
 * @property {number} dailyBudget - The daily budget. Note that this field applies to Sponsored Product campaigns for seller type accounts only. Not supported for vendor type accounts.
 * @property {("Africa/Cairo"|"America/Los_Angeles"|"America/Sao_Paulo"|"Europe/London"|"Europe/Stockholm"|"Europe/Paris"|"Europe/Amsterdam"|"Europe/Warsaw"|"Europe/Istanbul"|"Asia/Tokyo"|"Australia/Sydney"|"Asia/Dubai"|"Asia/Singapore"|"Asia/Kolkata")} timezone - The timezone used for all date-based campaign management and reporting.
 * @property {AccountInfo} accountInfo - The account information.
 */
