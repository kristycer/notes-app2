function testMessageIsReturned() {
  let note = new NoteModel("Here is the text");
  assert.isEqual(note.text, "Here is the text");
}

testMessageIsReturned()