function addNewNoteIsReturned() {
  let note = new Notelist();
  note.addNewNote("Hello world")
  console.log(note.arr)
  console.log(["Note1","Note2","Note3","Hello world"]);
  assert.isEqual(note.arr.length,4)
}

addNewNoteIsReturned()
