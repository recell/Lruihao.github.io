var game={data:[],RN:4,CN:4,score:0,state:0,RUNNING:1,GAMEOVER:0,getGridsHtml:function(){for(var t=0,a=[];t<this.RN;t++){for(var i=0;i<this.CN;a.push(""+t+i++));}return'<div id="g'+a.join('" class="grid"></div><div id="g')+'" class="grid"></div>'},getCellsHtml:function(){for(var t=0,a=[];t<this.RN;t++){for(var i=0;i<this.CN;a.push(""+t+i++));}return'<div id="c'+a.join('" class="cell"></div><div id="c')+'" class="cell"></div>'},init:function(){var t=document.getElementById("gridPanel");t.style.width=116*this.CN+16+"px";t.style.height=116*this.RN+16+"px";t.innerHTML=this.getGridsHtml()+this.getCellsHtml()},start:function(){this.init();this.state=this.RUNNING;for(var t=0;t<this.RN;t++){this.data[t]=[];for(var a=0;a<this.CN;a++){this.data[t][a]=0}}this.score=0;this.randomNum();this.randomNum();this.updateView()},isGameOver:function(){for(var t=0;t<this.data.length;t++){for(var a=0;a<this.data[t].length;a++){if(this.data[t][a]==0){return false}else{if(a!=this.data[t].length-1&&this.data[t][a]==this.data[t][a+1]){return false}else if(t!=this.data.length-1&&this.data[t][a]==this.data[t+1][a]){return false}}}}this.state=this.GAMEOVER;return true},randomNum:function(){if(!this.isFull()){while(true){var t=parseInt(Math.random()*this.RN);var a=parseInt(Math.random()*this.CN);if(this.data[t][a]==0){this.data[t][a]=Math.random()<.5?2:4;break}}}},isFull:function(){for(var t=0;t<this.data.length;t++){for(var a=0;a<this.data[t].length;a++){if(this.data[t][a]==0){return false}}}return true},updateView:function(){for(var t=0;t<this.data.length;t++){for(var a=0;a<this.data[t].length;a++){var i=document.getElementById("c"+t+a);if(this.data[t][a]!=0){i.innerHTML=this.data[t][a];i.className="cell n"+this.data[t][a]}else{i.className="cell";i.innerHTML=""}}}var e=document.getElementById("score");e.innerHTML=this.score;var s=document.getElementById("gameover");if(this.state==this.GAMEOVER){var e=document.getElementById("finalScore");e.innerHTML=this.score;s.style.display="block"}else{s.style.display="none"}},moveLeft:function(){var t=this.data.toString();for(var a=0;a<this.data.length;a++){this.moveLeftInRow(a)}var i=this.data.toString();if(t!=i){this.randomNum();this.isGameOver();this.updateView()}},moveLeftInRow:function(t){for(var a=0;a<this.data[t].length-1;a++){var i=this.getRightNext(t,a);if(i==-1){break}else{if(this.data[t][a]==0){this.data[t][a]=this.data[t][i];this.data[t][i]=0;a--}else if(this.data[t][a]==this.data[t][i]){this.data[t][a]*=2;this.data[t][i]=0;this.score+=this.data[t][a]}}}},getRightNext:function(t,a){for(var i=a+1;i<this.data[t].length;i++){if(this.data[t][i]!=0){return i}}return-1},moveRight:function(){var t=this.data.toString();for(var a=0;a<this.data.length;a++){this.moveRightInRow(a)}var i=this.data.toString();if(t!=i){this.randomNum();this.isGameOver();this.updateView()}},moveRightInRow:function(t){for(var a=this.data[t].length-1;a>0;a--){var i=this.getLeftPrev(t,a);if(i==-1){break}else{if(this.data[t][a]==0){this.data[t][a]=this.data[t][i];this.data[t][i]=0;a++}else if(this.data[t][a]==this.data[t][i]){this.data[t][a]*=2;this.data[t][i]=0;this.score+=this.data[t][a]}}}},getLeftPrev:function(t,a){for(var i=a-1;i>=0;i--){if(this.data[t][i]!=0){return i}}return-1},moveUp:function(){var t=this.data.toString();for(var a=0;a<this.CN;a++){this.moveUpInCol(a)}var i=this.data.toString();if(t!=i){this.randomNum();this.isGameOver();this.updateView()}},moveUpInCol:function(t){for(var a=0;a<this.data.length-1;a++){var i=this.getDownNext(a,t);if(i==-1){break}else{if(this.data[a][t]==0){this.data[a][t]=this.data[i][t];this.data[i][t]=0;a--}else if(this.data[a][t]==this.data[i][t]){this.data[a][t]*=2;this.data[i][t]=0;this.score+=this.data[a][t]}}}},getDownNext:function(t,a){for(var i=t+1;i<this.data.length;i++){if(this.data[i][a]!=0){return i}}return-1},moveDown:function(){var t=this.data.toString();for(var a=0;a<this.CN;a++){this.moveDownInCol(a)}var i=this.data.toString();if(t!=i){this.randomNum();this.isGameOver();this.updateView()}},moveDownInCol:function(t){for(var a=this.data.length-1;a>0;a--){var i=this.getUpPrev(a,t);if(i==-1){break}else{if(this.data[a][t]==0){this.data[a][t]=this.data[i][t];this.data[i][t]=0;a++}else if(this.data[a][t]==this.data[i][t]){this.data[a][t]*=2;this.data[i][t]=0;this.score+=this.data[a][t]}}}},getUpPrev:function(t,a){for(var i=t-1;i>=0;i--){if(this.data[i][a]!=0){return i}}return-1}};window.onload=function(){game.start();document.onkeydown=function(){if(game.state==game.RUNNING){var t=window.event||arguments[0];if(t.keyCode==37){game.moveLeft()}else if(t.keyCode==39){game.moveRight()}else if(t.keyCode==38){game.moveUp()}else if(t.keyCode==40){game.moveDown()}}}};