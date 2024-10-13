'use strict';

/**
 * nominated router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::nominated.nominated');
