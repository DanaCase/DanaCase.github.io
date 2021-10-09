webpackJsonp([0],[,function(t,e,n){var i=n(0)(n(19),n(47),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(25)}var s=n(0)(n(21),n(49),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(27)}var s=n(0)(n(6),n(51),i,null,null);t.exports=s.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=n(3),o=n.n(s);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),s=n.n(i);e.default={name:"app",components:{layout:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact"}},function(t,e,n){"use strict";function i(t,e){function n(t){return t.map(function(t){return t.join(",")}).join(" ")}var i=.89*t,s=.78*e,o=(t-i)/2,a=(e-s)/2,r=[[s/2+a,o],[s+a,.25*i+o],[s+a,.75*i+o],[s/2+a,i+o],[a,.75*i+o],[a,.25*i+o]];this.pathString=n(r);var l=[[r[2][0],r[2][1]-10],[r[3][0],r[3][1]-10],[r[4][0],r[4][1]-10]];this.bottomPathString=n(l);var c=[[r[5][0],r[5][1]+10],[r[0][0],r[0][1]+10],[r[1][0],r[1][1]+10]];this.topPathString=n(c),this.viewBox=[-2.5,-2.5,t,e].join(","),this.height=t,this.width=e}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hexagon",data:function(){return{points:new i(300,300*Math.sqrt(3)/2),strokeWidth:4.5,accentStrokeWidth:4,svgColor:"#555"}},computed:{firstY:function(){return this.points.height/2-this.points.height/15},lastY:function(){return this.firstY+this.fontSizeFirst},fontSizeFirst:function(){return.18*this.points.height},fontSizeLast:function(){return.75*this.fontSizeFirst}},mounted:function(){var t=window.getComputedStyle(this.$el.parentElement,null).getPropertyValue("width").slice(0,-2);this.points=new i(t,t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(33),s=n.n(i),o=n(32),a=n.n(o),r=n(42),l=n.n(r),c=n(35),u=n.n(c),d=n(36),p=n.n(d),f=n(43),m=n.n(f);e.default={name:"layout",components:{hexagon:s.a,contact:a.a,education:u.a,experience:p.a,publications:m.a,internetPresence:l.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n.n(i);e.default={name:"education",components:{resumeSection:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(63),s=n.n(i),o=n(1),a=n.n(o),r=n(41),l=n.n(r),c=n(40),u=n.n(c);e.default={name:"experience",data:function(){return{positionSections:s.a}},components:{resumeSection:a.a,experienceSection:l.a,experienceResearchSection:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),s=n.n(i);e.default={name:"experienceCompany",props:["position"],components:{experiencePosition:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n.n(i);e.default={name:"experiencePosition",props:["title"],components:{technology:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n.n(i);e.default={name:"experienceResarchPosition",props:["position"],components:{technology:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(39),s=n.n(i);e.default={name:"experience",props:["sectionTitle","positions"],components:{experienceResarchPosition:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),s=n.n(i);e.default={name:"experience",props:["sectionTitle","positions"],components:{experienceCompany:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n.n(i);e.default={name:"internetPresence",data:function(){return{links:[{link:"http://danacase.github.io",display:"danacase.github.io",icon:"fa fa-globe fa-2x"},{link:"https://github.com/DanaCase",display:"DanaCase",icon:"fa fa-github fa-2x"},{link:"https://www.linkedin.com/in/dana-l-case/",display:"dana-l-case",icon:"fa fa-linkedin fa-2x"},{link:"https://stackoverflow.com/users/3637942/dana-case",display:"dana case",icon:"fa fa-stack-overflow fa-2x"}]}},components:{resumeSection:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n.n(i),o=n(64),a=n.n(o);e.default={name:"publications",data:function(){return a.a},components:{resumeSection:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),s=n.n(i);e.default={name:"resume-section",props:["title"],components:{sectionTitle:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"technology",props:["technologyName"]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function i(t){n(22)}var s=n(0)(n(7),n(45),i,null,null);t.exports=s.exports},function(t,e,n){var i=n(0)(n(8),n(54),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(23)}var s=n(0)(n(9),n(46),i,null,null);t.exports=s.exports},function(t,e,n){var i=n(0)(n(10),n(55),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(11),n(52),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(28)}var s=n(0)(n(12),n(53),i,"data-v-5af6e9cc",null);t.exports=s.exports},function(t,e,n){function i(t){n(30)}var s=n(0)(n(13),n(57),i,"data-v-995d962c",null);t.exports=s.exports},function(t,e,n){function i(t){n(26)}var s=n(0)(n(14),n(50),i,"data-v-36b3fdb6",null);t.exports=s.exports},function(t,e,n){var i=n(0)(n(15),n(59),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(16),n(58),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(24)}var s=n(0)(n(17),n(48),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(31)}var s=n(0)(n(18),n(60),i,"data-v-e9e13584",null);t.exports=s.exports},function(t,e,n){function i(t){n(29)}var s=n(0)(n(20),n(56),i,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center contact-info"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[n("strong",[t._v("Dana Case")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[t._v(" Web Developer, Bioinformatics Programmer, Molecular Biologist ")])]),t._v(" "),n("br")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[t._v(" 650 740 3780 ")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[t._v(" case.danal@gmail.com ")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col-auto"}),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{ref:"small",staticClass:"col-4"},[n("hexagon"),t._v(" "),n("contact"),t._v(" "),n("publications"),t._v(" "),n("internetPresence")],1),t._v(" "),n("div",{staticClass:"col-8"},[n("education"),t._v(" "),n("experience")],1)])]),t._v(" "),n("div",{staticClass:"col-auto"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section-title",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"m-x-auto"},[t._t("content")],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("resume-section",{staticClass:"internet-presence",attrs:{title:"Internet Presence"}},[n("div",{slot:"content"},[n("div",{staticClass:"mini-spacer"}),t._v(" "),t._l(t.links,function(e){return n("div",[n("div",{staticClass:"row site"},[n("div",{staticClass:"col-3"},[n("i",{class:e.icon})]),t._v(" "),n("div",{staticClass:"col-9"},[n("span",{staticClass:"align-middle"},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.display))])])])])])})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"technologyItem"},[t._v("\n  "+t._s(t.technologyName)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 experiencePosition"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-7 pull-left"},[n("strong",[t._v(" "+t._s(t.position.title)+" ")])]),t._v(" "),n("div",{staticClass:"col-5 pull-right text-right"},[t._v("\n      "+t._s(t.position.dates)+"\n    ")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 pull-left"},[n("a",{attrs:{href:t.position.link,target:"_blank"}},[t._v(t._s(t.position.company))])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},["string"==typeof t.position.summary?n("div",[n("div",{domProps:{innerHTML:t._s(t.position.summary)}})]):n("div",t._l(t.position.summary,function(e){return n("div",{staticClass:"summary-row"},[t._v("\n                  "+t._s(e)+"\n              ")])}))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("ul",{staticClass:"list-inline technology"},t._l(t.position.technologies,function(t){return n("technology",{attrs:{technologyName:t}})}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("layout")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("resume-section",{attrs:{title:"Experience"}},[n("div",{slot:"content"},[n("br"),t._v(" "),n("experienceSection",{attrs:{sectionTitle:"Software Experience",positions:t.positionSections.software}}),t._v(" "),n("experienceResearchSection",{attrs:{sectionTitle:"Research Experience",positions:t.positionSections.research}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 experienceCompany"},[n("div",{staticClass:"row companylink"},[n("div",{staticClass:"col-7 pull-left"},[n("strong",[n("a",{attrs:{href:t.position.link,target:"_blank"}},[t._v(t._s(t.position.company))])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 pull-left"},t._l(t.position.titles,function(t,e){return n("experiencePosition",{key:e,attrs:{title:t}})}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("svg",{attrs:{id:"hexagon",preserveAspectRatio:"xMidYMin",viewBox:t.points.viewBox,height:t.points.height,width:t.points.width}},[n("text",{attrs:{"font-size":t.fontSizeFirst,x:"50%",y:t.firstY,"alignment-baseline":"middle","text-anchor":"middle","font-family":"Unna","font-style":"italic",fill:t.svgColor}},[t._v("DANA")]),t._v(" "),n("text",{attrs:{"font-size":t.fontSizeLast,x:"50%",y:t.lastY,"alignment-baseline":"middle","text-anchor":"middle","font-family":"Unna","font-style":"italic",fill:t.svgColor}},[t._v("CASE")]),t._v(" "),n("polyline",{attrs:{stroke:t.svgColor,fill:"none","stroke-width":t.accentStrokeWidth,points:t.points.topPathString}}),t._v(" "),n("polyline",{attrs:{stroke:t.svgColor,fill:"none","stroke-width":t.accentStrokeWidth,points:t.points.bottomPathString}}),t._v(" "),n("polygon",{staticClass:"hex",attrs:{fill:"none",stroke:t.svgColor,"stroke-width":t.strokeWidth,points:t.points.pathString,"alignment-baseline":"middle"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("resume-section",{attrs:{title:"Education"}},[n("div",{slot:"content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"degree"},[n("strong",[t._v(" M.S. Biological Chemistry ")]),n("br")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"degree"},[t._v("University of California Los Angeles "),n("br")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"degree"},[n("strong",[t._v(" B.S. Molecular, Cell, and Developmental Biology "),n("em",[t._v("cum laude")])])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"degree"},[t._v("University of California Los Angeles"),n("br")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spacer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h4",{staticClass:"text-center"},[t._v(t._s(t.title))])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spacer-color row"},[n("div",{staticClass:"col-12"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experiencePosition"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-7 pull-left"},[n("strong",[t._v(" "+t._s(t.title.title)+" ")])]),t._v(" "),n("div",{staticClass:"col-5 pull-right text-right"},[t._v("\n      "+t._s(t.title.dates)+"\n    ")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},["string"==typeof t.title.summary?n("div",[n("div",{domProps:{innerHTML:t._s(t.title.summary)}})]):n("div",t._l(t.title.summary,function(e){return n("div",{staticClass:"summary-row"},[t._v("\n                  "+t._s(e)+"\n              ")])}))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("ul",{staticClass:"list-inline technology"},t._l(t.title.technologies,function(t){return n("technology",{attrs:{technologyName:t}})}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",[t._v(t._s(t.sectionTitle))]),t._v(" "),t._l(t.positions,function(t,e){return n("experienceCompany",{key:e,attrs:{position:t}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",[t._v(t._s(t.sectionTitle))]),t._v(" "),t._l(t.positions,function(t,e){return n("experienceResarchPosition",{key:e,attrs:{position:t}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("resume-section",{attrs:{title:"Publications"}},[n("div",{slot:"content"},[n("div",{staticClass:"publicationsection"},t._l(t.publications,function(e){return n("div",[n("p",{staticClass:"publication"},[n("a",{attrs:{target:"_blank",href:"https://www.ncbi.nlm.nih.gov/pubmed/"+e.pmid}},[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"journal"},[n("small",[t._v(t._s(e.journal))])])])}))])])},staticRenderFns:[]}},,,function(t,e){t.exports={software:[{company:"Ionpath",link:"https://ionpath.com",titles:[{title:"Director of Software",summary:["Oversee software across Ionpath products including MIBIscope (instrument software), MIBItracker (data tracking and visualization software) and MIBIprism (data pipelining infrastructure).","Assembled a team to scale bioinformatics services infrastructure.","Work with customer support team to track and categorize customer feedback to select most impactful developer tasks.","Regularly review SOPs for compliance."],technologies:[],dates:"5/21 - present"},{title:"Software Engineering Manager",summary:["Worked closely with firmware, electrical engineering, and biology teams to take MIBIscope from conception to launch.","Hired and led a diverse team including C++ developers, javascript developers and a dev ops engineer.  Managed contractors for instrument software. Managed MIBItracker team with lead engineer and contractors.","Enforced best practices including continuous integration, code review, and agile development.","Assisted in process definition across the orginization.  Configured Jira for multiple teams."],technologies:["javascript","node.js","python","django","mysql","google cloud","d3","angular","react"],dates:"1/19 - 5/21"},{title:"Senior Software Engineer",summary:"Employee number 12 at Ionpath. Acted as a bridge between software and instrument hardware team. Recognized that our instrument (MIBIscope) software strategy would not work so successfully advocated and architected ground up redesign that is now in production. ",technologies:["javascript","node.js","python","django","mysql","google cloud","angular","react"],dates:"3/18 - 1/19"}]},{company:"Histowiz",link:"https://histowiz.com",titles:[{title:"Lead Software Engineer",summary:"Lead engineer for Lab As A Service company.  Develop and maintain web application that converts large histology scans to deepzoom web viewable images. Built automated blur detection of slides to aid in QC. Wrote script to convert image annotations from aperio to quPath format.",technologies:["python","flask","mysql","aws","openslide","OpenCV","openseadragon","google app scripts","google drive api"],dates:"7/17 - 3/18"}]},{company:"Ambry Genetics",link:"http://www.ambrygen.com",titles:[{title:"Senior Software Engineer - Project Lead BioAPI",summary:"Integrated jBrowse genome visualizer into Ambry internal report generation software. Wrote custom plugins for jBrowse (using dojo javascript framework) including one to display non-continuous quantitative alignment data (jBrowse only supports continuous quantitative data e.g. bigWig format).  Refactored core endpoints in Perl API to speed up the processing of samples.",technologies:["python","flask","perl","dancer","mysql","jBrowse","dojo"],dates:"1/17 - 7/17"},{title:"Software Engineer II - Project Lead BioAPI",company:"Ambry Genetics",link:"http://www.ambrygen.com",summary:"Lead a project to integrate DNA sequencing pipeline data into Ambry's web applications.  Maintain legacy Perl Dancer API and built new features in Python flask API.",technologies:["python","flask","perl","dancer","mysql","bioinformatics"],dates:"9/16 - 1/17"},{title:"Software Engineer II",company:"Ambry Genetics",link:"http://www.ambrygen.com",summary:"Build features requiring coordination across different applications, including Exome Select a feature that allows clinicians to order a la carte sequencing of of any combination of protein sequencing genes.",technologies:["elasticsearch","elastic","symfony2","angular","php","javascript"],dates:"6/16 - 9/16"},{title:"Software Engineer II - Head of QA",company:"Ambry Genetics",link:"http://www.ambrygen.com",summary:"Built an integration test framework using Node, Mocha, and Selenium.  Grew the QA team from two QAs to seven.  Established testing protocols for six different applications. Built an interface to keep track of test cases run.",technologies:["node.js","mongodb","reactjs","php","symfony2","mocha","selenium"],dates:"12/15 - 6/16"},{title:"Software Engineer I",company:"Ambry Genetics",link:"http://www.ambrygen.com",summary:"Full stack developer working in internal applications to create reports from gene sequencing data.  Built interfaces for genetic counselors to manage patient data.",technologies:["php","symfony2","mysql","jquery"],dates:"3/15 - 12/15"}]},{company:"Karma",link:"http://www.havekarma.com",titles:[{title:"Software Engineer",summary:"Built internal admin webapp, built onboarding workflow, took Karma webapp from private alpha stage to beta. Built front end unit-tests using CasperJs. Built scraper using python.",technologies:["javascript","node.js","backbone.js","casper.js","python","mongodb"],dates:"10/14-03/15"}]}],research:[{title:"Graduate Student",company:"Michael Teitell's lab at UCLA",link:"http://www.ucla.edu",summary:"Studied mitochondiral transplation",technologies:["Operation of photothermal nanoblade","bisulfite sequencing","mitochondrial DNA quantification with qPCR","whole genome bisulfite sequencing data analysis"],dates:"04/13-06/14"},{title:"Graduate Student",company:"Kathrin Plath's lab at UCLA",link:"http://www.ucla.edu",summary:"Studied X chromosome reactivation in transcription factor mediated reprogramming.",technologies:["Reprogramming of mouse fetal fibroblasts","Virus production","Infusion cloning","Immunofluorescence imaging","FISH","single molecule FISH"],dates:"07/11-04/13"},{title:"Rotation Student",company:"UCLA",link:"http://www.ucla.edu",summary:"Lowry lab: Assay development for Luciferase based let-7 reporter</br>Plath lab: Tested role of histone variants in reporgramming</br>Novitch lab: Development of whole embryo slice culture live imaging.",dates:"09/10-07/11"},{title:"Research Associate - Assay Development",company:"Evolva (Previously - Genetic Chemistry)",link:"www.evolva.com",summary:"Assay Development for high througput screening of compund enabled yeast for novel antibiotics.",technologies:["yeast transformation","bacteria survival assays","Tecan liquid handling robot programming","Qpix robot","High Content Analyzer","yeast 2 hybrid"],dates:"10/08 - 06/10"},{title:"Intern",company:"Dr. Larry Feldman's lab at UCLA",link:"www.ucla.edu",summary:"Studied HSV-1 binding sites related to LAT and CTCF.",technologies:["PCR","subcloning","DNA purification"],dates:"11/07 - 2/08"},{title:"Intern",company:"OSI Pharmaceuticals",link:"https://www.us.astellas.com/",summary:"Studied the effects of TGF-&beta in conjunction with the anti-cancer drug Tarceva on non-small cell lung cancer cells.",technologies:["western blot","tissue culture","MALDI mass spec"],dates:"06/05 - 08/05"},{title:"Intern",company:"Sangamo",link:"www.sangamo.com",summary:"High througput subcloning and gene assembly of engineered zinc finger proteins (DNA binding proteins).",technologies:["DNA isolation","PCR","Electrophoresis"],dates:"06/04 - 08/04"}]}},function(t,e){t.exports={publications:[{title:"Mitochondrial Transfer by Photothermal Nanoblade Restores Metabolite Profile in Mammalian Cells.",authors:["Case D.*","Wu TH.*","Sagullo E.*","Zheng X.","Li Y.","TeSlaa T.","Patananan AN.","McCaffery JM.","Niazi K.","Braas D.","Koehler CM.","Graeber TG.","Chiou PY.","Teitell MA."],journal:"Cell Metabolism",pmid:27166949},{title:"Single-cell time-course analysis of X-chromosome and pluripotency gene activation during reprogramming.",authors:["Pasque V.","Tchieu J.","Karnik R.","Uyeda M.","Sadhu Dimashkie A.","Case D.","Papp B.","Bonora G.","Patel S.","Ho R.","Schmidt R.","McKee R.","Sado T.","Tada T.","Plath K."],journal:"Cell",pmid:25525883},{title:"Defining the nature of human pluripotent stem cell progeny.",authors:["Patterson M","Chan DN","Ha I","Case D","Cui Y","Van Handel B","Mikkola HK","Lowry WE."],journal:"Cell Research",pmid:21844894}]}}],[5]);
//# sourceMappingURL=app.c1d74270f6e284ef8a0e.js.map