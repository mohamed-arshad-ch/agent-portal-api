'use strict';

module.exports = {
  async find(ctx) {
    // Get the user from the JWT token
    const { id } = ctx.state.user || {};

    if (!id) {
      return ctx.unauthorized('You must be logged in to access this endpoint');
    }

    // Fetch the user and their role
    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user', // Entity type
      id, // User ID
      { populate: ['role'] } // Populate the role relationship
    );

    // Return the user's role
    return {
      role: user.role,
    };
  },
};
