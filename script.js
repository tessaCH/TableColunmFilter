var checkMulti = document.getElementById('MultiCheck'); //checkboxID of controling single or multiple filt functions
var selections= [['listID', 1],['Will', 10],['Booking', 11],['Schedule', 6],['Msg', 12]];//ColumnID&ColNum of all seletions
var tableParam = ["stored", 2, 1] //tableID, headerNum, footerNum of assigned table 指定表格的資訊(表格ID,表頭行數,表尾行數) 

function doFilter(tableParam, columnID, colNum){//column filter childfuction(columnID, colNum)篩選有值的(欄ID, 第幾列)
    var storeId = document.getElementById(tableParam[0]);//獲取table的id標識  
    var rowsLength = storeId.rows.length;//表格總共有多少行  
    var key = document.getElementById(columnID).value;//獲取輸入框的值
    for(var i=tableParam[1];i<rowsLength-tableParam[2];i++){//按表的行數進行迴圈，本例第一行是標題，所以i=1，從第二行開始篩選（從0數起)，總行數需扣未篩選的兩行
        var searchText = storeId.rows[i].cells[colNum].innerHTML;//取得table行，列的值
        if(!searchText.match(key)){//用match函式進行篩選，如果input的值，即變數 key的值為空，返回的是ture
           storeId.rows[i].style.display='none';//隱藏行操作  
        }
    }
}

function OnClearSelection(selections,columnID){//Cancel previous selections, remain the new  取消前次的篩選項目
	selections.forEach(function(element){
		if(element[0]!==columnID){
			document.getElementById(element[0]).selectedIndex = 0;
		}
	});
}

function OnDisplayAll(tableParam){//showFullTable顯示完整表格
	var storeId = document.getElementById(tableParam[0]);
  var rowsLength = storeId.rows.length;//表格總共有多少行
  for(var i=0;i<rowsLength;i++){//按表的行數進行迴圈，本例第一行是標題，所以i=1，從第二行開始篩選（從0數起)
    storeId.rows[i].style.display='';
  }
}

function resetTable(){ //reset table and selections重設表格為原始狀態
	OnDisplayAll();
	OnClearSelection();
}

function Onfilt(tableParam,columnID, colNum){//single-slection column filter(columnID, colNum) with status reset單選項篩選(ID, 第幾列)
	if(!checkMulti.checked){//if checkMulti checkobx checked, disable this function若多重篩選啟用，則關閉功能		
		resetTable();
		doFilter(tableParam,columnID, colNum);
  }
}

function OnMultifilt(tableParam,selections){//multi-selection column filter(use多選項篩選(ID, 第幾列)
    OnDisplayAll();
    selections.forEach(function(element){        
       	doFilter(tableParam,element[0], element[1]);
	});
}

function OnClearSelection(columnID){//Cancel previous selections, remain the new  取消前次的篩選項目
	selections.forEach(function(element){
		if(element[0]!==columnID){
			document.getElementById(element[0]).selectedIndex = 0;
		}
	});
}

//functions for assinged global value of tableParam & selections
function doFilter(columnID, colNum){
  doFilter(tableParam, columnID, colNum)
}

function OnDisplayAll(){
  OnDisplayAll(tableParam){
}
function Onfilt(columnID, colNum){
	Onfilt(tableParam,columnID, colNum);
}

function Onfilt(columnID, colNum){
  Onfilt(tableParam,columnID, colNum);
}

function OnMultifilt(selections){
  OnMultifilt(tableParam,selections);
}

