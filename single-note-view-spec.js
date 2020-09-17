function canReturnSingleNote() {
    var singlenote = new SingleNoteView("hello");
    assert.isEqual(singlenote.showNote(), "<div>hello</div>")
}
canReturnSingleNote()