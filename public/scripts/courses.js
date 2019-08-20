"use strict";

/*
*
* Function: Anonymous function that readies the JavaScript on-page-load
*
* Author: Jeremy Han
*
*/
$(function()
{
    // Connects HTML Dropdown to a JavaScript variable
    let dropdown = $("#dropdown");
    let cats;
    let objs;

    // JSON call runs a get request coded in the server.js file. The function populates the dropdown menu with
    // categories from the categories.json file
    $.getJSON("/api/categories", function(data)
    {
        cats = data;
        // The statement loops through the categories.json file and programmatically appends HTML to the dropdown
        for (let i = 0; i < cats.length; i++)
        {
            dropdown.append("<option value='" + cats[i].Value + "'>"+ cats[i].Category + "</option>")
        };
    })    

    // Function runs when the dropdown menu selection changes
    $("#dropdown").on("change", function()
    {
        // Clears the table whenever the function is ran to ready it for new data
        $("#tableBody").empty();
        getTableHead();

        // JSON call runs a get request coded in the server.js file. The function stores the dropdown selection
        // and returns a list of classes with a matching category.
        /* 
        *  @param data (JSON Array) - Variable in which the JSON array is carried on
        *  @param objs (JSON Array) - this is where the array is pointed to after being pulled from the JSON file
        *  @param len (Number) - Calculates the length of the JSON array
        *  @param str (String) - HTML string to be appended to the table on each loop
        */
        $.getJSON("/api/courses/bycategory/" + dropdown.val(), function(data)
        {
            objs = data;
            let len = objs.length;
            // For loop statement loops through the JSON array and appends a string to the table for every matching
            // Class found
            for (let i = 0; i < len; i++)
            {
                let str = "<tr><td>" + objs[i].CourseId + "</td><td>" + objs[i].Title + "</td><td>" + objs[i].Category + "</td><td><a class='btn btn-outline-primary' href=details.html?courseid=" + objs[i].CourseId + ">Details</a></td></tr>"
                $("#tableBody").append(str);
            }       
        })        
    })
    // Function runs when the user clicks the button
    $("#viewAll").on("click", function()
    {
        // Clears all prior data from the table
        $("#tableBody").empty();

        // Json call runs a get request coded in the server.js file. The function pulls all the classes from the rest
        // API and points it to a JS variable
        /*
        *  @param objs (JSON Array) - this is where the array is pointed to after being pulled from the JSON file
        *  @param len (Number) - Calculates the length of the JSON array
        *  @param str (String) - HTML string to be appended to the table on each loop
        */
        $.getJSON("/api/courses", function(data)
        {
            objs = data;
            let len = objs.length;
            // For loop statement prints all the classes from the JSON array onto the page
            for (let i = 0; i < len; i++)
            {
                let str = "<tr><td>" + objs[i].CourseId + "</td><td>" + objs[i].Title + "</td><td>" + objs[i].Category + "</td><td><a href=details.html?courseid=" + objs[i].CourseId + ">Details</a></td></tr>"
                $("#tableBody").append(str);
            }
        })
    })
})

function getTableHead()
{
    $("#tableHead").empty();
    let str = "<tr><th>Course ID:</th><th>Course Name</th><th>Category:</th><th>Details</th></tr>"
    $("#tableHead").append(str)
}