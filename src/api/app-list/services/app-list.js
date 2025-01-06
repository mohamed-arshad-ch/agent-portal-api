'use strict';

/**
 * app-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-list.app-list');
