import React from 'react';

export default function generateRowData(product, key, searchedIndexes, drag){
  let row = [];
  let rowData = [];
  var datalength = searchedIndexes.length;
  var keylength = key.length;

  for (var i = 0; i < datalength; i++){
    var tempData = [];
    for(var j = 0; j < keylength; j++){
      if(product[searchedIndexes[i]]){
        tempData.push(<td>{product[searchedIndexes[i]][key[j]]}</td>);
      }
    }

    rowData.push(<tr draggable="true" onDragStart = {drag}  className="tr-hover-class">{tempData}</tr>);

  }


  return (rowData);

}
