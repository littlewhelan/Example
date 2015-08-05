console.log("This is a test");

// This statement makes sure the document is loaded before
// doing any jQuery/JavaScript stuff that's inside the brackets.
$(document).ready(function() {

    // This binds an event handler to the click event, so when
    // you click on the "+ Add Row" link it will do whatever you tell
    // it to do below.
    $('#add-row').click(function(e) {

        // This stops the link from doing what it normally would do,
        // which is link to another place.
        e.preventDefault();

        // Disable this after it gets annoying!
        alert('What a good decision. Adding a row now. Enjoy your numbers.');

        // Finds the last child of the <tbody> element, which should be a <tr> element,
        // and adds a new row below it.
        $('#the-table > tbody:last-child').append('<tr><td>' + Math.random() + '</td><td>' + Math.random() + '</td><td>' + Math.random() + '</td></tr>');
    });
});