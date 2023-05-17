// Waits until HTML is loaded and then waits for button to be clicked
document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('#colorchange').addEventListener('click', function(e) {
        // I got these colors from here: https://www.w3schools.com/css/css_colors.asp
        // When button is clicked, the background and text change
            document.querySelector('body').style.background = 'gold';
            document.querySelector('body').style.color = 'Firebrick';
            document.querySelector('#header1').style.color = 'Firebrick';
            document.querySelector('#header2').style.color = 'Firebrick';
            document.querySelector('#header3').style.color = 'Firebrick';
    })

// Waits until HTML is loaded and then waits for button to be clicked
    document.querySelector('#goback').addEventListener('click', function(e) {
        // I got these colors from here: https://www.w3schools.com/css/css_colors.asp
        // When button is clicked, the background and text revert to original
            document.querySelector('body').style.background = 'DarkSlateGray';
            document.querySelector('body').style.color = 'MintCream';
            document.querySelector('#header1').style.color = 'MintCream';
            document.querySelector('#header2').style.color = 'MintCream';
            document.querySelector('#header3').style.color = 'MintCream';
    })
})


