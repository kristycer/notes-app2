
let noteListModel = new noteController()
document.getElementById('app').innerHTML = noteListModel.wantToSeeThisNote()
class noteController 
{
  constructor(noteListModel = new NoteListModel()){

    this.noteListModel = noteListModel.addNewNote("Here is my note");
    this.noteListView = new NoteListView(noteListModel.returnNotes());
  }
 wantToSeeThisNote(){
  return this.noteListView.htmlList()
  }
}