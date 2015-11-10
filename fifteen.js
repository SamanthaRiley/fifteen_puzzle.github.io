var empty= [300,300];
var pieces = [];
//empty.className= 'puzzlepiece';
//empty.style.top= '300px';

window.onload= function() {
    var puzzle= document.getElementById('puzzlearea');
    pieces= puzzle.children;

pieces[0].className= 'puzzlepiece';
pieces[0].style.left= '0px';
pieces[0].style.top= '0px';
pieces[0].style.backgroundPosition= '0px 0px';

pieces[1].className= 'puzzlepiece';
pieces[1].style.left= '100px';
pieces[1].style.top= '0px';
pieces[1].style.backgroundPosition= '-100px, 0px';

pieces[2].className= 'puzzlepiece';
pieces[2].style.left= '200px';
pieces[2].style.top= '0px';
pieces[2].style.backgroundPosition= '-200px 0px';

pieces[3].className= 'puzzlepiece';
pieces[3].style.left= '300px';
pieces[3].style.top= '0px';
pieces[3].style.backgroundPosition= '-300px 0px';

pieces[4].className= 'puzzlepiece';
pieces[4].style.left= '0px';
pieces[4].style.top= '100px';
pieces[4].style.backgroundPosition= '0px 300px';

pieces[5].className= 'puzzlepiece';
pieces[5].style.left= '100px';
pieces[5].style.top= '100px';
pieces[5].style.backgroundPosition= '-100px, 300px';

pieces[6].className= 'puzzlepiece';
pieces[6].style.left= '200px';
pieces[6].style.top= '100px';
pieces[6].style.backgroundPosition= '-200px, 300px';

pieces[7].className= 'puzzlepiece';
pieces[7].style.left= '300px';
pieces[7].style.top= '100px';
pieces[7].style.backgroundPosition= '-300px, 300px';

pieces[8].className= 'puzzlepiece';
pieces[8].style.left= '0px';
pieces[8].style.top= '200px';
pieces[8].style.backgroundPosition= '0px 200px';

pieces[9].className= 'puzzlepiece';
pieces[9].style.left= '100px';
pieces[9].style.top= '200px';
pieces[9].style.backgroundPosition= '-100px, 200px';

pieces[10].className= 'puzzlepiece';
pieces[10].style.left= '200px';
pieces[10].style.top= '200px';
pieces[10].style.backgroundPosition= '-200px, 200px';

pieces[11].className= 'puzzlepiece';
pieces[11].style.left= '300px';
pieces[11].style.top= '200px';
pieces[11].style.backgroundPosition= '-300px, 200px';

pieces[12].className= 'puzzlepiece';
pieces[12].style.left= '0px';
pieces[12].style.top= '300px';
pieces[12].style.backgroundPosition= '0px, 100px';

pieces[13].className= 'puzzlepiece';
pieces[13].style.left= '100px';
pieces[13].style.top= '300px';
pieces[13].style.backgroundPosition= '-100px, 100px';

pieces[14].className= 'puzzlepiece';
pieces[14].style.left= '200px';
pieces[14].style.top= '300px';
pieces[14].style.backgroundPosition= '-200px, 100px';


document.getElementById("puzzlearea").style.backgroundImage= 'background.jpg';

};
