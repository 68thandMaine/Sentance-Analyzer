import { JournalEntry } from './journal-entry';
import './styles.css'

$(document).ready(function() {
  $('#journal-entry-form').submit(function(event){
    event.preventDefault();
    var title = $("#inputTitle").val();
    var date = $('#inputDate').val();
    var entry = $('#inputBody').val();

    var journalEntry = new JournalEntry(title, date, entry);

    $("#wordCountResult").append(journalEntry.entryLength());
    $("#vowelResult").append(journalEntry.vowelNum());

    $("#consonantResult").append(journalEntry.consonantNum());

    $("#date").append(date);
    $("#title").append(title);
    $("#body").append(entry);
    $("#inputTitle").val(" ");
    $('#inputDate').val("yyyy-MM-dd");
    $('#inputBody').val(" ");

  });
});
