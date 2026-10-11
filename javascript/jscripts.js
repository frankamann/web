<!-- Begin

// Array Wochentag
DayName = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");


// Funktionen für Anzeigen Tag Datum + dynamische Uhrzeit

function DisplayTime()
{
 var SysDate = new Date();
 var Day = SysDate.getDate();
 var MonthNow = SysDate.getMonth() + 1;
 var YearNow = SysDate.getFullYear();
 var HoursNow = SysDate.getHours();
 var MinuteNow = SysDate.getMinutes();
 var Seconds = SysDate.getSeconds();
 var DOW = SysDate.getDay();

 //  für zweistellige Anzeige
 var firstDay  = ((Day < 10) ? "0" : "");
 var firstMonth  = ((MonthNow < 10) ? ".0" : ".");
 var firstHour  = ((HoursNow < 10) ? "0" : "");
 var firstMinute  = ((MinuteNow < 10) ? ":0" : ":");
 var firstSecond  = ((Seconds < 10) ? ":0" : ":");


 // Die 3 Fragmente für die Anzeige Wochentag Datum Zeit

 // aktuelles Datum
 var DateNow =  firstDay + Day + firstMonth + MonthNow  + "." + YearNow + " //";

 // aktuelle Zeit
 var TimeNow = firstHour + HoursNow + firstMinute + MinuteNow + firstSecond + Seconds;



DarstellungOption = 4

switch (DarstellungOption) {
  case 1:
    // Anzeige der Zeit
    var DispString = TimeNow;
    break;
  case 2:
    // Anzeige Datum + Zeit
    var DispString = DateNow + " &nbsp;" + TimeNow;
    break;
  case 3:
    // Anzeige Wochentag + Zeit
    var DispString = DayName[DOW] + " &nbsp;" + TimeNow;
    break;
  case 4:
    // Anzeige Wochentag + Datum + Zeit
    var DispString = DayName[DOW] + " " + DateNow + " &nbsp;" + TimeNow;
    break;
    }

document.getElementById("ZeitAnzeige").innerHTML = DispString;

setTimeout("DisplayTime()", 1000);
}

window.setTimeout('DisplayTime()',1000);

// -->


