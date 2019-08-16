"use stict";


$(function()
{
    let urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get("courseid")
    $("#courseId").val(courseId)




})