  let handpan = null;
  let preset = 0  //con questo valore cambio la versione
  let loaded = false;
  


  function playHandpan() {
    let index = parseInt(this.dataset.note) + preset;
    handpan = new Handpan(context, buffer.getSound(index));
    handpan.play();
  }

  let keyboardDataSet = '' ;

  function playKeyboard(keyboardDataSet) {
     keyboardDataSet = parseInt(keyboardDataSet, 10) + preset;
        handpan = new Handpan(context, buffer.getSound(keyboardDataSet));
    handpan.play();
  }
  
  function stopHandpan() {
    handpan.stop();
  }
  
  let context = new (window.AudioContext || window.webkitAudioContext)();
  
  let sounds = [
    'https://www.haganenote.com/vst/C3.mp3',  //0
    'https://www.haganenote.com/vst/Cdiesis3.mp3',   //1
    'https://www.haganenote.com/vst/D3.mp3',  //2          
    'https://www.haganenote.com/vst/Eb3.mp3', //3
    'https://www.haganenote.com/vst/E3.mp3', //4
    'https://www.haganenote.com/vst/F3.mp3', //5
    'https://www.haganenote.com/vst/Fdiesis3.mp3', //6
    'https://www.haganenote.com/vst/G3.mp3', //7
    'https://www.haganenote.com/vst/Gdiesis3.mp3', //8
    'https://www.haganenote.com/vst/A3.mp3', //9
    'https://www.haganenote.com/vst/Bb3.mp3', //10
    'https://www.haganenote.com/vst/B3.mp3', //11
    'https://www.haganenote.com/vst/C4.mp3', //12
    'https://www.haganenote.com/vst/Cdiesis4.mp3', //13
    'https://www.haganenote.com/vst/D4.mp3', //14
    'https://www.haganenote.com/vst/Ddiesis4.mp3', //15
    'https://www.haganenote.com/vst/E4.mp3', //16
    'https://www.haganenote.com/vst/F4.mp3', //17
    'https://www.haganenote.com/vst/Fdiesis4.mp3', //18
    'https://www.haganenote.com/vst/G4.mp3', //19
    'https://www.haganenote.com/vst/Gdiesis4.mp3', //20
    'https://www.haganenote.com/vst/A4.mp3', //21
    'https://www.haganenote.com/vst/Bb4.mp3', //22
    'https://www.haganenote.com/vst/B4.mp3', //23
    'https://www.haganenote.com/vst/C5.mp3', //24
    'https://www.haganenote.com/vst/Db5.mp3', //25
    'https://www.haganenote.com/vst/D5.mp3', //26
    'https://www.haganenote.com/vst/Eb5.mp3', //27
    'https://www.haganenote.com/vst/E5.mp3', //28
    'https://www.haganenote.com/vst/F5.mp3', //29  
    'https://www.haganenote.com/vst/Fdiesis5.mp3', //30
  'https://www.haganenote.com/vst/G5.mp3'  //31  

  ];
  
 





  var select = document.getElementById("sel");
  for (var i = 0; i < select.length; i++){
    var option = select.options[i];
    // now have option.text, option.value
  }


  var selectDing = document.getElementById("selDing");
  for (var i = 0; i < select.length; i++){
    var option = select.options[i];
    // now have option.text, option.value
  }


function changeScale (){
  if (select.value==='dKurd') {


  
  ding.dataset.note = 2
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 10
  dimpleNota3.dataset.note = 12
  dimpleNota4.dataset.note = 14
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 17
  dimpleNota7.dataset.note = 19
  dimpleNota8.dataset.note = 21

  campoNotaDing.dataset.note = 2
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 10
  campoNota3.dataset.note = 12
  campoNota4.dataset.note = 14
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 17
  campoNota7.dataset.note = 19
  campoNota8.dataset.note = 21

  
  scaleNotesList ()
    

} 

else 

if (select.value==='eAeolian') {


  
ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 14
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 17
dimpleNota7.dataset.note = 19
dimpleNota8.dataset.note = 21

campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 11
campoNota3.dataset.note = 12
campoNota4.dataset.note = 14
campoNota5.dataset.note = 16
campoNota6.dataset.note = 17
campoNota7.dataset.note = 19
campoNota8.dataset.note = 21

scaleNotesList ()

  

}

else

if (select.value==='eAkebono') {
  ding.dataset.note = 4
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 11
  dimpleNota3.dataset.note = 12
  dimpleNota4.dataset.note = 16
  dimpleNota5.dataset.note = 17
  dimpleNota6.dataset.note = 21
  dimpleNota7.dataset.note = 23
  dimpleNota8.dataset.note = 24

  campoNotaDing.dataset.note = 4
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 11
  campoNota3.dataset.note = 12
  campoNota4.dataset.note = 16
  campoNota5.dataset.note = 17
  campoNota6.dataset.note = 21
  campoNota7.dataset.note = 23
  campoNota8.dataset.note = 24
  scaleNotesList ()
}

else

if (select.value==='dCelticMinor') {
  ding.dataset.note = 2
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 12
  dimpleNota3.dataset.note = 14
  dimpleNota4.dataset.note = 16
  dimpleNota5.dataset.note = 17
  dimpleNota6.dataset.note = 19
  dimpleNota7.dataset.note = 21
  dimpleNota8.dataset.note = 24

  campoNotaDing.dataset.note = 2
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 12
  campoNota3.dataset.note = 14
  campoNota4.dataset.note = 16
  campoNota5.dataset.note = 17
  campoNota6.dataset.note = 19
  campoNota7.dataset.note = 21
  campoNota8.dataset.note = 24
  scaleNotesList ()
}

else

if (select.value==='eBluesV1') {
  ding.dataset.note = 4
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 12
  dimpleNota3.dataset.note = 14
  dimpleNota4.dataset.note = 15
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 19
  dimpleNota7.dataset.note = 21
  dimpleNota8.dataset.note = 24

  campoNotaDing.dataset.note = 4
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 12
  campoNota3.dataset.note = 14
  campoNota4.dataset.note = 15
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 19
  campoNota7.dataset.note = 21
  campoNota8.dataset.note = 24
  scaleNotesList ()
}

else


if (select.value==='dBluesV2') {
  ding.dataset.note = 2
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 12
  dimpleNota3.dataset.note = 14
  dimpleNota4.dataset.note = 15
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 19
  dimpleNota7.dataset.note = 21
  dimpleNota8.dataset.note = 24

  campoNotaDing.dataset.note = 2
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 12
  campoNota3.dataset.note = 14
  campoNota4.dataset.note = 15
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 19
  campoNota7.dataset.note = 21
  campoNota8.dataset.note = 24
  scaleNotesList ()
}

if (select.value==='eEquinox') {
  ding.dataset.note = 4
  dimpleNota1.dataset.note = 7
  dimpleNota2.dataset.note = 11
  dimpleNota3.dataset.note = 12
  dimpleNota4.dataset.note = 14
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 18
  dimpleNota7.dataset.note = 19
  dimpleNota8.dataset.note = 23

  campoNotaDing.dataset.note = 4
  campoNota1.dataset.note = 7
  campoNota2.dataset.note = 11
  campoNota3.dataset.note = 12
  campoNota4.dataset.note = 14
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 18
  campoNota7.dataset.note = 19
  campoNota8.dataset.note = 23
  scaleNotesList ()
}

else

if (select.value==='eHijazV1') {
  ding.dataset.note = 4
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 10
  dimpleNota3.dataset.note = 13
  dimpleNota4.dataset.note = 14
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 17
  dimpleNota7.dataset.note = 19
  dimpleNota8.dataset.note = 21

  campoNotaDing.dataset.note = 4
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 10
  campoNota3.dataset.note = 13
  campoNota4.dataset.note = 14
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 17
  campoNota7.dataset.note = 19
  campoNota8.dataset.note = 21
  scaleNotesList ()
}

else

if (select.value==='dHijazV2') {
  ding.dataset.note = 2
  dimpleNota1.dataset.note = 9
  dimpleNota2.dataset.note = 10
  dimpleNota3.dataset.note = 13
  dimpleNota4.dataset.note = 14
  dimpleNota5.dataset.note = 16
  dimpleNota6.dataset.note = 17
  dimpleNota7.dataset.note = 19
  dimpleNota8.dataset.note = 21

  campoNotaDing.dataset.note = 2
  campoNota1.dataset.note = 9
  campoNota2.dataset.note = 10
  campoNota3.dataset.note = 13
  campoNota4.dataset.note = 14
  campoNota5.dataset.note = 16
  campoNota6.dataset.note = 17
  campoNota7.dataset.note = 19
  campoNota8.dataset.note = 21
  scaleNotesList ()
}

else

if (select.value==='dIntegral') {


ding.dataset.note = 2
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 10
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 14
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 17
dimpleNota7.dataset.note = 21
dimpleNota8.dataset.note = 24

campoNotaDing.dataset.note = 2
campoNota1.dataset.note = 9
campoNota2.dataset.note = 10
campoNota3.dataset.note = 12
campoNota4.dataset.note = 14
campoNota5.dataset.note = 16
campoNota6.dataset.note = 17
campoNota7.dataset.note = 21
campoNota8.dataset.note = 24
scaleNotesList ()
} 

else

if (select.value==='eJibuk') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 13
dimpleNota4.dataset.note = 14
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 18
dimpleNota7.dataset.note = 19
dimpleNota8.dataset.note = 21

campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 11
campoNota3.dataset.note = 13
campoNota4.dataset.note = 14
campoNota5.dataset.note = 16
campoNota6.dataset.note = 18
campoNota7.dataset.note = 19
campoNota8.dataset.note = 21
scaleNotesList ()
} 

else

if (select.value==='eLaSirena') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 7
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 13
dimpleNota4.dataset.note = 14
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 18
dimpleNota7.dataset.note = 19
dimpleNota8.dataset.note = 23

campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 7
campoNota2.dataset.note = 11
campoNota3.dataset.note = 13
campoNota4.dataset.note = 14
campoNota5.dataset.note = 16
campoNota6.dataset.note = 18
campoNota7.dataset.note = 19
campoNota8.dataset.note = 23
scaleNotesList ()
} 

else

if (select.value==='fLowPygmy') {


ding.dataset.note = 5
dimpleNota1.dataset.note = 7
dimpleNota2.dataset.note = 8
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 15
dimpleNota5.dataset.note = 17
dimpleNota6.dataset.note = 19
dimpleNota7.dataset.note = 20
dimpleNota8.dataset.note = 24

campoNotaDing.dataset.note = 5
campoNota1.dataset.note = 7
campoNota2.dataset.note = 8
campoNota3.dataset.note = 12
campoNota4.dataset.note = 15
campoNota5.dataset.note = 17
campoNota6.dataset.note = 19
campoNota7.dataset.note = 20
campoNota8.dataset.note = 24
scaleNotesList ()
} 

else

if (select.value==='eMagicVoyage') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 7
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 14
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 19
dimpleNota7.dataset.note = 23
dimpleNota8.dataset.note = 26

campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 7
campoNota2.dataset.note = 11
campoNota3.dataset.note = 14
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 19
campoNota7.dataset.note = 23
campoNota8.dataset.note = 26
scaleNotesList ()
} 

else

if (select.value==='dMixolydian') {


ding.dataset.note = 2
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 14
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 19
dimpleNota7.dataset.note = 21
dimpleNota8.dataset.note = 23

campoNotaDing.dataset.note = 2
campoNota1.dataset.note = 9
campoNota2.dataset.note = 11
campoNota3.dataset.note = 14
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 19
campoNota7.dataset.note = 21
campoNota8.dataset.note = 23
scaleNotesList ()
} 

else

if (select.value==='dMystic') {


ding.dataset.note = 2
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 10
dimpleNota3.dataset.note = 14
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 17
dimpleNota6.dataset.note = 21
dimpleNota7.dataset.note = 24
dimpleNota8.dataset.note = 26

campoNotaDing.dataset.note = 2
campoNota1.dataset.note = 9
campoNota2.dataset.note = 10
campoNota3.dataset.note = 14
campoNota4.dataset.note = 16
campoNota5.dataset.note = 17
campoNota6.dataset.note = 21
campoNota7.dataset.note = 24
campoNota8.dataset.note = 26
scaleNotesList ()
} 

else

if (select.value==='fOxalis') {


ding.dataset.note = 5
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 10
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 14
dimpleNota5.dataset.note = 17
dimpleNota6.dataset.note = 21
dimpleNota7.dataset.note = 22
dimpleNota8.dataset.note = 24

campoNotaDing.dataset.note = 5
campoNota1.dataset.note = 9
campoNota2.dataset.note = 10
campoNota3.dataset.note = 12
campoNota4.dataset.note = 14
campoNota5.dataset.note = 17
campoNota6.dataset.note = 21
campoNota7.dataset.note = 22
campoNota8.dataset.note = 24
scaleNotesList ()
} 

else

if (select.value==='eParadiseV1') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 8
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 15
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 20
dimpleNota7.dataset.note = 23
dimpleNota8.dataset.note = 27


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 8
campoNota2.dataset.note = 11
campoNota3.dataset.note = 15
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 20
campoNota7.dataset.note = 23
campoNota8.dataset.note = 27
scaleNotesList ()
} 

else

if (select.value==='eParadiseV2') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 8
dimpleNota2.dataset.note = 9
dimpleNota3.dataset.note = 11
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 20
dimpleNota7.dataset.note = 23
dimpleNota8.dataset.note = 28


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 8
campoNota2.dataset.note = 9
campoNota3.dataset.note = 11
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 20
campoNota7.dataset.note = 23
campoNota8.dataset.note = 28

scaleNotesList ()


}


else

if (select.value==='ePentatonic') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 10
dimpleNota3.dataset.note = 13
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 21
dimpleNota7.dataset.note = 23
dimpleNota8.dataset.note = 25


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 10
campoNota3.dataset.note = 13
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 21
campoNota7.dataset.note = 23
campoNota8.dataset.note = 25
scaleNotesList ()
}

else

if (select.value==='ePygmy') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 10
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 19
dimpleNota6.dataset.note = 21
dimpleNota7.dataset.note = 23
dimpleNota8.dataset.note = 25


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 10
campoNota3.dataset.note = 12
campoNota4.dataset.note = 16
campoNota5.dataset.note = 19
campoNota6.dataset.note = 21
campoNota7.dataset.note = 23
campoNota8.dataset.note = 25
scaleNotesList ()
}

else

if (select.value==='eRomanian') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 12
dimpleNota4.dataset.note = 15
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 18
dimpleNota7.dataset.note = 19
dimpleNota8.dataset.note = 23


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 11
campoNota3.dataset.note = 12
campoNota4.dataset.note = 15
campoNota5.dataset.note = 16
campoNota6.dataset.note = 18
campoNota7.dataset.note = 19
campoNota8.dataset.note = 23
scaleNotesList ()
}

else

if (select.value==='eSabye') {


ding.dataset.note = 4
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 11
dimpleNota3.dataset.note = 13
dimpleNota4.dataset.note = 15
dimpleNota5.dataset.note = 16
dimpleNota6.dataset.note = 18
dimpleNota7.dataset.note = 20
dimpleNota8.dataset.note = 23


campoNotaDing.dataset.note = 4
campoNota1.dataset.note = 9
campoNota2.dataset.note = 11
campoNota3.dataset.note = 13
campoNota4.dataset.note = 15
campoNota5.dataset.note = 16
campoNota6.dataset.note = 18
campoNota7.dataset.note = 20
campoNota8.dataset.note = 23
scaleNotesList ()
}

else

if (select.value==='dYshasavita') {


ding.dataset.note = 2
dimpleNota1.dataset.note = 9
dimpleNota2.dataset.note = 13
dimpleNota3.dataset.note = 14
dimpleNota4.dataset.note = 16
dimpleNota5.dataset.note = 18
dimpleNota6.dataset.note = 19
dimpleNota7.dataset.note = 21
dimpleNota8.dataset.note = 26


campoNotaDing.dataset.note = 2
campoNota1.dataset.note = 9
campoNota2.dataset.note = 13
campoNota3.dataset.note = 14
campoNota4.dataset.note = 16
campoNota5.dataset.note = 18
campoNota6.dataset.note = 19
campoNota7.dataset.note = 21
campoNota8.dataset.note = 26
scaleNotesList ()
}


}
 
function changePitch (){
  if (selectDing.value==='0') {preset=0}
 else if (selectDing.value==='+1semitone') {preset=1}
 else if (selectDing.value==='+2semitone') {preset=2}
 else if (selectDing.value==='+3semitone') {preset=3}
 else if (selectDing.value==='-1semitone') {preset=-1}
 else if (selectDing.value==='-2semitone') {preset=-2}


 
}


function scaleNotesList (){
    var lista = document.getElementById('listaNote')

    switch (select.value){
        case 'dKurd': lista.innerHTML= 'D3, A3, Bb3, C4, D4, E4, F4, G4, A4'; break
        case 'eAeolian': lista.innerHTML= ' E3, A3, B3, C4, D4, E4, F4, G4, A4'; break
        case 'eAkebono': lista.innerHTML= ' E3, A3, B3, C4, E4, F4, A4, B4, C5'; break
        case 'dCelticMinor': lista.innerHTML= 'D3, A3, C4, D4, E4, F4, G4, A4, C5 '; break
        case 'eBluesV1': lista.innerHTML='E3, A3, C4, D4, D#4, E4, G4, A4, C5'; break
        case 'dBluesV1': lista.innerHTML='D3, A3, C4, D4, D#4, E4, G4, A4, C5'; break
        case 'eEquinox': lista.innerHTML='E3, G3, B3, C4, D4, E4, F#4, G4, B4'; break
        case 'eHijazV1': lista.innerHTML='E3, A3, Bb3, C#4, D4, E4, F4, G4, A4'; break
        case 'dHijazV2': lista.innerHTML='D3, A3, Bb3, C#4, D4, E4, F4, G4, A4'; break
        case 'dIntegral': lista.innerHTML='D3, A3, Bb3, C4, D4, E4, F4, A4, C5'; break
        case 'eJibuk': lista.innerHTML= 'E3, B3, C#4, D4, E4, F#4, G4, A4'; break
        case 'eLaSirena': lista.innerHTML ='E3, G3, B3, C#4, D4, E4, F#4, G4, B4';break
        case 'fLowPygmy': lista.innerHTML= 'F3, G3, Ab3, C4, Eb4, F4, G4, Ab4, C5'; break
        case 'eMagicVoyage': lista.innerHTML='E3, G3, B3, D4, E4, F#4, G4, B4, D5';break
        case 'dMixolydian': lista.innerHTML='D3, A3, B3, D4, E4, F#4, G4, A4, B4';break
        case 'dMystic': lista.innerHTML='D3, A3, Bb3, D4, E4, F4, A4, C5, D5';break
        case 'fOxalis': lista.innerHTML='F3, A3, Bb3, C4, D4, F4, A4, Bb4, C5'; break
        case 'eParadiseV1': lista.innerHTML='E3, G#3, B3, D#4, E4, F#4, G#4, B4, D#5'; break
        case 'eParadiseV2': lista.innerHTML='E3, G#3, A3, B3, E4, F#4, G#4, B4, E5'; break
        case 'ePentatonic': lista.innerHTML='E3, A3, B3, C#4, E4, F#4, A4, B4, C#5'; break
        case 'ePygmy': lista.innerHTML='E3, A3, B3, C4, E4, G4, A4, B4, C5'; break;
        case 'eRomanian': lista.innerHTML='E3, A3, B3, C4, D#4, E4, F#4, G4, B4'; break
        case 'eSabye': lista.innerHTML='E3, A3, B3, C#4, D#4, E4, F#4, G#4, B4'; break
        case 'dYshasavita': lista.innerHTML='D3, A3, C#4, D4, E4, F#4, G4, A4, D5'; break

    }
}

//Cambiare SVG, da testare perchè non ripartono i controlli e non suona quando cambia e torni indietro
// var eightNotesSVG = document.createElement('div')
// var nineNotesSVG = document.createElement('div')
// eightNotesSVG.innerHTML =   '<svg id="handpanEightNotes" height="80%" width="100%" viewBox="0, 0, 100, 100">  <g id="shellItems" ><circle id="shell" cx="50" cy="50" r="49"stroke="black" stroke-width="1" fill="grey" /></g >  <g class ="notes" stroke="black" stroke-width="1" ><circle  id="campoNotaDing" class="note" data-note="2" cx="50" cy="50" r="15"  fill="white"  />  <circle id="ding" class="dimple" data-note="2" cx="50" cy="50" r="5" stroke="black" stroke-width="1" fill="grey"  />  </g>  <g class= "notes" stroke="black" stroke-width="1">       <ellipse id="campoNota1" class="note" data-note="9"cx="50" cy="85" rx="10" ry="12" transform="rotate(25,50,50)" fill="white"/>       <ellipse id="dimpleNota1" class="dimple" data-note="1"cx="50" cy="85" rx="5" ry="6" transform="rotate(25,50,50)"fill="grey"/> </g>  <g class= "notes" stroke="black" stroke-width="1" >    <ellipse id="campoNota2"class="note" data-note="2"cx="50" cy="85" rx="10" ry="12" transform="rotate(-25,50,50)" fill="white"/>    <ellipse id="dimpleNota2" class="dimple" data-note="2"cx="50" cy="85" rx="5" ry="6" transform="rotate(-25,50,50)" fill="grey"/></g>  <g class= "notes" stroke="black" stroke-width="1" >       <ellipse id="campoNota3" class="note" data-note="3"cx="50" cy="85" rx="10" ry="12" transform="rotate(76,50,50)" fill="white"/>       <ellipse id="dimpleNota3" class="dimple" data-note="3"cx="50" cy="85" rx="5" ry="6" transform="rotate(76,50,50)" fill="grey"/>  </g>  <g class= "notes" stroke="black" stroke-width="1" >  <ellipse id="campoNota4" class="note" data-note="4"cx="50" cy="85" rx="10" ry="12" transform="rotate(-76,50,50)" fill="white"/>   <ellipse id="dimpleNota4" class="dimple" data-note="4"cx="50" cy="85" rx="5" ry="6" transform="rotate(-76,50,50)" fill="grey"/></g>  <g class= "notes" stroke="black" stroke-width="1" >       <ellipse id="campoNota5" class="note" data-note="5"cx="50" cy="85" rx="10" ry="12" transform="rotate(127,50,50)" fill="white"/>       <ellipse id="dimpleNota5" class="dimple" data-note="5"cx="50" cy="85" rx="5" ry="6" transform="rotate(127,50,50)" fill="grey"/>  </g>  <g class= "notes" stroke="black" stroke-width="1">    <ellipse id="campoNota6" class="note" data-note="6"cx="50" cy="85" rx="10" ry="12" transform="rotate(-127,50,50)" fill="white"/>    <ellipse id="dimpleNota6" class="dimple" data-note="6"cx="50" cy="85" rx="5" ry="6" transform="rotate(-127,50,50)" fill="grey"/></g>   <g class= "notes" stroke="black" stroke-width="1">       <ellipse id="campoNota7" class="note" data-note="7"cx="50" cy="85" rx="10" ry="12" transform="rotate(180,50,50)" fill="white"/>       <ellipse id="dimpleNota7" class="dimple" data-note="7"cx="50" cy="85" rx="5" ry="6" transform="rotate(180,50,50)" fill="grey"/>  </g>Sorry, your browser does not support inline SVG.</svg>'
// nineNotesSVG.innerHTML =  '<svg id="handpanNineNotes" height="80%" width="100%" viewBox="0, 0, 100, 100"><g id="shellItems" >  <circle id="shell" cx="50" cy="50" r="49"stroke="black" stroke-width="1" fill="grey" /></g ><g class ="notes" stroke="black" stroke-width="1" >  <circle id="campoNotaDing" class="note" data-note="2" cx="50" cy="50" r="15"  fill="white"  />    <circle id="ding" class="dimple" data-note="2" cx="50" cy="50" r="5" stroke="black" stroke-width="1" fill="grey"  /></g><g class= "notes" stroke="black" stroke-width="1">    <ellipse id="campoNota1" class="note" data-note="9"cx="50" cy="85" rx="10" ry="12"fill="white"/>    <ellipse id="dimpleNota1" class="dimple" data-note="9"cx="50" cy="85" rx="5" ry="6" fill="grey"/></g><g class= "notes" stroke="black" stroke-width="1" > <ellipse id="campoNota2" class="note" data-note="10"cx="50" cy="85" rx="10" ry="12" transform="rotate(-45,50,50)" fill="white"/> <ellipse id="dimpleNota2" class="dimple" data-note="10"cx="50" cy="85" rx="5" ry="6" transform="rotate(-45,50,50)" fill="grey"/></g><g class= "notes" stroke="black" stroke-width="1" >    <ellipse id="campoNota3" class="note" data-note="12"cx="50" cy="85" rx="10" ry="12" transform="rotate(45,50,50)" fill="white"/>    <ellipse id="dimpleNota3"class="dimple" data-note="12"cx="50" cy="85" rx="5" ry="6" transform="rotate(45,50,50)" fill="grey"/>    <!--<text id=NotaDing x="50" y="50">D3</text>--></g><g class= "notes" stroke="black" stroke-width="1" > <ellipse id="campoNota4" class="note" data-note="14"cx="50" cy="85" rx="10" ry="12" transform="rotate(-90,50,50)" fill="white"/> <ellipse id="dimpleNota4" class="dimple" data-note="14"cx="50" cy="85" rx="5" ry="6" transform="rotate(-90,50,50)" fill="grey"/></g> <g class= "notes" stroke="black" stroke-width="1" >    <ellipse id="campoNota5" class="note" data-note="16"cx="50" cy="85" rx="10" ry="12" transform="rotate(90,50,50)" fill="white"/>    <ellipse id="dimpleNota5" class="dimple" data-note="16"cx="50" cy="85" rx="5" ry="6" transform="rotate(90,50,50)" fill="grey"/></g><g class= "notes" stroke="black" stroke-width="1"> <ellipse id="campoNota6" class="note" data-note="17"cx="50" cy="85" rx="10" ry="12" transform="rotate(-135,50,50)" fill="white"/> <ellipse id="dimpleNota6" class="dimple" data-note="17"cx="50" cy="85" rx="5" ry="6" transform="rotate(-135,50,50)" fill="grey"/></g><g class= "notes" stroke="black" stroke-width="1">    <ellipse id="campoNota7" class="note" data-note="19"cx="50" cy="85" rx="10" ry="12" transform="rotate(135,50,50)" fill="white"/>     <ellipse id="dimpleNota7" class="dimple" data-note="19"cx="50" cy="85" rx="5" ry="6" transform="rotate(135,50,50)" fill="grey"/></g><g class= "notes" stroke="black" stroke-width="1" >    <ellipse id="campoNota8" class="note" data-note="21"cx="50" cy="85" rx="10" ry="12" transform="rotate(180,50,50)" fill="white"/>    <ellipse id="dimpleNota8" class="dimple" data-note="21"cx="50" cy="85" rx="5" ry="6" transform="rotate(180,50,50)" fill="grey"/></g>Sorry, your browser does not support inline SVG.</svg>'
// var handpanSVG = document.getElementById('handpan')
//  handpanSVG.parentNode.replaceChild(eightNotesSVG, handpanSVG )






  let buffer = new Buffer(context, sounds);
  let handpanSound = buffer.getBuffer();
  
let buttons = document.querySelectorAll('.notes .note');
  buttons.forEach(button => {
    button.addEventListener('pointerdown', playHandpan.bind(button));})

let dimples = document.querySelectorAll('.notes .dimple');
dimples.forEach(dimple => {
  dimple.addEventListener('pointerdown', playHandpan.bind(dimple));})




  document.addEventListener ("keydown", function (event){
if(event.which===71)    {keyboardDataSet = ding.dataset.note; changeColorNota (ding); playKeyboard(keyboardDataSet)}
else if(event.which===66){keyboardDataSet = dimpleNota1.dataset.note; changeColorNota (dimpleNota1); playKeyboard(keyboardDataSet)}
else if(event.which===86) {keyboardDataSet = dimpleNota2.dataset.note; changeColorNota (dimpleNota2); playKeyboard(keyboardDataSet)}
else if(event.which===78) {keyboardDataSet = dimpleNota3.dataset.note; changeColorNota (dimpleNota3); playKeyboard(keyboardDataSet)}
else if(event.which===70) {keyboardDataSet = dimpleNota4.dataset.note; changeColorNota (dimpleNota4); playKeyboard(keyboardDataSet)}
else if(event.which===72) {keyboardDataSet = dimpleNota5.dataset.note; changeColorNota (dimpleNota5); playKeyboard(keyboardDataSet)}
else if(event.which===82) {keyboardDataSet = dimpleNota6.dataset.note; changeColorNota (dimpleNota6); playKeyboard(keyboardDataSet)}
else if(event.which===89) {keyboardDataSet = dimpleNota7.dataset.note; changeColorNota (dimpleNota7); playKeyboard(keyboardDataSet)}
else if(event.which===84) {keyboardDataSet = dimpleNota8.dataset.note; changeColorNota (dimpleNota8); playKeyboard(keyboardDataSet)}
})





dimples.forEach(button=> {
button.addEventListener('pointerdown', function (){
button.setAttribute("fill", '#971f23')
setTimeout(function(){button.setAttribute("fill", "gray")}, 100)
})
})

buttons.forEach(button=> {
button.addEventListener('pointerdown', function (){
button.setAttribute("fill", '#971f23') //#F5AC8B
setTimeout(function(){button.setAttribute("fill", "white")}, 100)
})
})


function changeColorNota (dimple){
dimple.setAttribute("fill", '#971f23')
setTimeout(function(){dimple.setAttribute("fill", "grey")}, 100)}


let ding = document.getElementById('ding')
let dimpleNota1 = document.getElementById('dimpleNota1')
let dimpleNota2 = document.getElementById('dimpleNota2')
let dimpleNota3 = document.getElementById('dimpleNota3')
let dimpleNota4 = document.getElementById('dimpleNota4')
let dimpleNota5 = document.getElementById('dimpleNota5')
let dimpleNota6 = document.getElementById('dimpleNota6')
let dimpleNota7 = document.getElementById('dimpleNota7')
let dimpleNota8 = document.getElementById('dimpleNota8')



let campoNotaDing = document.getElementById('campoNotaDing')
let campoNota1 = document.getElementById('campoNota1')
let campoNota2 = document.getElementById('campoNota2')
let campoNota3 = document.getElementById('campoNota3')
let campoNota4 = document.getElementById('campoNota4')
let campoNota5 = document.getElementById('campoNota5')
let campoNota6 = document.getElementById('campoNota6')
let campoNota7 = document.getElementById('campoNota7')
let campoNota8 = document.getElementById('campoNota8')


// function handleSelect(elm){
//window.location = elm.value+".html"; CAMBIA TUTTO L'URL DELLA PAGINA
//document.getElementById('frame').src = elm.value+".html";} 

      function goToPage (elm){
        window.location = elm.value;
      }



