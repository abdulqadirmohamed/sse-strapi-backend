'use strict';

/**
 * nominated service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nominated.nominated');
