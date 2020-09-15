function testNewNoteIsReturned() {
  let noteList = new NoteListModel();
  noteList.addNewNote("Hello world")
  assert.isEqual(noteList.notes.length, 1)
}

testNewNoteIsReturned()
