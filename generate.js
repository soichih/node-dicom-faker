var faker = require('faker');
var dateFormat = require('dateformat');

//for dicom SOP, Modality, see http://www.dicomlibrary.com/dicom/
//to generate brand new series (with a single instance), just run this without any argument (use default template)
//fill as many argument as you want to generate data based on parent.
//./generate.js <template.json> patient|study|series|instance
//console.log(faker.name.findName());

var mode = process.argv[2]||"patient";
var template_json = process.argv[3]||"./template.json";

function genuid() {
    //TODO - let's just use uuid for now..
    return faker.random.uuid();
}

var headers = require(template_json);

//fall through each section to modify more / less attributes
switch(mode) {
case "patient":
    headers.PatientName = faker.name.findName(); 
    headers.PatientID = faker.random.number(99999999);
    var bday = faker.date.past(80);
    headers.PatientBirthDate = dateFormat(bday, "yyyymmdd");
    headers.PatientSex = faker.random.number(1)?'M':'F';
    headers.PatientAge = "0"+faker.random.number(80)+"Y";
    headers.PatientWeight = faker.random.number({min: 100, max: 300, precision:0.1});
    
    //init study
    //TODO..
case "study":
    headers.StudyID = faker.random.number(9999);
    headers.StudyInstanceUID = genuid();
    var studydate = faker.date.past(10);
    headers.StudyDate = dateFormat(bday, "yyyymmdd");
    headers.StudyTime = dateFormat(bday, "hhMMss.l000");
    headers.StudyDescription = faker.company.bsAdjective()+" "+faker.company.companyName();
    
    //init series
    //TODO...
case "series":
    headers.SeriesNumber = faker.random.number(9999);
    headers.SeriesInstanceUID = genuid();
    var seriesdate = faker.date.past(10);
    headers.SeriesDate = dateFormat(bday, "yyyymmdd");
    headers.SeriesTime = dateFormat(bday, "hhMMss.l000");
    headers.SeriesDescription = headers.StudyDescription +" / "+faker.company.catchPhrase();
    
    //init instance
    headers.InstanceNumber = 0;
    headers.ImageIndex = headers.InstanceNumber;
    headers.NumberOfSlices = 200; //TODO - how can I guess?
    headers.SliceLocation=0.0;
case "instance":
    headers.MediaStorageSOPInstanceUID = faker.random.uuid(); 
    headers.SOPInstanceUID = headers.MediaStorageSOPInstanceUID;
    headers.InstanceNumber+=1;
    headers.ImageIndex = headers.InstanceNumber;
    headers.SliceLocation+=1 + Math.random()/10;
    headers.LargestImagePixelValue = -faker.random.number(10);
    headers.WindowCenter = faker.random.number({min: -1000, max: 7000});
    headers.WindowWidth = faker.random.number({min: 0, max: 35000});
    headers.RescaleSlope = Math.random()/100*(Math.random()*5)

    break;
default:
    console.error("unknown generation mode");
}
//console.log(JSON.stringify(headers));
console.log(JSON.stringify(headers, null, 4));
//template.MediaStorageSOPClassUID = 
