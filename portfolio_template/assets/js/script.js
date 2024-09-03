const aboutIntroP = ["Greetings, I am Sila Klinsmith. I want to study ICT, and I'm a hardworking student. I love to learn programming and design like website and application. If I receive a work, I will complete it to my utmost ability.Communication is something I can do fluently when communicating with people on my team. Thank you for visit my website.","ยินดีที่ได้รู้จักฉันชื่อ ศิลา กลิ่นสมิทธิ์ ฉันอยากจะเข้า ICT และฉันเป็นนักเรียนที่ขยัน มีความชอบเรียนรู้การเขียนโปรแกรมและการออกแบบ เช่น เว็บไซต์และแอปพลิเคชัน ถ้าฉันได้รับงาน ฉันจะทำมันให้เต็มความสามารถ การสื่อสารเป็นสิ่งที่ฉันสามารถทำได้อย่างคล่องแคล่วเมื่อสื่อสารกับผู้คนในทีมด้วย และขอบคุณสำหรับการเยี่ยมชมเว็บไซต์ของฉัน"];
const aboutName = ["Sila Klinsmith","ศิลา กลิ่นสมิทธิ์"]
const aboutSchool = ["Kanchanapisek Wittayalai Nakhon Pathom","กาญจนาภิเษกวิทยาลัย นครปฐม"]
const aboutProgram = ["Mathematics and English","คณิตศาสตร์-ภาษาอังกฤษ"]
const aboutHobbies = ["Drawing, Weight Training, Music","วาดรูป ออกกำลังกาย และฟังเพลง"]
const aboutSummary = ["I first became interested in technology when I saw my older brother using a computer for his creative projects. It sparked my curiosity about computers and information technology and encouraged me to know more. At the time, it was quite difficult for me to understand programming by myself, but I have excellent teachers and friends. When it is functional, it is a fantastic feeling. I had the chance to practice and compete with many organizations, including Mahidol University.","ฉันเริ่มสนใจเทคโนโลยีเมื่อเห็นพี่ชายใช้คอมพิวเตอร์ทำโปรเจ็กต์สร้างสรรค์ มันทำให้ฉันสนใจเรื่องคอมพิวเตอร์และเทคโนโลยีสารสนเทศมากขึ้น และกระตุ้นให้ฉันอยากเรียนรู้เพิ่มเติม ตอนนั้น ค่อนข้างยากสำหรับฉันที่จะเข้าใจการเขียนโปรแกรมด้วยตัวเอง แต่ฉันมีครูและเพื่อนที่ดีมาก เมื่อใช้งานได้จริง มันเป็นความรู้สึกที่ยอดเยี่ยมมาก ฉันมีโอกาสได้ฝึกฝนและแข่งขันกับองค์กรต่างๆ มากมาย รวมถึงมหาวิทยาลัยมหิดลด้วย"]
const LANGUAGE ={
    "EN":0,
    "TH":1
    
}
let myLanguage = LANGUAGE.EN;
console.log(aboutIntroP[myLanguage]);


function changeMessage()
{//open
    var aboutIntroPElement = document.getElementById("about-intro-p");
    var aboutIntroNameElement = document.getElementById("about-intro-name");
    var aboutIntroSchoolElement = document.getElementById("about-intro-school");
    var aboutIntroProgramElement = document.getElementById("about-intro-program");
    var aboutIntroHobbiesElement = document.getElementById("about-intro-hobbies");
    var aboutIntroSummary = document.getElementById("about-intro-summary");
    if(myLanguage === LANGUAGE.TH)
        {
            myLanguage = LANGUAGE.EN;
        }else{
            myLanguage = LANGUAGE.TH;
        }
        aboutIntroPElement.innerText = aboutIntroP[myLanguage];
        aboutIntroNameElement.innerText = aboutName[myLanguage];
        aboutIntroSchoolElement.innerText = aboutSchool[myLanguage];
        aboutIntroProgramElement.innerText = aboutProgram[myLanguage];
        aboutIntroHobbiesElement.innerText = aboutHobbies[myLanguage];
        aboutIntroSummary.innerText = aboutSummary[myLanguage];
}//close


function changeColor()
{

    var messageElement = document.getElementById("message");
    var currentColor = messageElement.style.color;
    messageElement.style.color ='rgb(0,0,255)';
    //messageElement.innerText = "<b>Ohai yo This</b> is Japan";
    //messageElement.innerHTML = "<b>Ohai yo</b> This is Japan.2";

    console.log(messageElement);
    console.log(currentColor);
}