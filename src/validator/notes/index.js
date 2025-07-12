const { NotePayloadSchema } = require("./schema");

const NotesValidator = {
  validateNotePayload: (payload) => {
    const valiadationResult = NotePayloadSchema.validate(payload);

    if (valiadationResult.error) {
      throw new Error(valiadationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
