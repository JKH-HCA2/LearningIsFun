"use stict";

/*
*
* Function: Anonymous function that readies the JavaScript on-page-load
*
* Author: Jeremy Han
*
*/
$(function()
{
    // var stores the url params in a variable
    let urlParams = new URLSearchParams(location.search);
    // courseid is parsed from the url and stored in a variable
    let courseId = urlParams.get("courseid");
    
    // Populates the courseId field with data from the URL that was transferred from the details page
    $("#courseId").val(courseId);
    // Statement runs the sendData function when the register button is clicked
    $("#registration").on("click", sendData);

    let cancelBtn = "<a class='btn btn-outline-danger' id='cancelBtn' href=details.html?courseid=" + courseId + ">Cancel</a>"
    $("#regForm").append(cancelBtn)
})
/*
*
* Function: data from the form field is posted to the server.js file. student name and email is added to the classes
* students array on the coursesOffered.json file
*
* Author: Jeremy Han
*
*/
function sendData()
{
    // var stores the url params in a variable
    let urlParams = new URLSearchParams(location.search);
    // courseid is parsed from the url and stored in a variable
    let courseId = urlParams.get("courseid");

    // Data from the registration form is posted to the server
    $.post("/api/register", $("#regForm").serialize(),
    function(data)
    {
        // after the function runs the user is directed back to the home page
        console.log('success');
        courseId = urlParams.get("courseid")
        window.location.href = "details.html?courseid=" + courseId
    })
    return false;
}