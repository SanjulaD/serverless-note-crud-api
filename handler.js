'use strict';

module.exports.createNote = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify("A new note was created"),
  };
};

module.exports.updateNote = async (event) => {
  let noteId = event.pathParameters.id
  return {
    statusCode: 200,
    body: JSON.stringify("The note with ID: " + noteId + " updated"),
  };
};

module.exports.deleteNote = async (event) => {
  let noteId = event.pathParameters.id
  return {
    statusCode: 200,
    body: JSON.stringify("The note with ID: " + noteId + " deleted"),
  };
};

module.exports.getAllNotes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("All notes are returned"),
  };
};