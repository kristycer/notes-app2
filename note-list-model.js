class NoteListModel {
  constructor() {
    this.notes = []
  }
  addNewNote(note) {
    var newNote = new NoteModel(note)
    this.notes.push(newNote.returnNote())
  }

  returnNotes() {
    return this.notes
  }
}
