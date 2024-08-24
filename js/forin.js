var aProperty;
document.write("navigation object properties<br/>");
for(aProperty in navigator){
    document.write(aProperty);
    document.write("<br/>");
}
document.write("existing from loop!");