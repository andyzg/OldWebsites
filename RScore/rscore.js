$(document).ready(function(){

var list = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
var count=0;

$("body #inputbar #add").click(function(){
if (count<8)
{
	var highschool = $('#inputbar #highschool').val();
	var grade = $('#inputbar #grade').val();
	var standarddev = $('#inputbar #dev').val();
	var average = $('#inputbar #average').val();
	var credit = $('#inputbar #credit').val();

	var a=-1.786 + 5 * (grade-average)/standarddev + highschool*0.357;
	var rscore = a.toFixed(2);
	if (!isNaN(rscore)&&!isNaN(credit))
	{
		$("body #gradelist #list").append("<p>"+rscore+"</p>");
		list[count][0]=rscore;
		list[count][1]=credit;
		count++;
	}
}
});

$("body #gradelist #calculate").click(function(){
$(".university").remove();
$("#score").remove();
var sumpoint=0;
var sumcredit=0;

for (var a=0;a<9;a++)
{
	sumpoint+=(parseInt(list[a][0])*parseInt(list[a][1]));
	sumcredit+=parseInt(list[a][1]);
}
var result=sumpoint.valueOf()/sumcredit.valueOf();
var rscore=result.toFixed(2);

var highschool = $('#inputbar #highschool').val();
var grade = $('#inputbar #grade').val();
var standarddev = $('#inputbar #dev').val();
var average = $('#inputbar #average').val();

// Mcgill
var McEnvironmental = [["B.Sc.(Ag.Env.Sc.) program",24],["Bioresource Engineering (B.Eng.(Bioresource)).",24],["Concurrent B.Sc. (B.Sc.(F.Sc.)/B.Sc.(Nutr.Sc.))",24],["Food Science (B.Sc.(F.Sc.))",24]];
var McArchitecture = [["School of (B.Sc.(Arch.)) + Portfolio",29]];
var McArts = [["(B.A)",27.4]];
var McAnS = [["(B.A.&Sc.)",27.4]];
var McDentist = [["Lowest RScore interviewed", 33.22]];
var McNutrition = [["Dietetics",30],["Nutrition",28]];
var McEducation = [["Kindergarten/Elementary Education",25.3],["Physical Education",25.3],["Secondary Education",26],["TESL Teaching English as a Second Language",24],["Kinesiology (B.Sc.(Kinesiology))",26.5]];
var McEngineer = [["Chemical Engineering",28.4],["Civil Engineering",27.5],["Electrical, Computer & Software Engineering",27.5],["Mechanical Engineering",29],["Mining & Materials Engineering",27]];
var McLaw = [["Lowest RScore Interviewed",30.8]];
var McManagement = [["(B.Com.)",28.7]];
var McMedecine = [["Lowest RScore Interviewed", 31.87]];
var McMusic = [["Composition, Faculty, History, Theory (B.Mus.)",0.80],["Performance (B.Mus.)",0.70],["B.Mus./B.Ed",0.80]];
var McNursing = [["Lowest RScore Considered",26.3]];
var McTherapy = [["Occupational Therapy (B.Sc.(Occ.Ther.))",29],["Physical Therapy (B.Sc.(Phys.Ther.))",30.3]];
var McScience = [["Biological, Biomedical and Life Sciences Group",28],["Microbiology and Immunology",28],["Neuroscience",32.5],["Physical, Earth, Math and Computer Sciences Group",27]];
var McSocial = [["(B.S.W.) + Resume and personal statement",24]];

// UdeM
var MDesign = [["Architecture",30.375],["Landscape Architecture",27],["Industrial Design",23],["Urbanism",23],["Interior Design",26]];
var MArts = [["Communications and Politics",23],["Criminology",27],["Scenario Writer and Literary Writer",20],["Industrial Relations",24.6],["Ethics and Rights",25],["Cinematography",20],["Social Science",21],["Linguistics and Psychology",24],["Psychoeducation",27],["Psychology",25],["Political Science",24],["Communications",25],["Translation",21]];
var MDentistry = [["Dentistry",33.05]];
var MEducation = [["Preschool and Elementary School Education",24],["Health Education",27],["Secondary Social Education",24],["Secondary Mathematics Education",24],["Secondary Science Education",25],["Secondary French Education",24],["Secondary French Education Second Language",23],["Academic Adaptation Education",23]];
var MEngineer = [["Aerospace Engineering",28],["Biomedical Engineering",31],["Chemical Engineering",26],["Civil Engineering",26],["Computer Engineering",26],["Electrical Engineering",26],["Geological Engineering",26],["Industrial Engineering",26],["Material Engineering",26],["Mechanical Engineering",26],["Mining Engineering"],["Physical Engineering",26],["Software Engineering",26]];
var MKinesiology = [["Kinesiology",27.603]];
var MLaw = [["Law",30.7]];
var MMedicine = [["Biochemistry",26],["Biomedical Sciences",29],["Biopharmaceutical Sciences",28],["Biology",26],["Audiology",30],["Medecine School; Lowest Interviewed",33.306],["Speech-language pathology",32]];
var MNursing = [["Nursing",25]];
var MOptometry = [["Optometry School",32.8]];
var MPharmacy = [["Pharmacy",33]];
var MReligion = [["Religion and Ethics Education",23]];
var MScience =[["Bioinformatics",25],["Ergotherapy",30],["Computer Science",25],["Applied Computer Science",21],["Physiotherapy",32],["Physics and Computer Science",25],];
var MSocial = [["Security and Police Education",27],["Social Service",28]];
var MVet = [["Veterinary School",32]];

// Concordia
var CJMSB = [["Accountancy",26],["Administration",26],["Business Technology Management",26],["Economics",26],["Finance",26],["Human Resource Management",26],["Management",26],["Marketing",26],["Supply Chains Operations Management",26]];
var CAnS = [["Actuarial Mathematics",28],["Actuarial Mathematics/Finance",30],["Mathematics and Computational Finance",29],["Mathematics and Statistics",0],["Mathematics and Statistics and Computer Applications",24],["Psychology",25],["Pure and Applied Mathematics",22],["Statistics",22]];
var CArtsA = [["Anthropology and/or Sociology ",20],["Canadian Irish Studies",0],["Child Studies",24],["Classical Civilization",28],["Classical Languages and Literature",28],["Communication & Cultural Studies",20],["Community, Public Affairs and Policy Studies",25],["Creative Writing",20]];
var CArtsB = [["Early Childhood and Elementary Education",24],["Economics",24],["English and History",20],["English and History",20],["English Literature",28],["Etudes Francaises",0],["History",20],["Human Environment",0],["Human Relations",0],["Journalism",25]];
var CArtsC = [["Judaic Studies",0],["Leisure Sciences",0],["Linguistics",0],["Philosophy",0],["Political Science",20.5],["Public History",28],["Religion",0],["Sociology",20],["Southern Asia Studies",0],["Theological Studies",0],["Therapeutical Recreation",0],["Traduction",0],["Urban Planning",25],["Urban Studies",0],["Western Society and Culture",0],["Womens Studies",0]];
var CFAA = [["Art Education - Visual Arts",0],["Art History",0],["Art History and Film Studies",0],["Art History and Studio Art",0],["Ceramics",0],["Computation Arts",0],["Contemporary Dance",0],["Design",0],["Design for Theatres",0],["Electroaccoustic Studies",0],["Fibres and Material Practices",0],["Film Animation",0],["Film Production",0],["Film Studies",0]];
var CFAB = [["Intermedia/Cyberarts",0],["Jazz Studies",0],["Music",0],["Music Composition",0],["Music Performance Studies",0],["Photography",0],["Playwriting",0],["Print Media",0],["Sculpture",0],["Studio Art",0],["Theatre",0],["Theatre and Development",0],["Theatre Performance",0]];
var CSci = [["Athletic Therapy",25],["Behavioural Neuroscience",25],["Biochemistry",20],["Biology",20],["Cell and Molecular Biology",20],["Chemistry",20],["Clinical Exercise",25],["Ecology",20],["Environmental Geography",0],["Environmental Science",0],["Exercise Science",25],["Physics",0]];
var CEng = [["Building Engineering",24],["Civil Engineering",24],["Computer Applications",24],["Computer Engineering",24],["Electrical Engineering",24],["Industrial Engineering",24],["Mechanical Engineering",24],["Software Engineering",24],["Web Services and Applications",24]];

// Checks the value of the rscore, goes through each data and displays those above rscore
if (rscore>=24)
{
$("body").append("<div class='university' id='mcgill' style='background-color:#0064C9'>McGill University<hr><div id='accordion'></div></div>");
if (rscore>24)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcenvironment'><h1>Faculty of Agriculture/Environment</h1><p></p></div>");
	for (var a=0;a<4;a++)
	{
		if (rscore>=McEnvironmental[a][1])
			$("body #mcgill #mcenvironment p").append("<br>"+McEnvironmental[a][0]+"&nbsp;"+"<h6>"+McEnvironmental[a][1]+"</h6>");
	}
}

if (rscore>29)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcarchitecture'><h1>Faculty of Architecture</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McArchitecture[a][1])
			$("body #mcgill #mcarchitecture p").append("<br>"+McArchitecture[a][0]+"&nbsp;"+"<h6>"+McArchitecture[a][1]+"</h6>");
	}
}

if (rscore>27.4)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcart'><h1>Faculty of Arts</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McArts[a][1])
			$("body #mcgill #mcart p").append("<br>"+McArts[a][0]+"&nbsp;"+"<h6>"+McArts[a][1]+"</h6>");
	}
}

if (rscore>27.4)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcart'><h1>Faculty of Arts and Science</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McAnS[a][1])
			$("body #mcgill #mcart p").append("<br>"+McAnS[a][0]+"&nbsp;"+"<h6>"+McAnS[a][1]+"</h6>");
	}
}

if (rscore>33.22)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcdentist'><h1>Faculty of Dentistry</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McDentist[a][1])
			$("body #mcgill #mcdentist p").append("<br>"+McDentist[a][0]+"&nbsp;"+"<h6>"+McDentist[a][1]+"</h6>");
	}
}

if (rscore>28)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcNutrition'><h1>Faculty of Dietics and Nutrition</h1><p></p></div>");
	for (var a=0;a<2;a++)
	{
		if (rscore>=McNutrition[a][1])
			$("body #mcgill #mcNutrition p").append("<br>"+McNutrition[a][0]+"&nbsp;"+"<h6>"+McNutrition[a][1]+"</h6>");
	}
}

if (rscore>=24)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mceducation'><h1>Faculty of Education</h1><p></p></div>");
	for (var a=0;a<5;a++)
	{
		if (rscore>=McEducation[a][1])
			$("body #mcgill #mceducation p").append("<br>"+McEducation[a][0]+"&nbsp;"+"<h6>"+McEducation[a][1]+"</h6>");
	}
}

if (rscore>=27)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcengineer'><h1>Faculty of Engineering</h1><p></p></div>");
	for (var a=0;a<5;a++)
	{
		if (rscore>=McEngineer[a][1])
			$("body #mcgill #mcengineer p").append("<br>"+McEngineer[a][0]+"&nbsp;"+"<h6>"+McEngineer[a][1]+"</h6>");
	}
}

if (rscore>=30.8)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mclaw'><h1>Faculty of Law</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McLaw[a][1])
			$("body #mcgill #mclaw p").append("<br>"+McLaw[a][0]+"&nbsp;"+"<h6>"+McLaw[a][1]+"</h6>");
	}
}

if (rscore>=28.7)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcmanagement'><h1>Faculty of Management</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McManagement[a][1])
			$("body #mcgill #mcmanagement p").append("<br>"+McManagement[a][0]+"&nbsp;"+"<h6>"+McManagement[a][1]+"</h6>");
	}
}

if (rscore>=31.87)
{	
	$("body #mcgill #accordion").append("<div class='faculty' id='mcmedecine'><h1>Faculty of Medecine</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McMedecine[a][1])
			$("body #mcgill #mcmedecine p").append("<br>"+McMedecine[a][0]+"&nbsp;"+"<h6>"+McMedecine[a][1]+"</h6>");
	}
}

if (rscore>=0)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcmusic'><h1>Faculty of Music</h1><p></p></div>");
	for (var a=0;a<2;a++)
	{
		if (rscore>=McMusic[a][1])
			$("body #mcgill #mcmusic p").append("<br>"+McMusic[a][0]+"&nbsp;"+"<h6>"+McMusic[a][1]+"</h6>");
	}
}

if (rscore>=26)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcnursing'><h1>Faculty of Nursing</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McNursing[a][1])
			$("body #mcgill #mcnursing p").append("<br>"+McNursing[a][0]+"&nbsp;"+"<h6>"+McNursing[a][1]+"</h6>");
	}
}

if (rscore>=29)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mctherapy'><h1>Faculty of Therapy</h1><p></p></div>");
	for (var a=0;a<2;a++)
	{
		if (rscore>=McTherapy[a][1])
			$("body #mcgill #mctherapy p").append("<br>"+McTherapy[a][0]+"&nbsp;"+"<h6>"+McTherapy[a][1]+"</h6>");
	}
}

if (rscore>=27)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcscience'><h1>Faculty of Science</h1><p></p></div>");
	for (var a=0;a<4;a++)
	{
		if (rscore>=McScience[a][1])
			$("body #mcgill #mcscience p").append("<br>"+McScience[a][0]+"&nbsp;"+"<h6>"+McScience[a][1]+"</h6>");
	}
}

if (rscore>=24)
{
	$("body #mcgill #accordion").append("<div class='faculty' id='mcsocial'><h1>Faculty of Social</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=McSocial[a][1])
			$("body #mcgill #mcsocial p").append("<br>"+McSocial[a][0]+"&nbsp;"+"<h6>"+McSocial[a][1]+"</h6>");
	}
}

}

// UdeM
if (rscore>=20)
{
	$("body").append("<div class='university' id='udem' style='background-color:#0064C9'>Universite de Montreal<hr><div id='accordion'></div></div>");

if (rscore>=20)
{
	$("body #udem #accordion").append("<div class='faculty' id='mart'><h1>Faculty of Arts</h1><p></p></div>");
	for (var a=0;a<13;a++)
	{
		if (rscore>=MArts[a][1])
			$("body #udem #mart p").append("<br>"+MArts[a][0]+"&nbsp;"+"<h6>"+MArts[a][1]+"</h6>");
	}
}

if (rscore>=33)
{
	$("body #udem #accordion").append("<div class='faculty' id='mdentist'><h1>Faculty of Dentistry</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MArts[a][1])
			$("body #udem #mdentist p").append("<br>"+MDentistry[a][0]+"&nbsp;"+"<h6>"+MDentistry[a][1]+"</h6>");
	}
}

if (rscore>=23)
{
	$("body #udem #accordion").append("<div class='faculty' id='mdesign'><h1>Faculty of Design</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MDesign[a][1])
			$("body #udem #mdesign p").append("<br>"+MDesign[a][0]+"&nbsp;"+"<h6>"+MDesign[a][1]+"</h6>");
	}
}

if (rscore>=23)
{
	$("body #udem #accordion").append("<div class='faculty' id='meducation'><h1>Faculty of Education</h1><p></p></div>");
	for (var a=0;a<8;a++)
	{
		if (rscore>=MEducation[a][1])
			$("body #udem #meducation p").append("<br>"+MEducation[a][0]+"&nbsp;"+"<h6>"+MEducation[a][1]+"</h6>");
	}
}

if (rscore>=26)
{
	$("body #udem #accordion").append("<div class='faculty' id='meng'><h1>Polytechnique University</h1><p></p></div>");
	for (var a=0;a<13;a++)
	{
		if (rscore>=MEngineer[a][1])
			$("body #udem #meng p").append("<br>"+MEngineer[a][0]+"&nbsp;"+"<h6>"+MEngineer[a][1]+"</h6>");
	}
}

if (rscore>=27.6)
{
	$("body #udem #accordion").append("<div class='faculty' id='mkinesiology'><h1>Faculty of Kinesiology</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MKinesiology[a][1])
			$("body #udem #mkinesiology p").append("<br>"+MKinesiology[a][0]+"&nbsp;"+"<h6>"+MKinesiology[a][1]+"</h6>");
	}
}

if (rscore>=30.7)
{
	$("body #udem #accordion").append("<div class='faculty' id='mlaw'><h1>Faculty of Law</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MLaw[a][1])
			$("body #udem #mlaw p").append("<br>"+MLaw[a][0]+"&nbsp;"+"<h6>"+MLaw[a][1]+"</h6>");
	}
}

if (rscore>=26)
{
	$("body #udem #accordion").append("<div class='faculty' id='mmedicine'><h1>Faculty of Medecine</h1><p></p></div>");
	for (var a=0;a<7;a++)
	{
		if (rscore>=MMedicine[a][1])
			$("body #udem #mmedicine p").append("<br>"+MMedicine[a][0]+"&nbsp;"+"<h6>"+MMedicine[a][1]+"</h6>");
	}
}

if (rscore>=25)
{
	$("body #udem #accordion").append("<div class='faculty' id='mnursing'><h1>Faculty of Nursing</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MNursing[a][1])
			$("body #udem #mnursing p").append("<br>"+MNursing[a][0]+"&nbsp;"+"<h6>"+MNursing[a][1]+"</h6>");
	}
}


if (rscore>=32.8)
{
	$("body #udem #accordion").append("<div class='faculty' id='moptometry'><h1>Optometry School</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MMedicine[a][1])
			$("body #udem #moptometry p").append("<br>"+MOptometry[a][0]+"&nbsp;"+"<h6>"+MOptometry[a][1]+"</h6>");
	}
}

if (rscore>=33)
{
	$("body #udem #accordion").append("<div class='faculty' id='mpharmacy'><h1>Faculty of Pharmacy</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MPharmacy[a][1])
			$("body #udem #mpharmacy p").append("<br>"+MPharmacy[a][0]+"&nbsp;"+"<h6>"+MPharmacy[a][1]+"</h6>");
	}
}

if (rscore>=23)
{
	$("body #udem #accordion").append("<div class='faculty' id='mreligion'><h1>Faculty of Religion</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MReligion[a][1])
			$("body #udem #mreligion p").append("<br>"+MReligion[a][0]+"&nbsp;"+"<h6>"+MReligion[a][1]+"</h6>");
	}
}

if (rscore>=21)
{
	$("body #udem #accordion").append("<div class='faculty' id='mscience'><h1>Faculty of Science</h1><p></p></div>");
	for (var a=0;a<6;a++)
	{
		if (rscore>=MScience[a][1])
			$("body #udem #mscience p").append("<br>"+MScience[a][0]+"&nbsp;"+"<h6>"+MScience[a][1]+"</h6>");
	}
}

if (rscore>=26)
{
	$("body #udem #accordion").append("<div class='faculty' id='msocial'><h1>Faculty of Social Work</h1><p></p></div>");
	for (var a=0;a<2;a++)
	{
		if (rscore>=MSocial[a][1])
			$("body #udem #msocial p").append("<br>"+MSocial[a][0]+"&nbsp;"+"<h6>"+MSocial[a][1]+"</h6>");
	}
}

if (rscore>=32)
{
	$("body #udem #accordion").append("<div class='faculty' id='mvet'><h1>Veterinary School</h1><p></p></div>");
	for (var a=0;a<1;a++)
	{
		if (rscore>=MVet[a][1])
			$("body #udem #mvet p").append("<br>"+MVet[a][0]+"&nbsp;"+"<h6>"+MVet[a][1]+"</h6>");
	}
}
}

// Concordia University
if (rscore>=19)
{
	$("body").append("<div class='university' id='conc' style='background-color:#0064C9'>Concordia University<hr><div id='accordion'></div></div>");

if (rscore>=26)
{
$("body #conc #accordion").append("<div class='faculty' id='cjmsb'><h1>John Molson Business School</h1><p></p></div>");
	for (var a=0;a<8;a++)
	{
		if (CSci[a][1]==0)
			$("body #conc #cjmsb p").append("<br>"+CJMSB[a][0]+"&nbsp;"+"<h6>DEC</h6>");
		else if (rscore>=CJMSB[a][1])
			$("body #conc #cjmsb p").append("<br>"+CJMSB[a][0]+"&nbsp;"+"<h6>"+CJMSB[a][1]+"</h6>");
	}
}

$("body #conc #accordion").append("<div class='faculty' id='cans'><h1>Arts and Science</h1><p></p></div>");
for (var a=0;a<8;a++)
{
	if (CAnS[a][1]==0)
		$("body #conc #cans p").append("<br>"+CAnS[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CAnS[a][1])
		$("body #conc #cans p").append("<br>"+CAnS[a][0]+"&nbsp;"+"<h6>"+CAnS[a][1]+"</h6>");
}



$("body #conc #accordion").append("<div class='faculty' id='cartsa'><h1>Arts Part A</h1><p></p></div>");
for (var a=0;a<CArtsA.length;a++)
{
	if (CArtsA[a][1]==0)
		$("body #conc #cartsa p").append("<br>"+CArtsA[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CArtsA[a][1])
		$("body #conc #cartsa p").append("<br>"+CArtsA[a][0]+"&nbsp;"+"<h6>"+CArtsA[a][1]+"</h6>");
}


$("body #conc #accordion").append("<br>"+"<div class='faculty' id='cartsb'><h1>Arts Part B</h1><p></p></div>");
for (var a=0;a<CArtsB.length;a++)
{
	if (CArtsB[a][1]==0)
		$("body #conc #cartsb p").append("<br>"+CArtsB[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CArtsB[a][1])
		$("body #conc #cartsb p").append("<br>"+CArtsB[a][0]+"&nbsp;"+"<h6>"+CArtsB[a][1]+"</h6>");
}


$("body #conc #accordion").append("<div class='faculty' id='cartsc'><h1>Arts Part C</h1><p></p></div>");
for (var a=0;a<CArtsC.length;a++)
{
	if (CArtsC[a][1]==0)
		$("body #conc #cartsc p").append("<br>"+CArtsC[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CArtsC[a][1])
		$("body #conc #cartsc p").append("<br>"+CArtsC[a][0]+"&nbsp;"+"<h6>"+CArtsC[a][1]+"</h6>");
}

$("body #conc #accordion").append("<div class='faculty' id='cfaa'><h1>Fine Arts Part B</h1><p></p></div>");
for (var a=0;a<CFAA.length;a++)
{
	if (CFAA[a][1]==0)
		$("body #conc #cfaa p").append("<br>"+CFAA[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CFAA[a][1])
		$("body #conc #cfaa p").append("<br>"+CFAA[a][0]+"&nbsp;"+"<h6>"+CFAA[a][1]+"</h6>");
}


$("body #conc #accordion").append("<div class='faculty' id='cfab'><h1>Fine Arts Part B</h1><p></p></div>");
for (var a=0;a<CFAB.length;a++)
{
	if (CFAB[a][1]==0)
		$("body #conc #cfab p").append("<br>"+CFAB[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CFAB[a][1])
		$("body #conc #cfab p").append("<br>"+CFAB[a][0]+"&nbsp;"+"<h6>"+CFAB[a][1]+"</h6>");
}

$("body #conc #accordion").append("<div class='faculty' id='csci'><h1>Faculty of Science</h1><p></p></div>");
for (var a=0;a<CSci.length;a++)
{
	if (CSci[a][1]==0)
		$("body #conc #csci p").append("<br>"+CSci[a][0]+"&nbsp;"+"<h6>DEC</h6>");
	else if (rscore>=CSci[a][1])
		$("body #conc #csci p").append("<br>"+CSci[a][0]+"&nbsp;"+"<h6>"+CSci[a][1]+"</h6>");
}


if (rscore>=24)
{
	$("body #conc #accordion").append("<div class='faculty' id='ceng'><h1>Faculty of Computer Science and Engineering</h1><p></p></div>");
	for (var a=0;a<CEng.length;a++)
	{
		if (rscore>=CEng[a][1])
			$("body #conc #ceng p").append("<br>"+CEng[a][0]+"&nbsp;"+"<h6>"+CEng[a][1]+"</h6>");
	}
}
}
$(function() {
$( "#mcgill #accordion" ).accordion({header:'h1'});
$( "#udem #accordion" ).accordion({header:'h1'});
$( "#conc #accordion" ).accordion({header:'h1'});
});

$('body #rscore').append("<p id='score'>"+rscore+"</p>");
});
function calculateRScore(a,b,c,d)
{
	var rscore = -1.786 + 5 * (b-d)/c + a*0.357;
	return rscore;
}
});