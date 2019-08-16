"use strict";

$(function()
{
    let dropdown = $("#dropdown");
    let cats;
    let objs;

    $.getJSON("/api/categories", function(data)
    {
        cats = data;
        for (let i = 0; i < cats.length; i++)
        {
            dropdown.append("<option value='" + cats[i].Value + "'>"+ cats[i].Category + "</option>")
        };
    })    

    $("#dropdown").on("change", function()
    {
        $("#tableBody").empty();

        $.getJSON("/api/courses/bycategory/" + dropdown.val(), function(data)
        {
            objs = data;
            let len = objs.length
            for (let i = 0; i < len; i++)
            {
                let str = "<tr><td>" + objs[i].CourseId + "</td><td>" + objs[i].Title + "</td><td>" + objs[i].Category + "</td><td><a href=details.html?courseid=" + objs[i].CourseId + ">Details</a></td></tr>"
                $("#tableBody").append(str);
            }       
        })        
    })
})