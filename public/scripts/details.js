"use strict";

$(function()
{
    let urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get("courseid")

    let objs;
    $.getJSON("/api/courses/" + courseId, function(data)
    {
        objs = data
        let str1 = "<td>" + objs.CourseId + "</td>"
        $("#courseId").append(str1)
        let str2 = "<td>" + objs.Title + "</td>"
        $("#courseName").append(str2)
        let str3 = "<td>" + objs.Category + "</td>"
        $("#courseCat").append(str3)
        let str4 = "<td>" + objs.Location + "</td>"
        $("#location").append(str4)
        let str5 = "<td>" + objs.StartDate + "</td>"
        $("#startDate").append(str5)
        let str6 = "<td>" + objs.EndDate + "</td>"
        $("#endDate").append(str6)
        let str7 = "<td>" + objs.Meets + "</td>"
        $("#meets").append(str7)
        let len = objs.Students.length
        for (let i = 0; i < len;i++)
        {
            let str8 = "<tr><td>" + objs.Students[i].StudentName + "</td><td>" + objs.Students[i].Email + "</td></tr>"
            $("#studentTableBody").append(str8)
        }
    })
    let regBtn = "<a class='btn btn-primary' href=register.html?courseid=" + courseId + ">Register</a>"
    $("#contentBlock").append(regBtn)
})