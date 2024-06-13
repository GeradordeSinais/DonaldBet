const button = document.querySelectorAll("button")[0];

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
        button.classList.remove('validate');
    }, 5250);


})
