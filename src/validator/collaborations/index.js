const InvariantError = require('../../exeptions/InvariantError');
const { CollaborationPayloadSchema } = require('./schema');

const CollaborationsValidator = {
  validateCollaborationPayload: (payload) => {
    const validationResult = CollaborationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
