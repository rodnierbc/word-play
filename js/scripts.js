$(function() {
  $('#sentenceForm').submit(function(event) {
    event.preventDefault();
    var sentence = $('#sentence').val();
    var arrayWords = sentence.split(" ");
    var newArrayWords = [];
    arrayWords.forEach(function(word){
      if(word.length >= 3){
        newArrayWords.push(word);
      }
    });
    newSentence = newArrayWords.reverse().join(' ');
    $("#newSentenceText").text(newSentence);
  });
});
