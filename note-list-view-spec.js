function testNoteListReturned() {
  let noteListModel = new NoteListModel();
  noteListModel.addNewNote("Here is my Note")

  let noteListView = new NoteListView(noteListModel.returnNotes());

  assert.isTrue(noteListView.htmlList(), '<ul><li><div>Here is my Note<div><li><ul>')
}

function testMultipleNotesReturned() {
  let noteListModel = new NoteListModel();
  noteListModel.addNewNote("Here is my Note")
  noteListModel.addNewNote("Here is my second note")

  let noteListView = new NoteListView(noteListModel.returnNotes());

  assert.isTrue(noteListView.htmlList(), '<ul><li><div>Here is my Note<div><li> <li><div>Here is my second note<div><li><ul>')
}

testNoteListReturned()
testMultipleNotesReturned()
