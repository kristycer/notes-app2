function testNoteReturned() {
  let noteListModel = new NoteListModel();

  noteListModel.addNewNote("Here is my note")

  let noteListView = new NoteListView(noteListModel.returnNotes());

  assert.isEqual(noteListView.html(), '<ul><li><div>Here is my note<div><li><ul>')
}

function testMultipleNotesReturned() {
  let noteListModel = new NoteListModel();

  noteListModel.addNewNote("Here is my note")
  noteListModel.addNewNote("Here is my second note")

  let noteListView = new NoteListView(noteListModel.returnNotes());

  assert.isEqual(noteListView.html(), '<ul><li><div>Here is my note</div></li><li><div>Here is my second note</div></li></ul>')
}

testNoteReturned()
testMultipleNotesReturned()