var stringDMin2Date = function(s) {
    var year = parseInt(s.substr(0, 4));
    var month = parseInt(s.substr(4, 2))-1;
    var day = parseInt(s.substr(6, 2));
    var hours = parseInt(s.substr(9, 2));
    var minutes = parseInt(s.substr(11, 2));
    var dt = new Date(year, month, day, hours, minutes);
    return dt;
}

var pad2= function(i) {
    if (i < 9) return "0" + i;
    else return i.toString();
}

var Date2stringDMin = function (dt) {
    var year = (1900+dt.getYear()).toString();
    var month = pad2((dt.getMonth() + 1).toString());
    var day = pad2((dt.getDate()).toString());
    var hours = pad2((dt.getHours()).toString());
    var minutes = pad2((dt.getMinutes()).toString());
    return year+month+day+"T"+hours+minutes;
}