export default function handleCSVButtonClicks(searchLabel, dataIndex, data, key) {
  var csvContent = "data:text/csv;charset=utf-8,";

  csvContent += "Search Results: " + searchLabel + '\n';

  var keyLength = key.length;

  for(var i = 0; i < keyLength; i++){
    csvContent += String(key[i]) + ',';
  }

  csvContent += '\n';

  var dataLength = dataIndex.length;

  if(dataLength != 0){
    for(var j = 0; j < dataLength; j++){
      for(var i = 0; i < keyLength; i++){
        csvContent += String(data[dataIndex[j]][key[i]]) + ',';
      }
      csvContent += '\n';
    }
  } else {
    dataLength = data.length;
    for(var j = 0; j < dataLength; j++){
      for(var i = 0; i < keyLength; i++){
        csvContent += String(data[j][key[i]]) + ',';
      }
      csvContent += '\n';
    }
  }

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");
  document.body.appendChild(link); // Required for FF

  link.click();
}
