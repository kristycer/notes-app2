function addNewNoteIsReturned() {
  let note = new Notelist();
  note.addNewNote("Hello world")
  assert.isEqual(note.arr.length,1)
}

addNewNoteIsReturned()
