class NoteListView {
  constructor(noteListModel) {
    this.noteListModel = noteListModel
  }

  html() {
    let notes = this.noteListModel
    if(notes.length === 0 || notes === null) return '<ul><li><div><div><li><ul>'

    if(notes.length === 1) return `<ul><li><div>${notes}<div><li><ul>`

    else { 
      let mappedNotes = notes.map(note => `<li><div>${note.note.substring(0, 20)}</div></li>`)
      
      return `<ul>${mappedNotes.join("")}</ul>`
    }
  }
  url(){
    for (let i = 0; i < this.notes.length; i++){
   
      }
  
  }
}