
// Get the buttons from the first page
let startedbtn = document.getElementById("startedbtn");
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let homebtn = document.getElementById("homebtn");
let aboutbtn = document.getElementById("aboutbtn");
let contactbtn = document.getElementById("contactbtn");
let publicationbtn = document.getElementById("publicationbtn");
let roadmapsbtn = document.getElementById("roadmapsbtn");
let questionarybtn = document.getElementById("questionarybtn");
let profilebtn = document.getElementById("profilebtn");
let servicebtn = document.getElementById("servicebtn");
let subjectbtn = document.getElementById("subjectbtn");




let customerserviceexecutivebtn = document.getElementById("customerserviceexecutivebtn");
let apiintegrationspeacialistbtn = document.getElementById("apiintegrationspeacialistbtn");
let cybersecurityspeacialistbtn = document.getElementById("cybersecurityspeacialistbtn");
let appsupportengineerbtn = document.getElementById("appsupportengineerbtn");
let aimlspeacialistbtn= document.getElementById("aimlspeacialistbtn");
let projectmanagerbtn= document.getElementById("projectmanagerbtn");
let dataadministratorbtn = document.getElementById("dataadministratorbtn");
let datascientistbtn= document.getElementById("datascientistbtn");
let graphicdesignerbtn= document.getElementById("graphicdesignerbtn");
let technicalwriterbtn= document.getElementById("technicalwriterbtn");
let helpdeskengineerbtn = document.getElementById("helpdeskengineerbtn");
let informationsecuritybtn = document.getElementById("informationsecuritybtn");
let networkengineerbtn = document.getElementById("networkengineerbtn");
let businessanalystbtn = document.getElementById("businessanalystbtn");
let softwaredeveloperbtn = document.getElementById("softwaredeveloperbtn");
let softwaretesterbtn = document.getElementById("softwaretesterbtn");
let hardwareengineerbtn = document.getElementById("hardwareengineerbtn");

let rdcustomerbtn= document.getElementById("rdcustomerbtn");
let rdapiintegrationspeacialistbtn = document.getElementById("rdapiintegrationspeacialistbtn");
let rdcybersecurityspeacialistbtn = document.getElementById("rdcybersecurityspeacialistbtn");
let rdappsupportengineerbtn = document.getElementById("rdappsupportengineerbtn");
let rdaimlspeacialistbtn = document.getElementById("rdaimlspeacialistbtn");
let rdprojectmanagerbtn = document.getElementById("rdprojectmanagerbtn");
let rddataadministratorbtn = document.getElementById("rddataadministratorbtn");
let rddatascientistbtn = document.getElementById("rddatascientistbtn");
let rdgraphicdesignerbtn = document.getElementById("rdgraphicdesignerbtn");
let rdtechnicalwriterbtn = document.getElementById("rdtechnicalwriterbtn");
let rdhelpdeskengineerbtn = document.getElementById("rdhelpdeskengineerbtn");
let rdinformationsecuritybtn = document.getElementById("rdinformationsecuritybtn");
let rdnetworkengineerbtn = document.getElementById("rdnetworkengineerbtn");
let rdbusinessanalystbtn = document.getElementById("rdbusinessanalystbtn");
let rdsoftwaredeveloperbtn = document.getElementById("rdsoftwaredeveloperbtn");
let rdsoftwaretesterbtn = document.getElementById("rdsoftwaretesterbtn");
let rdhardwareengineerbtn= document.getElementById("rdhardwareengineerbtn");



// Attach event listeners to the buttons
if (startedbtn) {
  // Not called
  startedbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToSignup();
  });
}
if (signupbtn) {
// Not called
signupbtn.addEventListener('click', () => {
  goToSignin();
  alert('You clicked the login here button');
  
});
}

if (signinbtn) {
  // Not called
  signinbtn.addEventListener('click', () => {
    goTohome();
    alert('You clicked the signin button');
    
  });
}
if (homebtn) {
  // Not called
  homebtn.addEventListener('click', () => {
    goTohome();
    // alert('You clicked the home button');
    
  });
}
  if (aboutbtn) {
    // Not called
aboutbtn.addEventListener('click', () => {
      goToabout();
      // alert('You clicked the about button');
      
    });
  }
  if (contactbtn) {
    // Not called
    contactbtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goTocontact();
    });
  }
  if (publicationbtn) {
    // Not called
    publicationbtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goTopublication();
    });
  }
  if (roadmapsbtn) {
    // Not called
    roadmapsbtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goToroadmaps();
    });
  }
  if (questionarybtn) {
    // Not called
    questionarybtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goToquestionary();
    });
  }
  if (profilebtn) {
    // Not called
    profilebtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goToprofile();
    });
  }
  if (servicebtn) {
    // Not called
    servicebtn.addEventListener('click', () => {
      // alert('You clicked the button');
      goToservice();
    });
  }
if(subjectbtn){
  subjectbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToSubject();
});
}
////////////////////////////////////////////////////////////////subject\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if (customerserviceexecutivebtn) {
  // Not called
  customerserviceexecutivebtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTocustomer();
  });
}

if (apiintegrationspeacialistbtn) {
  // Not called
  apiintegrationspeacialistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToapiintegration();
  });
}
if ( cybersecurityspeacialistbtn) {
  // Not called
  cybersecurityspeacialistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTocyber();
  });
}
if (appsupportengineerbtn) {
  // Not called
  appsupportengineerbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goToappsupport();
  });
}

if (aimlspeacialistbtn) {
  // Not called
  aimlspeacialistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToaiml();
  });
}
if (projectmanagerbtn) {
  // Not called
  projectmanagerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToprojectmanager();
  });
}


if (dataadministratorbtn) {
  // Not called
  dataadministratorbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTodataadmin();
  });
}
if (datascientistbtn) {
  // Not called
  datascientistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTodatascience();
  });
}
if (graphicdesignerbtn) {
  // Not called
  graphicdesignerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTographics();
  });
}
if (technicalwriterbtn) {
  // Not called
  technicalwriterbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTotechnical();
  });
}
if (helpdeskengineerbtn) {
  // Not called
  helpdeskengineerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTohelp();
  });
}
if (informationsecuritybtn) {
  // Not called
  informationsecuritybtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goToinfosecure();
  });
}
if (networkengineerbtn ) {
  // Not called
  networkengineerbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTonetwork();
  });
}


if (businessanalystbtn) {
  // Not called
  businessanalystbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTobusiness();
  });
}
if (softwaredeveloperbtn ) {
  // Not called
  softwaredeveloperbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTosoftwaredeveloper();
  });
}
if (softwaretesterbtn) {
  // Not called
  softwaretesterbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTosoftwaretester();
  });
}
if (hardwareengineerbtn ) {
  // Not called
  hardwareengineerbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTohardwareengineer();
  });
}


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\roadmap \



if (rdcustomerbtn) {
  // Not called
  rdcustomerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordcustomer();
  });
}
if (rdapiintegrationspeacialistbtn) {
  // Not called
  rdapiintegrationspeacialistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordapi();
  });
}
if (rdcybersecurityspeacialistbtn ) {
  // Not called
  rdcybersecurityspeacialistbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTordcyber();
  });
}


if ( rdappsupportengineerbtn ) {
  // Not called
  rdappsupportengineerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordapp();
  });
}
if (rdaimlspeacialistbtn ) {
  // Not called
  rdaimlspeacialistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordaiml();
  });
}
if (rdprojectmanagerbtn) {
  // Not called
  rdprojectmanagerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordprojectmanager();
  });
}
if ( rddataadministratorbtn) {
  // Not called
  rddataadministratorbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTorddataadmin();
  });
}
if (rddatascientistbtn) {
  // Not called
  rddatascientistbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTorddatascience();
  });
}
if (rdgraphicdesignerbtn ) {
  // Not called
  rdgraphicdesignerbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTordgraphic();
  });
}
if ( rdtechnicalwriterbtn) {
  // Not called
  rdtechnicalwriterbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordtechnical();
  });
}


if (rdhelpdeskengineerbtn) {
  // Not called
  rdhelpdeskengineerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordhelp();
  });
}
if (rdinformationsecuritybtn) {
  // Not called
  rdinformationsecuritybtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordinfosecure();
  });
}
if (rdnetworkengineerbtn ) {
  // Not called
  rdnetworkengineerbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTordnetwork();
  });
}
if (rdbusinessanalystbtn) {
  // Not called
  rdbusinessanalystbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordbusiness();
  });
}
if (rdsoftwaredeveloperbtn) {
  // Not called
  rdsoftwaredeveloperbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordsoftwaredeveloper();
  });
}
if (rdsoftwaretesterbtn ) {
  // Not called
  rdsoftwaretesterbtn .addEventListener('click', () => {
    // alert('You clicked the button');
    goTordsoftwaretester();
  });
}
if (rdhardwareengineerbtn) {
  // Not called
  rdhardwareengineerbtn.addEventListener('click', () => {
    // alert('You clicked the button');
    goTordharware();
  });
}



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\home page \\\\\\\\\\\\\\\\\\\\\\\\\\

function goToSignup() {
    window.location.href = "signup.html";
}
function goToSignin() {
    window.location.href = "signin.html";
}

function goTohome() {
    window.location.href = "Home.html";
}
function goToabout() {
    window.location.href = "about.html";
}
function goToprofile() {
  window.location.href = "profile.html";
}
function goToquestionary() {
  window.location.href = "questionary.html";
}
function goToroadmaps() {
  window.location.href = "roadmaps.html";
}
function goTopublication() {
  window.location.href = "publication.html";
}
function goTocontact() {
  window.location.href = "contact.html";
}
function goToservice() {
  window.location.href = "services.html";
}
function goToSubject() {
  window.location.href = "subjects.html";
}



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\subject files\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function goTocustomer() {
  window.location.href = "customerservicesexecutive.html";
}
function  goToapiintegration() {
  window.location.href = "apiintegrationspeacialist.html";
}
function goTocyber() {
  window.location.href = "cybersecurityspeacialist.html";
}
function  goToappsupport() {
  window.location.href = "appsupportengineer.html";
}
function   goToaiml() {
  window.location.href = "aimlspeacialist.html";
}

function goToprojectmanager() {
  window.location.href = "projectmanager.html";
}
function goTodataadmin(){
  window.location.href = "dataadministrator.html";
}
function goTodatascience() {
  window.location.href = "datascientist.html";
}
function goTographics(){
  window.location.href = "graphicdesigner.html";
}
function     goTotechnical() {
  window.location.href = "technicalwriter.html";
}
function  goTohelp() {
  window.location.href = "helpdeskengineer.html";
}
function    goToinfosecure() {
  window.location.href = "informationsecurity.html";
}
function goTonetwork(){
  window.location.href = "networkengineer.html";
}
function goTobusiness() {
  window.location.href = "Businessanalyst.html";
}
function  goTosoftwaredeveloper() {
  window.location.href = "softwaredeveloper.html";
}
function goTosoftwaretester() {
  window.location.href = "softwaretester.html";
}

function  goTohardwareengineer() {
  window.location.href = "hardwareengineer.html";
}




// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\roadmap files\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function goTordcustomer() {
  window.location.href = "rdcustomerserviceexecutive.html";
}
function  goTordapi() {
  window.location.href = "RDAPI.html";
}
function goTordcyber() {
  window.location.href = "RDCYBER.html";
}
function  goTordapp() {
  window.location.href = "RDAPP.html";
}
function   goTordaiml() {
  window.location.href = "rdaiml.html";
}

function goTordprojectmanager() {
  window.location.href = "RDproject.html";
}
function goTorddataadmin(){
  window.location.href = "rddataadministrator.html";
}
function goTorddatascience() {
  window.location.href = "RDDATASCIENTIST.html";
}
function goTordgraphic(){
  window.location.href = "RDgraphicdesigning.html";
}
function     goTordtechnical() {
  window.location.href = "RDtechnicalwriter.html";
}
function  goTordhelp() {
  window.location.href = "RDhlep desk.html";
}
function    goTordinfosecure() {
  window.location.href = "RDINFORMATION.html";
}
function goTordnetwork(){
  window.location.href = "rdnetwork.html";
}
function goTordbusiness() {
  window.location.href = "RDbusiness.html";
}
function  goTordsoftwaredeveloper() {
  window.location.href = "RDSOFTDEV.html";
}
function goTordsoftwaretester() {
  window.location.href = "RDsofttest.html";
}

function  goTordharware() {
  window.location.href = "RDhardwareengi.html";
}
