export function JournalEntry(title, date, entry) {
  this.title = title,
  this.date = date,
  this.entry = entry
}

JournalEntry.prototype.entryLength = function() {
  var splitEntry = this.entry.split(" ");
  return splitEntry.length;
}

JournalEntry.prototype.vowelNum = function() {
  var vowels = "aeiouAEIOU";
  var count = 0;
  var entry= this.entry;
  for(var i =0; i <entry.length; i++) {
  if(vowels.indexOf(entry[i]) !== -1)
  {
    count += 1;
  }
  }
  return count;
}

JournalEntry.prototype.consonantNum = function() {
  var consonants="BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz";
  var count = 0;
  var entry = this.entry;
  for( var i = 0; i < entry.length; i++) {
    if (consonants.indexOf(entry[i]) !== -1)
    {
      count +=1;
    }
  }
  return count;
}
