//access modifiers-public,private,protected,default

class student{
    #marks=100;//Private field
    showmark(){
        console.log(this.marks)
    }
}

const s1 = new student();
s1.showmark();
s1.marks = 120;
console.log(s1.marks);