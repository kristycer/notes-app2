class SingleNoteView{
    constructor(text){
        this.note = new NoteModel(text);
    }
    showNote(){
        return "<div>" + this.note.text + "</div>"
    }
}