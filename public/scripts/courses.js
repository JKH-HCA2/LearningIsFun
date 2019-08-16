"use strict";

$(function()
{
    let dropdown = $("#dropdown");
    let cats;
    $.getJSON("/api/categories", function(data)
    {
        cats = data;
        for (let i = 0; i < cats.length; i++)
        {
            dropdown.append("<option>"+ cats[i].Category + "</option>")
        };
    })

    let objs;
    $.getJSON("/api/courses", function(data)
    {
        objs = data;       
    })

    $("#dropdown").on("change", function()
    {
        $("#tableBody").empty();
        let categorySelection = dropdown.val();

        let len = objs.length;
        for (let i = 0; i < len; i++)
        {
            if (categorySelection == objs[i].Category)
            {
                let str = "<tr><td>" + objs[i].CourseId + "</td><td>" + objs[i].Title + "</td><td>" + objs[i].Category + "</td><td><a href=details.html?courseid=" + objs[i].CourseId + ">Details</a></td></tr>"
                $("#tableBody").append(str);
            }
        }
    })
})