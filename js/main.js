AOS.init();

function ShowHide(eleName, btnShow) {
    var x = document.getElementById(eleName);
    x.style.display = "block";
    var y = document.getElementById(btnShow);
    y.style.display = "none";
}

var xmlString;
var doc;
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
              xmlString = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

function loadXML() {
  readTextFile("eps/s01/ipod.xml");
  if(window.ActiveXObject)  
  {  
      doc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
      doc.async = 'false';  
      doc.loadXML(xmlString);  
  }  
  else  
  {  
      var parser = new DOMParser();  
      doc = parser.parseFromString(xmlString, 'text/xml'); // For Firefox, Chrome etc  
  }  
  getDetails();
  }

  function getDetails() {
    var x = doc.getElementsByTagName("item");  
  for (i = 0;i < x.length; i++)  
  {  
    alert(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);   
    alert(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);  
    alert(x[i].getElementsByTagName("itunes:image")[0].getAttribute('href') ); 
  }  
  }

window.onload = loadXML;


/*
function xmlToJson(xml) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.ionibbles.com/eps/s01/ipod.xml"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  xmlString = await response.text();

    var obj = {};
  
    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      obj = xml.nodeValue;
    }
  
    var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
        return text + node.nodeValue;
      }, "");
    } else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }

  const response
  const xmlString;
  var XmlNode;

  function loadXML() {
    response = await fetch('http://www.ionibbles.com/eps/s01/ipod.xml');
    xmlString = await response.text();
    XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
    xmlToJson(XmlNode);
  }
*/
  
  


   