var preload=document.getElementById('loading');
function load_body(){
    document.getElementById('loading').style.display="none";
    
}
 
  
  
  // varibales
  var player_1=document.getElementById('player_1');
  var player_2=document.getElementById('player_2');

 var player_name1=document.getElementById('player_name1');
 var player_name2=document.getElementById('player_name2');

 var player_name1_head=document.getElementById('player_name1_head');
 var player_name2_head=document.getElementById('player_name2_head');

 var players=document.getElementById('players');
 var error_msg=document.getElementById('error_msg');

  var show_chance=document.getElementById('show_chance');
var game_board=document.getElementById('game_board');
 var score_board=document.getElementById('score_board');

 var score=document.getElementById('score');

var player_name=document.getElementById('player_name');
//  var rounds=document.getElementById('rounds');
//  var crackers=document.getElementById('crackers');
 
// variables ends

// function add_options()
// {
  
 
// for(var i=1;i<=7;i++)
// {
//   var opt=document.createElement('option');
//    opt.appendChild( document.createTextNode(i) );
//   opt.value = i; 
//   rounds.add(opt); 
// }

 
// }






function show(){
  
   if(player_1.value=="" && player_2.value!=""){
        error_msg.innerHTML="Enter Player 1 Name";
   }
   else if(player_2.value=="" && player_1.value!=""){
    error_msg.innerHTML="Enter Player 2 Name";
   }
   else if(player_1.value=="" && player_2.value==""){
    error_msg.innerHTML="Enter Player Names";
    }
    // else if(rounds.value=="No value"){
    //   error_msg.innerHTML="Select rounds";
    // }
   else if(player_1.value!="" && player_2.value!=""){
     player_name1.innerHTML=player_1.value;
    player_name2.innerHTML=player_2.value;

    player_name1_head.innerHTML=player_1.value;
    player_name2_head.innerHTML=player_2.value;

    players.style.display='none';
    show_chance.innerHTML=player_1.value+"'s Chance";

    game_board.style.display='block';

    game_stat.style.visibility='visible';

    score_board.style.display='block';
    player_name.style.display='block';
    
} 



}
var counter=0;
function player_win(val1,val2){
  counter++;

  
  var totalrows=score.rows.length;
  var ss=score.insertRow();
        ss.insertCell(0)
        ss.cells[0].innerHTML=totalrows+1;

        ss.insertCell(1)
        ss.cells[1].innerHTML=val1;

        ss.insertCell(2)
        ss.cells[2].innerHTML=val2;

console.log(counter);


       
}



// this function is to check the winner 
function game_play(){


  var b1, b1, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;
var game_stat=document.getElementById('game_stat');



// checking of player 1 starts


  if((b1=='X' || b1=='x') && (b2=='X' || b2=='x') && (b3=='X' || b3=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        player_win(1,0);
  }

  else if((b4=='X' || b4=='x') && (b5=='X' || b5=='x') && (b6=='X' || b6=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
   
    document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        player_win(1,0);
  }

  else if((b7=='X' || b7=='x') && (b8=='X' || b8=='x') && (b9=='X' || b9=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        player_win(1,0);
       
  }

  else if((b1=='X' || b1=='x') && (b5=='X' || b5=='x') && (b9=='X' || b9=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

   
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;

        player_win(1,0);
  }

  else if((b3=='X' || b3=='x') && (b5=='X' || b5=='x') && (b7=='X' || b7=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

   
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        player_win(1,0);
       
  }

  else if((b1=='X' || b1=='x') && (b4=='X' || b4=='x') && (b7=='X' || b7=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b9").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        player_win(1,0);
       
  }

  else if((b3=='X' || b3=='x') && (b6=='X' || b6=='x') && (b9=='X' || b9=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b7").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        player_win(1,0);
       
  }

  else if((b2=='X' || b2=='x') && (b5=='X' || b5=='x') && (b8=='X' || b8=='x'))
  {
    game_stat.innerHTML=player_1.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        player_win(1,0);
       
  }

  // checking of player 1 ends


  // checking of player 2 start
  
  if((b1=='0') && (b2=='0') && (b3=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        player_win(0,1);
  }

  else if((b4=='0') && (b5=='0') && (b6=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
   
    document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        player_win(0,1);
        
  }

  else if((b7=='0') && (b8=='0') && (b9=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        player_win(0,1);
        
  }

  else if((b1=='0') && (b5=='0') && (b9=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

   
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        player_win(0,1);
        
  }

  else if((b3=='0') && (b5=='0') && (b7=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

   
   
    document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        player_win(0,1);
        
  }

  else if((b1=='0') && (b4=='0') && (b7=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b9").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        player_win(0,1);
        
  }

  else if((b3=='0') && (b6=='0') && (b9=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b7").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        player_win(0,1);
        
  }

  else if((b2=='0') && (b5=='0') && (b8=='0'))
  {
    game_stat.innerHTML=player_2.value + " Won";
    game_stat.style.color='red';
   

    

    
    document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        player_win(0,1);
        
  }

  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
        b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
          show_chance.innerHTML = "!!! MATCH TIE !!!";
          show_chance.style.color='red'
          player_win(0,0);
          game_stat.innerHTML="Nobody Won";
            
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
          show_chance.innerHTML = player_1.value+"'s Chance";
        }
        else {
          show_chance.innerHTML = player_2.value+"'s Chance";
        }
    }

show_chance.style.color='black';
}

// check the winner ends



// this is to reset the game_board
function reset(){

  var b1, b1, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1");
  b2 = document.getElementById("b2");
  b3 = document.getElementById("b3");
  b4 = document.getElementById("b4");
  b5 = document.getElementById("b5");
  b6 = document.getElementById("b6");
  b7 = document.getElementById("b7");
  b8 = document.getElementById("b8");
  b9 = document.getElementById("b9");

 b1.value='';
 b1.disabled=false;

 b2.value='';
 b2.disabled=false;

 b3.value='';
 b3.disabled=false;

 b4.value='';
 b4.disabled=false;

 b5.value='';
 b5.disabled=false;

 b6.value='';
 b6.disabled=false;

 b7.value='';
 b7.disabled=false;

 b8.value='';
 b8.disabled=false;

 b9.value='';
 b9.disabled=false;


 show_chance.innerHTML=player_1.value+"'s Chance";
 game_stat.innerHTML="";
 flag=1;
}

// reset the game_board ends

function new_game(){
  location.reload();
}

// all these functions are to enter the values of X and 0
flag=1;
function fun1(){
        if (flag == 1) {
          document.getElementById("b1").value = "X";
          document.getElementById("b1").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b1").value = "0";
          document.getElementById("b1").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun2(){
        if (flag == 1) {
          document.getElementById("b2").value = "X";
          document.getElementById("b2").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b2").value = "0";
          document.getElementById("b2").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}


function fun3(){
        if (flag == 1) {
          document.getElementById("b3").value = "X";
          document.getElementById("b3").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b3").value = "0";
          document.getElementById("b3").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun4(){
          if (flag == 1) {
          document.getElementById("b4").value = "X";
          document.getElementById("b4").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b4").value = "0";
          document.getElementById("b4").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun5(){
        if (flag == 1) {
          document.getElementById("b5").value = "X";
          document.getElementById("b5").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b5").value = "0";
          document.getElementById("b5").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun6(){
        if (flag == 1) {
          document.getElementById("b6").value = "X";
          document.getElementById("b6").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b6").value = "0";
          document.getElementById("b6").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun7(){
        if (flag == 1) {
          document.getElementById("b7").value = "X";
          document.getElementById("b7").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b7").value = "0";
          document.getElementById("b7").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun8(){
        if (flag == 1) {
          document.getElementById("b8").value = "X";
          document.getElementById("b8").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b8").value = "0";
          document.getElementById("b8").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}

function fun9(){
        if (flag == 1) {
          document.getElementById("b9").value = "X";
          document.getElementById("b9").disabled = true;
          flag = 0;
          show_chance.innerHTML=player_2.value+"'s Chance"
      }
      else {
          document.getElementById("b9").value = "0";
          document.getElementById("b9").disabled = true;
          flag = 1;
          show_chance.innerHTML=player_1.value+"'s Chance"
      }
      
}
// enter the values of X and 0 ends


