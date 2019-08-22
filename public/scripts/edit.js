"use strict";

$(function()
{
    // Connects HTML Dropdown to a JavaScript variable
    let dropdown = $("#catSelector");
    let cats;
    let objs;

    // var stores the url params in a variable
    let urlParams = new URLSearchParams(location.search);
    // courseid is parsed from the url and stored in a variable
    let courseId = urlParams.get("courseid");

    $.getJSON("/api/courses/" + courseId, function(data)
    {
        objs = data

        // Strings are created for every type of information pulled from the json file
        let str = objs.CourseId
        $("#editCourseId").val(str)
        str = objs.Title
        $("#editCourseTitle").val(str)
        str = objs.Category
        $("#category").val(str)
        str = objs.Location
        $("#editLocation").val(str)
        str = objs.StartDate
        $("#editStartDate").val(str)
        str = objs.EndDate
        $("#editEndDate").val(str)
        str = objs.Fee
        $("#editFee").val(str)
        str = objs.Meets
        $("#editMeetingTime").val(str)          
    })

    // JSON call runs a get request coded in the server.js file. The function populates the dropdown menu with
    // categories from the categories.json file
    $.getJSON("/api/categories", function(data)
    {
        cats = data;
        // The statement loops through the categories.json file and programmatically appends HTML to the dropdown
        for (let i = 0; i < cats.length; i++)
        {
            dropdown.append("<option value='" + cats[i].Value + "'>"+ cats[i].Category + "</option>")
        }
    })

    $("#submitChangesBtn").on("click", sendData)
})

function sendData()
{
    $.ajax({
        url: '/api/courses',
        data: $("#editCourse").serialize(),
        method: 'PUT',
        success: function()
        {
            // var stores the url params in a variable
            let urlParams = new URLSearchParams(location.search);
            // courseid is parsed from the url and stored in a variable
            let courseId = urlParams.get("courseid");

            console.log('success');
            courseId = urlParams.get("courseid")
            window.location.href = "details.html?courseid=" + courseId
        }
    })
}