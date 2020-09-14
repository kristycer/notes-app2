function testMessageIsReturned() {
  let note = new Note("Here is the text");
  assert.isEqual(note.text, "Here is the text");
}

testMessageIsReturned()