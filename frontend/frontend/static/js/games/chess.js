function SetupBoard(){
	var chessGrid = document.getElementById("chess-grid").getElementsByTagName('table')[0];

	for(i=0; i<8; i++){
		var row = document.createElement("tr");
		for(j=0; j<8; j++){
			var cell = document.createElement("td");
			cell.classList.add("cell");
			if( ( i%2==0 && j%2==0 ) || ( i%2!=0 && j%2!=0 ) ){
				cell.classList.add("white-cell");
			}else{
				cell.classList.add("black-cell");
			}
			cell.setAttribute("id", i+'-'+j);
			row.appendChild(cell);
		}
		chessGrid.appendChild(row);
	}
}

SetupBoard();

$(".cell").click(function(){
	alert("clicked cell "+this.getAttribute("id"));
});