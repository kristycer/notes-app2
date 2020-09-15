class noteController {

  constructor(){
    let noteListModel = new NoteListModel()
    noteListModel.addNewNote("Favourite drink: seltzer");
    noteListModel.addNewNote("Favourite drink: yes");
    this.noteListView = new NoteListView(noteListModel.returnNotes());
  }

  notes(){
    return this.noteListView.html()
  }
}

let noteListModel = new noteController()
document.getElementById('app').innerHTML = noteListModel.notes();