"use strict";

$(function()
{
    let cats;

    $.getJSON("/api/categories", function(data)
    {
        cats = data
        for (let i = 0; i < cats.length; i++)
        {
            $("#dropdown").append("<option>" + cats[i].Category + "</option>")
        }
    })
})