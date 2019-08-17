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
    // var stores the url params in a variable
    let urlParams = new URLSearchParams(location.search);
    // courseid is parsed from the url and stored in a variable
    let courseId = urlParams.get("courseid")

    let objs;
    // JSON get request pulls data from the coursesOffered.json file and points it into a var (objs)
    $.getJSON("/api/courses/" + courseId, function(data)
    {
        objs = data
        // Strings are created for every type of information pulled from the json file
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
        // For loop statement runs through the students array and prints them to the student list table (if necessary)
        let len = objs.Students.length
        for (let i = 0; i < len;i++)
        {
            let str8 = "<tr><td>" + objs.Students[i].StudentName + "</td><td>" + objs.Students[i].Email + "</td></tr>"
            $("#studentTableBody").append(str8)
        }
    })
    // Button is created dynamically to populate the course ID field on the registration page with data in the URL
    let regBtn = "<a class='btn btn-primary' id='registerBtn' href=register.html?courseid=" + courseId + ">Register</a>"
    $("#contentBlock").append(regBtn)
})