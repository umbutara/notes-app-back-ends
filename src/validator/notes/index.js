const InvariantError = require("../../exceptions/InvariantError");
const { NotePayloadSchema } = require("./schema");

const NotesValidator = {
  validateNotePayload: (payload) => {
    const valiadationResult = NotePayloadSchema.validate(payload);

    if (valiadationResult.error) {
      throw new InvariantError(valiadationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
