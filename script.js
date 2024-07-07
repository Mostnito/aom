var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    delay: 100,
});

typewriter
    .pauseFor(2500)
    .typeString('Wirosana Aom BirthDay! [07 / 07 / 2024] <br><br>')
    .pauseFor(1500)
    .typeString('Wish has come ')
    .pauseFor( 2000)
    .typeString('. . . <br>')
    .pauseFor(1500)
    .pauseFor(1500)
    .typeString('หวัดดีน้องออมมี่~~~ ')
    .pauseFor(1500)
    .typeString('ปีนี้แกก็อายุ 20 ปีแล้วเนาะ <br>')
    .pauseFor(1500)
    .typeString('เรากับแกก็รู้จักกันมาปีนึงแล้ว เย้ เย้ เย้ <br>')
    .pauseFor(1500)
    .typeString('เวลามันก้อออ ')
    .pauseFor(1500)
    .typeString('ผ่านไปเร็วเหมือนกันนะ5555 <br>')
    .pauseFor(1500)
    .typeString('เอาหละะ ')
    .pauseFor(1000)
    .typeString('เข้าเรื่องเลยดีกว่าา <br>')
    .pauseFor(1500)
    .typeString('เราขอให้แกมีความสุขขข ')
    .pauseFor(1000)
    .typeString('ไม่ปวดหลังง <br>')
    .pauseFor(1500)
    .typeString('สุขภาพร่างกายแข็งแรงง ')
    .pauseFor(1000)
    .typeString('(กินข้าวกินยาด้วยหละ หุหุ) <br>')
    .pauseFor(1500)
    .typeString('ได้เกรด A ทุกตัวไปเลยยย')
    .pauseFor(1000)
    .typeString(' (สาธุสิรอไรร) <br>')
    .pauseFor(1500)
    .typeString('ยิ้มเย้อๆ กินข้าวให้อย่อยย ใช้ชีวิตให้สนุกน้าา <br>')
    .pauseFor(1500)
    .typeString('ถ้ามีอะไรให้ช่วยบอกได้เล้ยยยย ')
    .pauseFor(750)
    .typeString('เราพร้อมอิอิ <br>')
    .pauseFor(1500)
    .typeString('วันไหนที่แกเค่ด ')
    .pauseFor(750)
    .typeString('มีปัญหาอะไรเข้ามารบกวนแก<br>')
    .pauseFor(1500)
    .typeString('หรือวันไหนที่แกรู้สึกโดดเดี่ยว<br>')
    .pauseFor(1500)
    .typeString('เราอยากให้แกรู้ว่า ')
    .pauseFor(2000)
    .typeString('. . . <br>')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('ยังมีเราอยู่ตรงนี้เสมอนะ! <br>')
    .pauseFor(1500)
    .typeString('จาก, ')
    .pauseFor(1200)
    .typeString('โฟโมสสึ <br>')
    .pauseFor(1500)
    .callFunction(() => {
        var img = document.createElement("img");
        img.src = "assets/Aom.jpg";
        var src = document.getElementById("app");
        src.appendChild(img);
      })
    .start();