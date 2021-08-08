const king = "&#9818;";
const queen = "&#9819;";
const castle = "&#9820;";
const kinght = "&#9822;";
const bishop = "&#9821;";
const pawn = "&#9823;";

const whitePieceColor = "rgb(180,180,180)";
const blackPieceColor = "rgb(70,70,70)";

function ReturnColorBasedOnRowNumber(i){
	if(i<=4){
		return blackPieceColor;
	}else{
		return whitePieceColor;
	}
}

function SetupPieces(piece, j, iList=[0,7]){
	for(i=0; i<iList.length; i++){
		var cell = document.getElementById(iList[i]+'-'+j);
		cell.innerHTML = piece;
		cell.style.color = ReturnColorBasedOnRowNumber(iList[i]);
	}
}

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

	var pawnSetupList = [1,6];
	for(j=0; j<8; j++){
		SetupPieces(pawn, j, pawnSetupList);
	}

	SetupPieces(castle, 0);
	SetupPieces(castle, 7);

	SetupPieces(kinght, 1);
	SetupPieces(kinght, 6);

	SetupPieces(bishop, 2);
	SetupPieces(bishop, 5);	

	SetupPieces(king, 4);
	SetupPieces(queen, 3);
}

SetupBoard();

$(".cell").click(function(){
	alert("clicked cell "+this.getAttribute("id"));
});