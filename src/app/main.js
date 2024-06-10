const button = document.querySelector('#button');

button.addEventListener('click', function()
{
    if (!button.classList.contains('onclic'))
    {
        button.classList.add('onclic');
        setTimeout(function()
        {
            button.classList.remove('onclic');
            button.classList.add('validate');
        }, 2250);
    }

            setTimeout(function()
            {
                button.style.animation="smooth 5.5s ease-in";
                button.classList.remove('validate');
            }, 5250);


})



$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 1, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 1, callback );
    }, 1 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1 );
    }
  });

