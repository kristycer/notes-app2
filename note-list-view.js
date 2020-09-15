class NoteListView {
  constructor(noteListModel) {
    this.noteListModel = noteListModel
  }

  html() {
    let notes = this.noteListModel

    if(notes.length === 0 || notes === null) return '<ul><li><div><div><li><ul>'

    if(notes.length === 1) return `<ul><li><div>${notes}<div><li><ul>`

    else { 
      let mappedNotes = notes.map(note => `<li><div>${note}</div></li>`)
      
      return `<ul>${mappedNotes.join("")}</ul>`
    }
  }
}