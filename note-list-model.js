class NoteListModel {
  constructor() {
    this.notes = []
  }
  addNewNote(note) {
    var newNote = new NoteModel(note)
    this.notes.push(newNote)
  }

  returnNotes() {
    this.notes
  }
}
