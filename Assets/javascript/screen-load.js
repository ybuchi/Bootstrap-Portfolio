//Make sure the document is DOM ready
$(document).ready(function(){
    console.log("The page is ready for use!")
});

//Populate the Project links in the footer with the updated list of projects.

//Create a variable for the Project Names in the Portfolio page

var project1 = $("#card-title-1").text();
var project2 = $("#card-title-2").text();
var project3 = $("#card-title-3").text();
var project4 = $("#card-title-4").text();

//Create variables for the Project links

var link1 = $("#project-link-1").attr("href");
console.log(link1);
var link2 = $("#project-link-2").attr("href");
var link3 = $("#project-link-3").attr("href");
var link4 = $("#project-link-4").attr("href");



//Place these names inside of the links
$("#link-1").append(project1);
$("#link-1").attr("href", link1);

$("#link-2").append(project2);
$("#link-2").attr("href", link1);


$("#link-3").append(project3);
$("#link-3").attr("href", link1);


$("#link-4").append(project4);
$("#link-4").attr("href", link1);


