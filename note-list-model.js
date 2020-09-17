class NoteListModel {
  constructor() {
    this.id = 0;
    this.notes = []
  }
  
  addNewNote(note) {

    var newNote = { note: new NoteModel(note).text, id: this.id++}
    this.notes.push(newNote)
  }

  returnNotes() {
    return this.notes
  }
}
