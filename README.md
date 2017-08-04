Build-a-unicorn!

Democracia en Red Challenge

Weapons of Choice: HTML5, CSS3, SASS, JAVASCRIPT, JQUERY, a little PHP.
Framework: materialize.css (http://materializecss.com/)
SASS compiled with RUBY.
Fonts: Roboto, Materialize Icons

Description:
For this assigment, I started making all the form structure in HTML5.
The page has a fixed navbar, a header and a form. In its mobile layout, the background gradient is removed for better visualization and the fixed navbar is switched to a sidebar.
I started making all the styles in CSS3, but then I switched to SASS because it was more efficient.
Used materialize .scss files and after that my own stylesheet to overwrite some styles. Some of the colors were changed with materialize classes directly in the html, others changing the variables in the scss file.
I compiled the scss files using ruby. The compiled stylesheets are available in the /css directory.
I made the background using css gradients, because if it was a background-image loading time would be longer.
Made the validation using javascript and jquery. The validation prevents sending empty fields. A success or error message is displayed after the button is clicked. A php file in order to send the data was made, but it was not validated. I should test it.
The fur color options were loaded using an object inside functions.js. I tried using the Json file, but although the data was transferred correctly, the options couln't be appended.



