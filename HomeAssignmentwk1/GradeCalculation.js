function Grade(studentscore){
    switch(true){
        case studentscore >= 90:
            console.log("Grade is A+");
            break;
        case studentscore >= 70 && studentscore >= 80:
            console.log("Grade is A");
            break;
        case studentscore >= 60:
            console.log("Grade is B");
            break;
        default:
            console.log("Grade is C");
    }
}
Grade(89)