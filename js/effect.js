$(function ()
{
  //  the selector picks the <h2> element
  // and hides it so that it can be
  // animated in. The chosen effect
  // to show the heading is the
  // .slideDown() method
  $("h2").hide().slideDown();
  var $li = $("li");
  
  //  The second part causes the
  // list of items to appear one by
  // one. Then the .each () method is
  // used to loop through each of
  // the <li> elements in turn
  $li.hide().each(function(index)
  {
    $(this).delay(700 * index).fadeIn(700);
    });
    
    // The final part creates an event
    // listener that waits for the user to
    // click on a list item. When they
    // do, it will fade that item out to
    // remove it from the list (the fade
    // will take 700 milliseconds).     
    $li.on("click", function()
    {
      $(this).fadeOut(700);
    });
});
