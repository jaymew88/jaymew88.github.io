$(function() {

// hide story and play again button from view
$('.madLibsPreview').hide();
$('#playAgainButton').hide();

// event handler
$('#previewButton').click(function(e) {
  const girlName = $('#girlNameInput').val();
  const place = $('#placeInput').val();
  const number = $('#numberInput').val();
  const actionVerb1 = $('#actionVerb1Input').val();
  const actionVerb2 = $('#actionVerb2Input').val();
  const actionVerb3 = $('#actionVerb3Input').val();
  const verb = $('#verbInput').val();
  const boyName = $('#boyNameInput').val();
  const noun1 = $('#noun1Input').val();
  const noun2 = $('#noun2Input').val();
  const adjective1 = $('#adjective1Input').val();
  const adjective2 = $('#adjective2Input').val();

  $('#girlNamePreview').text(girlName);
  $('#placePreview').text(place);
  $('#numberPreview').text(number);
  $('#actionVerb1Preview').text(actionVerb1);
  $('#actionVerb2Preview').text(actionVerb2);
  $('#actionVerb3Preview').text(actionVerb3);
  $('#verbPreview').text(verb);
  $('#boyNamePreview').text(boyName);
  $('#noun1Preview').text(noun1);
  $('#noun2Preview').text(noun2);
  $('#adjective1Preview').text(adjective1);
  $('#adjective2Preview').text(adjective2);

  // shows story and playAgainButton
  $('.madLibsPreview').show();
  $('#playAgainButton').show();

  //emptys the input values
  $(':input').val('');

  // hides the questions
  $(".madLibsArea").hide();

  });
});

  $("#playAgainButton").click(function(e) {
    $(".madLibsArea").show();
    $(".madLibsPreview").hide();
  });
