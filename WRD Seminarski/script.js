// DOM CREATE ELEMENT
function cr(e) { return document.createElement(e); };




// HEADER CONTENT 

var header = cr('header');
var divHeaderContainer = cr('div');
var themeButtonDark = cr('button');
var themeButtonLight = cr('button');

themeButtonDark.setAttribute('id', 'themeButtonDark');
themeButtonLight.setAttribute('id', 'themeButtonLight');

themeButtonDark.innerHTML = 'Dark theme';
themeButtonLight.innerHTML = 'Light theme';

// navigation bar
var divNav = cr('div');
divNav.setAttribute('class', 'navigationDiv');

var personalInfo = cr('a');
personalInfo.setAttribute('href', '#');
personalInfo.setAttribute('id', 'personal');

personalInfo.innerHTML = 'Personal information';

var workExperience = cr('a');
workExperience.setAttribute('href', '#');
workExperience.setAttribute('id', 'workExp');

workExperience.innerHTML = 'Work experience';

var EducationAndTraining = cr('a');
EducationAndTraining.setAttribute('href', '#');
EducationAndTraining.setAttribute('id', 'education');

EducationAndTraining.innerHTML = 'Education and training';

var PersonalSkills = cr('a');
PersonalSkills.setAttribute('href', '#');
PersonalSkills.setAttribute('id', 'personalSkills');

PersonalSkills.innerHTML = 'Personal skills';


var fitLogo = cr('img');
fitLogo.setAttribute('src', 'logo-FIT.png');
fitLogo.setAttribute('id', 'logo');


// header appends
header.setAttribute('id', 'header');
divHeaderContainer.setAttribute('id', 'header-container');

divNav.appendChild(personalInfo);
divNav.appendChild(workExperience);
divNav.appendChild(EducationAndTraining);
divNav.appendChild(PersonalSkills);
divNav.appendChild(fitLogo);


divNav.appendChild(themeButtonDark);
divNav.appendChild(themeButtonLight);


divHeaderContainer.appendChild(divNav);

header.appendChild(divHeaderContainer);
document.body.appendChild(header);


// MAIN CONTENT
var main = cr('main');
var divMainContainer = cr('div');
var backgroundImage = cr('img');


divMainContainer.setAttribute('id', 'main-container');
backgroundImage.setAttribute('src', 'background.png');
backgroundImage.setAttribute('id', 'background-image');

//PERSONAL INFORMATION

var sectionPersonal = cr('section');
sectionPersonal.setAttribute('id', 'personalInfo');

var sectionPersonalHeader = cr('h4');
sectionPersonalHeader.setAttribute('id', 'personalHeader');
sectionPersonalHeader.innerHTML = 'Personal information';

var sectionPersonalContent = cr('p');
sectionPersonalContent.setAttribute('id', 'personalInfoContent');
sectionPersonalContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui vel risus faucibus facilisis et vitae leo. Proin id tincidunt nunc. Praesent at libero non odio lobortis faucibus. Aliquam nec sapien ut nisi viverra bibendum ut at mi. Cras rutrum semper turpis, placerat bibendum sem gravida vel. Nam pharetra felis ac molestie rhoncus. Cras eu dolor justo. Donec eros ex, venenatis faucibus eros et, finibus pretium leo. Vivamus commodo orci ante, ut sagittis nunc convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut viverra condimentum ipsum, laoreet commodo arcu tristique quis. In non sagittis dui, eu suscipit diam. Nulla mollis augue et tortor pretium egestas. Morbi in tempus velit. Vivamus placerat blandit dapibus. Fusce ut nulla eu dolor malesuada tincidunt. Pellentesque a neque vel odio facilisis feugiat. Proin luctus feugiat velit, vel posuere tellus. Etiam placerat nibh sit amet nunc venenatis, vitae semper nibh euismod. Etiam id accumsan leo, in sodales nisl. Integer in nibh suscipit, sodales elit non, scelerisque nibh. Nam at nisl dictum, euismod magna sit amet, mattis odio. Curabitur pretium eros eu pellentesque viverra.';


var personalPhoto = cr('img');
personalPhoto.setAttribute('id', 'photo');
personalPhoto.setAttribute('src', 'pajson.jpg');


// WORK EXPERIENCE

var sectionWork = cr('section');
sectionWork.setAttribute('id', 'work');

var sectionWorkHeader = cr('h4');
sectionWorkHeader.setAttribute('id', 'workHeader');
sectionWorkHeader.innerHTML = 'Work experience';

var webDev = cr('h5');
webDev.setAttribute('id', 'webdev');
webDev.innerHTML = "Web development";

var sectionWorkContent = cr('p');
sectionWorkContent.setAttribute('id', 'workContent');
sectionWorkContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui vel risus faucibus facilisis et vitae leo. Proin id tincidunt nunc. Praesent at libero non odio lobortis faucibus. Aliquam nec sapien ut nisi viverra bibendum ut at mi. Cras rutrum semper turpis, placerat bibendum sem gravida vel. Nam pharetra felis ac molestie rhoncus. Cras eu dolor justo. Donec eros ex, venenatis faucibus eros et, finibus pretium leo. Vivamus commodo orci ante, ut sagittis nunc convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut viverra condimentum ipsum, laoreet commodo arcu tristique quis. In non sagittis dui, eu suscipit diam. Nulla mollis augue et tortor pretium egestas. Morbi in tempus velit. Vivamus placerat blandit dapibus. Fusce ut nulla eu dolor malesuada tincidunt. Pellentesque a neque vel odio facilisis feugiat. Proin luctus feugiat velit, vel posuere tellus. Etiam placerat nibh sit amet nunc venenatis, vitae semper nibh euismod. Etiam id accumsan leo, in sodales nisl. Integer in nibh suscipit, sodales elit non, scelerisque nibh. Nam at nisl dictum, euismod magna sit amet, mattis odio. Curabitur pretium eros eu pellentesque viverra. Nulla libero nunc, euismod ut rhoncus nec, commodo at ex. Suspendisse ac tincidunt sapien, non volutpat neque. Integer at pretium elit, in malesuada tellus. Suspendisse tincidunt sapien sit amet ante interdum porta. Proin ultricies risus tempor, mollis elit quis, vehicula orci. Donec in tortor a leo fermentum eleifend. Morbi vel volutpat leo. Nulla efficitur, lorem at tincidunt convallis, odio nunc gravida justo, non faucibus tellus justo ac mi. Cras malesuada varius elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla consectetur lacinia nunc at commodo. Etiam scelerisque rutrum accumsan. Sed ultricies interdum leo, ut ornare est elementum ut. Suspendisse condimentum molestie ornare. Nullam vitae sapien a tellus porta malesuada in id felis.';


// EDUCATION AND TRAINING




var sectionEducation = cr('section');
sectionEducation.setAttribute('id', 'educationSection');

var sectionEducationHeader = cr('h4');
sectionEducationHeader.setAttribute('id', 'educationHeader');
sectionEducationHeader.innerHTML = 'Education and training';


var sectionEducationContent = cr('p');
sectionEducationContent.setAttribute('id', 'educationContent');
sectionEducationContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui vel risus faucibus facilisis et vitae leo. Proin id tincidunt nunc. Praesent at libero non odio lobortis faucibus. Aliquam nec sapien ut nisi viverra bibendum ut at mi. Cras rutrum semper turpis, placerat bibendum sem gravida vel. Nam pharetra felis ac molestie rhoncus. Cras eu dolor justo. Donec eros ex, venenatis faucibus eros et, finibus pretium leo. Vivamus commodo orci ante, ut sagittis nunc convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut viverra condimentum ipsum, laoreet commodo arcu tristique quis. In non sagittis dui, eu suscipit diam. Nulla mollis augue et tortor pretium egestas. Morbi in tempus velit. Vivamus placerat blandit dapibus. Fusce ut nulla eu dolor malesuada tincidunt. Pellentesque a neque vel odio facilisis feugiat. Proin luctus feugiat velit, vel posuere tellus. Etiam placerat nibh sit amet nunc venenatis, vitae semper nibh euismod. Etiam id accumsan leo, in sodales nisl. Integer in nibh suscipit, sodales elit non, scelerisque nibh. Nam at nisl dictum, euismod magna sit amet, mattis odio. Curabitur pretium eros eu pellentesque viverra. Nulla libero nunc, euismod ut rhoncus nec, commodo at ex. Suspendisse ac tincidunt sapien, non volutpat neque. Integer at pretium elit, in malesuada tellus. Suspendisse tincidunt sapien sit amet ante interdum porta. Proin ultricies risus tempor, mollis elit quis, vehicula orci. Donec in tortor a leo fermentum eleifend. Morbi vel volutpat leo. Nulla efficitur, lorem at tincidunt convallis, odio nunc gravida justo, non faucibus tellus justo ac mi. Cras malesuada varius elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla consectetur lacinia nunc at commodo. Etiam scelerisque rutrum accumsan. Sed ultricies interdum leo, ut ornare est elementum ut. Suspendisse condimentum molestie ornare. Nullam vitae sapien a tellus porta malesuada in id felis.';


// PERSONAL SKILLS 


var sectionPersonalSkills = cr('section');
sectionPersonalSkills.setAttribute('id', 'personalSkillsSection');

var sectionPersonalSkillsHeader = cr('h4');
sectionPersonalSkillsHeader.setAttribute('id', 'personalSkillsHeader');
sectionPersonalSkillsHeader.innerHTML = 'Personal skills';


var sectionPersonalSkillsContent = cr('p');
sectionPersonalSkillsContent.setAttribute('id', 'personalSkillsContent');
sectionPersonalSkillsContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui vel risus faucibus facilisis et vitae leo. Proin id tincidunt nunc. Praesent at libero non odio lobortis faucibus. Aliquam nec sapien ut nisi viverra bibendum ut at mi. Cras rutrum semper turpis, placerat bibendum sem gravida vel. Nam pharetra felis ac molestie rhoncus. Cras eu dolor justo. Donec eros ex, venenatis faucibus eros et, finibus pretium leo. Vivamus commodo orci ante, ut sagittis nunc convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut viverra condimentum ipsum, laoreet commodo arcu tristique quis. In non sagittis dui, eu suscipit diam. Nulla mollis augue et tortor pretium egestas. Morbi in tempus velit. Vivamus placerat blandit dapibus. Fusce ut nulla eu dolor malesuada tincidunt. Pellentesque a neque vel odio facilisis feugiat. Proin luctus feugiat velit, vel posuere tellus. Etiam placerat nibh sit amet nunc venenatis, vitae semper nibh euismod. Etiam id accumsan leo, in sodales nisl. Integer in nibh suscipit, sodales elit non, scelerisque nibh. Nam at nisl dictum, euismod magna sit amet, mattis odio. Curabitur pretium eros eu pellentesque viverra. Nulla libero nunc, euismod ut rhoncus nec, commodo at ex. Suspendisse ac tincidunt sapien, non volutpat neque. Integer at pretium elit, in malesuada tellus. Suspendisse tincidunt sapien sit amet ante interdum porta. Proin ultricies risus tempor, mollis elit quis, vehicula orci. Donec in tortor a leo fermentum eleifend. Morbi vel volutpat leo. Nulla efficitur, lorem at tincidunt convallis, odio nunc gravida justo, non faucibus tellus justo ac mi. ';


// COMMENT SECTION

var sectionComment = cr('section');
sectionComment.setAttribute('id', 'commentSection');

var sectionCommentHeader = cr('h4');
sectionCommentHeader.setAttribute('id', 'commentHeader');
sectionCommentHeader.innerHTML = 'Leave a comment';


var sectionCommentContent = cr('div');
sectionCommentContent.setAttribute('id', 'commentContent');

//FORM

var form = cr('form');
form.setAttribute('id', 'form');

// inputs

var nameDiv = cr('div');
nameDiv.setAttribute('id', 'nameDiv');
nameDiv.innerHTML = 'Name: ';

var commentDiv = cr('div');
commentDiv.setAttribute('id', 'commentDiv');
commentDiv.innerHTML = 'Comment: ';

var nameInput = cr('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'nameInput');
nameInput.setAttribute('placeholder', 'Enter your name..');

var commentInput = cr('input');
commentInput.setAttribute('id', 'commentInput');

commentInput.setAttribute('placeholder', 'Enter your comment...');

var submitButton = cr('button');
submitButton.setAttribute('id', 'submitButton');
submitButton.innerHTML = "Submit";





nameDiv.appendChild(nameInput);

commentDiv.appendChild(commentInput);


form.appendChild(nameDiv);
form.appendChild(commentDiv);
form.appendChild(submitButton);

sectionCommentContent.appendChild(form);





//main appends

sectionComment.appendChild(sectionCommentHeader);
sectionComment.appendChild(sectionCommentContent);

sectionPersonalSkills.appendChild(sectionPersonalSkillsHeader);
sectionPersonalSkills.appendChild(sectionPersonalSkillsContent);

sectionEducation.appendChild(sectionEducationHeader);
sectionEducation.appendChild(sectionEducationContent);

sectionWork.appendChild(sectionWorkHeader);
sectionWork.appendChild(webDev);
sectionWork.appendChild(sectionWorkContent);


sectionPersonal.appendChild(sectionPersonalHeader);
sectionPersonal.appendChild(personalPhoto);

sectionPersonal.appendChild(sectionPersonalContent);


divMainContainer.appendChild(sectionPersonal);
divMainContainer.appendChild(sectionWork);
divMainContainer.appendChild(sectionEducation);
divMainContainer.appendChild(sectionPersonalSkills);
divMainContainer.appendChild(sectionComment);

main.appendChild(divMainContainer);
document.body.appendChild(main);


// FOOTER CONTENT

var footer = cr('footer');
var divFooterContainer = cr('div');
var madeBy = cr('p');




madeBy.innerHTML = '© 2018 EMIR PAJIĆ ALL RIGHTS RESERVED';

divFooterContainer.setAttribute('id', 'footer-container');

// footer appends

divFooterContainer.appendChild(madeBy);
footer.appendChild(divFooterContainer);
document.body.appendChild(footer);

// JQUERY

// ************************************************************************************************
// ************************************************************************************************

var JQ = jQuery.noConflict();


// Body



JQ(document).ready(function () {

    JQ("body").css('font-family', 'Arial');
    JQ("body").css('background-image', 'url("background.png")');
    JQ("body").css('background-repeat', 'no-repeat');
    JQ("body").css('background-size', '100% 100%');
    JQ("body").css('margin', '0');
    JQ("body").css('padding', '0');

});


//header

JQ(document).ready(function () {

    //JQ("#header-container").css('height', '80px');
    JQ("#header-container").css('background-color', 'white');
    JQ("#header-container").css('opacity', '0.98');
    JQ("#header-container").css('border-bottom', '1px solid blue');

    JQ('.navigationDiv').find('a').css('color', 'blue');
    JQ('.navigationDiv').css('overflow', 'hidden');

    JQ('#logo').css('height', '60px');
    JQ('#logo').css('margin-left', '100px');
    JQ('#logo').css('margin-top', '5px');

});


//Main

JQ(document).ready(function () {

    JQ('#background-image').css('width', '100%');
    JQ('main').css('height', '2250px');
    JQ('#loading').css('text-align', 'center');
    JQ('#loading').css('font-size', '100px');
    JQ('#loading').css('padding-top', '200px');
    // JQ('#main-container').css('background-color','red');
    JQ('#main-container').css('height', '800px');
    JQ('#main-container').css('margin', '80px 150px');

    //PERSONAL INFO

    JQ('#personalInfo').css('margin-top', '100px');
    JQ('#personalInfo').css('border-left', '2px solid black');
    JQ('#personalInfo').css('background-color', 'white');
    JQ('#personalInfo').css('border-right', '2px solid black');
    JQ('#personalInfo').css('border-radius', '7px');




    JQ('#personalHeader').css('font-size', '22px');
    JQ('#personalHeader').css('color', 'black');
    JQ('#personalHeader').css('text-align', 'center');
    JQ('#personalHeader').css('font-style', 'italic');
    JQ('#personalHeader').css('padding-top', '15px');



    //content
    JQ('#photo').css('height', '450px');
    JQ('#photo').css('width', '500px');
    JQ('#photo').css('display', 'block');
    JQ('#photo').css('margin-left', 'auto');
    JQ('#photo').css('margin-right', 'auto');
    JQ('#photo').css('border', '1px solid black');


    JQ('#personalInfoContent').css('font-style', 'italic');
    JQ('#personalInfoContent').css('text-align', 'justify');

    JQ('#personalInfoContent').css('margin', '5px 15px');
    JQ('#personalInfoContent').css('padding', '15px 35px');
    JQ('#personalInfoContent').css('color', 'black');


    //Work experience


    JQ('#work').css('background-color', 'white');
    JQ('#work').css('border-left', '2px solid black');


    JQ('#work').css('border-right', '2px solid black');
    JQ('#work').css('border-radius', '7px');


    JQ('#workHeader').css('font-size', '22px');
    JQ('#workHeader').css('color', 'black');
    JQ('#workHeader').css('text-align', 'center');
    JQ('#workHeader').css('font-style', 'italic');
    JQ('#workHeader').css('padding-top', '15px');

    JQ('#webdev').css('text-decoration', 'underline');
    JQ('#webdev').css('padding-left', '50px');



    JQ('#workContent').css('font-style', 'italic');
    JQ('#workContent').css('text-align', 'justify');

    JQ('#workContent').css('margin', '5px 15px');
    JQ('#workContent').css('padding', '15px 35px');
    JQ('#workContent').css('color', 'black');

    //Education and training 

    JQ('#educationSection').css('background-color', 'white');
    JQ('#educationSection').css('border-left', '2px solid black');


    JQ('#educationSection').css('border-right', '2px solid black');
    JQ('#educationSection').css('border-radius', '7px');


    JQ('#educationHeader').css('font-size', '22px');
    JQ('#educationHeader').css('color', 'black');
    JQ('#educationHeader').css('text-align', 'center');
    JQ('#educationHeader').css('font-style', 'italic');
    JQ('#educationHeader').css('padding-top', '15px');



    JQ('#educationContent').css('font-style', 'italic');
    JQ('#educationContent').css('text-align', 'justify');

    JQ('#educationContent').css('margin', '5px 15px');
    JQ('#educationContent').css('padding', '15px 35px');
    JQ('#educationContent').css('color', 'black');

    // Personal skills


    JQ('#personalSkillsSection').css('background-color', 'white');
    JQ('#personalSkillsSection').css('border-left', '2px solid black');


    JQ('#personalSkillsSection').css('border-right', '2px solid black');
    JQ('#personalSkillsSection').css('border-radius', '7px');


    JQ('#personalSkillsHeader').css('font-size', '22px');
    JQ('#personalSkillsHeader').css('color', 'black');
    JQ('#personalSkillsHeader').css('text-align', 'center');
    JQ('#personalSkillsHeader').css('font-style', 'italic');
    JQ('#personalSkillsHeader').css('padding-top', '15px');



    JQ('#personalSkillsContent').css('font-style', 'italic');
    JQ('#personalSkillsContent').css('text-align', 'justify');

    JQ('#personalSkillsContent').css('margin', '5px 15px');
    JQ('#personalSkillsContent').css('padding', '15px 35px');
    JQ('#personalSkillsContent').css('color', 'black');

    // Comment section


    JQ('#commentSection').css('background-color', 'white');


    JQ('#commentSection').css('border-left', '2px solid black');


    JQ('#commentSection').css('border-right', '2px solid black');
    JQ('#commentSection').css('border-radius', '7px');


    JQ('#commentHeader').css('font-size', '22px');
    JQ('#commentHeader').css('color', 'black');
    JQ('#commentHeader').css('text-align', 'center');
    JQ('#commentHeader').css('font-style', 'italic');
    JQ('#commentHeader').css('padding-top', '15px');



    JQ('#commentContent').css('font-style', 'italic');
    JQ('#commentContent').css('text-align', 'justify');

    JQ('#commentContent').css('margin', '5px 15px');
    JQ('#commentContent').css('padding', '15px 35px');
    JQ('#commentContent').css('color', 'black');


    // comment form

    JQ('#nameDiv').css('margin', '10px 300px');
    JQ('#commentDiv').css('margin', '10px 300px');


    JQ('#nameInput').css('width', '350px');



    JQ('#commentInput').css('width', '350px');



    JQ('#submitButton').css('margin-left', '430px');
    JQ('#submitButton').css('width', '100px');
    JQ('#submitButton').css('border-radius', '1px');








});



// footer


JQ(document).ready(function () {

    JQ('#footer-container').css('height', '100px');
    JQ("#footer-container").css('background-color', 'white');
    JQ("#footer-container").css('border-top', '1px solid blue');
    JQ('#footer-container').find('p').css('text-align', 'center');
    JQ('#footer-container').find('p').css('color', 'blue');


});



// THEME CHANGE JQ

JQ(document).ready(function () {



    JQ("a").hover(function () {
        JQ(this).css("color", "orange");
    }, function () {
        JQ(this).css("color", "blue");
    });

    // DARK 
    JQ('#themeButtonDark').click(function () {


        JQ("#header-container").css('background-color', '#00264d');
        JQ("#footer-container").css('background-color', '#00264d');
        JQ("body").css('background-image', 'url("backgrounddark.png")');
        JQ('.navigationDiv').find('a').css('color', 'white');
        JQ("#header-container").css('border-bottom', '1px solid white');
        JQ('#themeButtonDark').css('border', '1px solid black');
        JQ('#themeButtonLight').css('border', '1px solid black');
        JQ('#themeButtonDark').css('outline', 'none');
        JQ('#themeButtonLight').css('outline', 'none');
        JQ("#footer-container").css('border-top', '1px solid white');
        JQ('#footer-container').find('p').css('color', 'white');
        JQ('#personalInfo').css('background-color', '#00264d');
        JQ('#personalHeader').css('color', 'white');
        JQ('#photo').css('border', '1px solid white');
        JQ('#personalInfoContent').css('color', 'white');
        JQ('#work').css('background-color', '#00264d');
        JQ('#workHeader').css('color', 'white');
        JQ('#webdev').css('color', 'white');
        JQ('#workContent').css('color', 'white');
        JQ('#educationSection').css('background-color', '#00264d');
        JQ('#educationHeader').css('color', 'white');
        JQ('#educationContent').css('color', 'white');
        JQ('#personalSkillsSection').css('background-color', '#00264d');
        JQ('#personalSkillsHeader').css('color', 'white');
        JQ('#personalSkillsContent').css('color', 'white');
        JQ('#commentSection').css('background-color', '#00264d');
        JQ('#commentHeader').css('color', 'white');
        JQ('#commentContent').css('color', 'white');












        fitLogo.setAttribute('src', 'logo-FIT-white.png');

        JQ("a").hover(function () {
            JQ(this).css("color", "orange");
        }, function () {
            JQ(this).css("color", "white");
        });

    });

    // LIGHT
    JQ('#themeButtonLight').click(function () {

        JQ("#header-container").css('background-color', 'white');
        JQ("#footer-container").css('background-color', 'white');
        JQ('.navigationDiv').find('a').css('color', 'blue');
        JQ("body").css('background-image', 'url("background.png")');
        JQ("#header-container").css('border-bottom', '1px solid blue');
        JQ('#themeButtonDark').css('border', '1px solid #004de6');
        JQ('#themeButtonLight').css('border', '1px solid #004de6');
        JQ('#themeButtonDark').css('outline', 'none');
        JQ('#themeButtonLight').css('outline', 'none');
        JQ("#footer-container").css('border-top', '1px solid blue');
        JQ('#footer-container').find('p').css('color', 'blue');
        JQ('#personalInfo').css('background-color', 'white');
        JQ('#personalHeader').css('color', 'black');
        JQ('#photo').css('border', '1px solid black');
        JQ('#personalInfoContent').css('color', 'black');
        JQ('#work').css('background-color', 'white');
        JQ('#workHeader').css('color', 'black');
        JQ('#webdev').css('color', 'black');
        JQ('#workContent').css('color', 'black');
        JQ('#educationSection').css('background-color', 'white');
        JQ('#educationHeader').css('color', 'black');
        JQ('#educationContent').css('color', 'black');
        JQ('#personalSkillsSection').css('background-color', 'white');
        JQ('#personalSkillsHeader').css('color', 'black');
        JQ('#personalSkillsContent').css('color', 'black');
        JQ('#commentSection').css('background-color', 'white');
        JQ('#commentHeader').css('color', 'black');
        JQ('#commentContent').css('color', 'black');













        fitLogo.setAttribute('src', 'logo-FIT.png');

        JQ("a").hover(function () {
            JQ(this).css("color", "orange");
        }, function () {
            JQ(this).css("color", "blue");
        });


    });



});


// BUTTONS MOUSE OVER 

JQ(document).ready(function () {



    JQ('#themeButtonDark').mouseover(function () {
        JQ('#themeButtonDark').css('cursor', 'pointer');
    });

    JQ('#themeButtonLight').mouseover(function () {
        JQ('#themeButtonLight').css('cursor', 'pointer');
    });


});


// LOGO MOUSEOVER 


JQ(document).ready(function () {



    JQ('#logo').click(function () {
        window.open('https://www.fit.ba');
    });

    JQ('#logo').mouseover(function () {
        JQ('#logo').css('cursor', 'pointer');
    });


});



// SCROLLING TO ELEMENTS

JQ(document).ready(function () {

    // personal info
    JQ('#personal').click(function () {


        JQ('html,body').animate(
            {

                scrollTop: JQ(sectionPersonalHeader).offset().top - 100
            },
            900);

    });

    JQ('#workExp').click(function () {


        JQ('html,body').animate(
            {
                scrollTop: JQ(sectionWorkHeader).offset().top - 100
            },
            900);

    });

    JQ('#education').click(function () {


        JQ('html,body').animate(
            {
                scrollTop: JQ(sectionEducationHeader).offset().top - 100
            },
            900);

    });


    JQ('#personalSkills').click(function () {


        JQ('html,body').animate(
            {
                scrollTop: JQ(sectionPersonalSkillsHeader).offset().top - 100
            },
            900);

    });

});

//navigation menu css

JQ(document).ready(function () {

    JQ('.navigationDiv').find('a').css('float', 'left');
    JQ('.navigationDiv').find('a').css('text-align', 'center');
    JQ('.navigationDiv').find('a').css('padding', '25px 16px');
    JQ('.navigationDiv').find('a').css('font-size', '15px');
    JQ('.navigationDiv').find('a').css('text-decoration', 'none');

});


// Navigation buttons css



JQ(document).ready(function () {

    JQ('#themeButtonDark').css('float', 'right');
    JQ('#themeButtonLight').css('float', 'right');
    JQ('#themeButtonDark').css('border-radius', '5px');
    JQ('#themeButtonLight').css('border-radius', '5px');
    JQ('#themeButtonDark').css('height', '40px');
    JQ('#themeButtonLight').css('height', '40px');
    JQ('#themeButtonDark').css('margin', '14px');
    JQ('#themeButtonLight').css('margin', '14px');
    JQ('#themeButtonDark').css('background-color', '#99c2ff');
    JQ('#themeButtonLight').css('background-color', '#99c2ff');
    JQ('#themeButtonDark').css('border', '1px solid #004de6');
    JQ('#themeButtonLight').css('border', '1px solid #004de6');
    JQ('#themeButtonDark').css('color', 'black');
    JQ('#themeButtonLight').css('color', 'black');
    JQ('#themeButtonDark').css('font-weight', 'bold');
    JQ('#themeButtonLight').css('font-weight', 'bold');
    JQ('#themeButtonDark').css('width', '130px');
    JQ('#themeButtonLight').css('width', '130px');

});



// fixing header position

JQ(document).ready(function () {

    JQ('#header-container').css('position', 'fixed');
    JQ('#header-container').css('width', '100%');
    JQ('#header-container').css('top', '0');

});


// Setting scroll position to top after refreshing the page

JQ(window).on('beforeunload', function () {
    JQ(window).scrollTop(0);
});




// LOCAL STORAGE

var send = function () {

    var name = document.getElementById('nameInput').value;
    var comment = document.getElementById('commentInput').value;

    if (name.length>5 && comment.length > 5)
    localStorage.setItem(name, comment);
    


}


JQ(document).ready(function () {



    JQ('#submitButton').click(function () {
        send();
        document.getElementById("form").reset();

    });
});
