
let Faculty = [
    'College Of Technology',
    'Faculty Of Engineering And Technology',
    'Faculty Of Social And Management Sciences',
    'Faculty Of Education', 
    'Faculty Of Arts',
    'Higher Technical Teachers Training College',
    'Advanced School of Translators and Interpreters',
    'Faculty of Veterinary Medicine and Agriculture',
    'Faculty Of Science',
    'Faculty of Health Sciences'
];

let CollegeOfTechnology = [
    'Compueter Engineering',
    'Electrical Engineering',
    'Mechanical Engineering'
];

let FacultyOfEngineeringAndTechnology = [
    'Compueter Engineering',
    'Electrical Engineering',
    'Civil Engineering',
    'Mechanical Engineering'
];

let FacultyOfSocialAndManagementSciences = [
    'Department of Economics and Management',
    'Department of Geography',
    'Department of Journalism and Mass Communications',
    'Department of Law',
    'Department of Political Science and Public Administration',
    'Department of Sociology and Anthropology',
    'Department of Women and Gender Studies',
];

let FacultyOfEducation = [
    'Department of Curriculum Studies and Teaching (CST)',
    'Department of  Educational Foundations Administration (EFA)',
    'Department of  Educational Psychology (EPY)',
];

let FacultyOfArts = [
    'Department of ENGLISH',
    'Department of FRENCH',
    'Department of HISTOTY',
    'Department of LINGUISTICS'
];

let HigherTechnicalTeachersTrainingCollege = [
    'Department of Civil Engineering &  Forestry Techniques',
    'Department of Agriculture',
    'Department of Computer Science',
    'Department of Electrical & Power Engineering',
    'Department of Mechanical Manufacturing Engineering',
    'Department of Renewable Energy',
    'Department of Topography & Real Estate Management',
    'Department of Administrative Techniques',
    'Department of Guidance Counseling',
    'Department of Law',
    'Department of Management Sciences',
    'Department of Social Economy & Family Management',
    'Department of Science of Education',
    'Department of Tourism & Hospitality Management'
];

let FacultyofScience = [
    'Department of BIOCHEMISTRY AND MOLECULAR BIOLOGY (BMB)',
    'Department of BOTANY AND PLANT PHYSIOLOGY (BPP)',
    'Department of CHEMISTRY (CHM)',
    'Department of COMPUTER SCIENCE (CSC)',
    'Department of ENVIRONMENTAL SCIENCE (ENV)',
    'Department of GEOLOGY (GLY)',
    'Department of MATHEMATICS (MAT)',
    'Department of MICROBIOLOGY AND PARASITOLOGY (MCP)',
    'Department of PHYSICS (PHY)',
    'Department of ZOOLOGY AND ANIMAL PHYSIOLOGY (ZAP)'
];

let FacultyofVeterinaryMedicineandAgriculture = [
    'Department of Agricultural Economics and Agribusiness',
    'Department of Department of Agricultural Extension and Rural Development',
    'Department of Department of Agronomic and Applied Molecular Sciences',
    'Department of Animal Science',
    'Department of Department of Food Science and Technology',
    'Department of Department of Forestry and Wildlife',
    'Department of Department of Veterinary Medicine'
];


let FacultyofHealthSciences = [
    'General Medicine',
    'Nursing', 
    'Medical Laboratory Sciences',
    'PUBLIC HEALTH AND HYGIENE'
];

let AdvancedSchoolofTranslatorsandInterpreters = [
    'Department of Translation'
];

let selectedFaculty = document.getElementById('Faculty');
let selectedDepartment = document.getElementById('Department');

Faculty.forEach(function addFaculty(item){
    let option = document.createElement('option');
    option.text = item;
    option.value = item;
    selectedFaculty.appendChild(option);
});

selectedFaculty.onchange = function () {
    selectedDepartment.innerHTML = '<option></option>';
    if (this.value == 'College Of Technology') {
        addToDepartment(CollegeOfTechnology);
    }
    if (this.value == 'Faculty Of Engineering And Technology') {
        addToDepartment(FacultyOfEngineeringAndTechnology);
    }
    if (this.value == 'Faculty Of Social And Management Sciences') {
        addToDepartment(FacultyOfSocialAndManagementSciences);
    }
    if (this.value == 'Faculty Of Education') {
        addToDepartment(FacultyOfEducation);
    }
    if (this.value == 'Faculty Of Arts') {
        addToDepartment(FacultyOfArts);
    }
    if (this.value == 'Higher Technical Teachers Training College') {
        addToDepartment(HigherTechnicalTeachersTrainingCollege);
    }
    if (this.value == 'Advanced School of Translators and Interpreters') {
        addToDepartment(AdvancedSchoolofTranslatorsandInterpreters);
    }
    if (this.value == 'Faculty of Veterinary Medicine and Agriculture') {
        addToDepartment(FacultyofVeterinaryMedicineandAgriculture);
    }
    if (this.value == 'Faculty Of Science') {
        addToDepartment(FacultyofScience);
    }
    if (this.value == 'Faculty of Health Sciences') {
        addToDepartment(FacultyofHealthSciences);
    }
}

function addToDepartment(arr) {
    arr.forEach(function (item) {
        let option = document.createElement('option');
        option.text = item;
        option.value = item;
        selectedDepartment.appendChild(option);
    });
}





//RESPONSIVENESS

const checkBtn = document.querySelector('.checkbtn');
const checkBtnIcon = document.querySelector('.checkbtn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

checkBtn.onclick = function () {
    dropDownMenu.classList.toggle('.dropdown-menu')
}













