"use stict";


$(function()
{
    let urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get("courseid");
    
    $("#courseId").val(courseId);
    $("#registration").on("click", sendData);
})

function sendData()
{
    $.post("/api/register", $("#regForm").serialize(),
    function(data)
    {
        console.log('success');
        window.location.href = 'index.html'
    })
    return false;
}