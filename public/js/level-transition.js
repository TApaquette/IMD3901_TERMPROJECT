let level = 1;

AFRAME.registerComponent( 'level-transition',{
    
    init : function()
    {

        console.log("level transition init")

        

    },
    tick : function () 
    {
        let ball = document.getElementById("player_ball");
        let ballPos = ball.getAttribute("position");

        let L2block1 = document.getElementById("levelTwo_1"); 
        let L2block1Pos = L2block1.getAttribute("position");

        let L2block2 = document.getElementById("levelTwo_2"); 
        let L2block2Pos = L2block2.getAttribute("position");

        let L3block1 = document.getElementById("levelThree_1"); 
        let L3block1Pos = L3block1.getAttribute("position");

        let L4block1 = document.getElementById("levelFour_1"); 
        let L4block1Pos = L4block1.getAttribute("position");

        let L4block2 = document.getElementById("levelFour_2"); 
        let L4block2Pos = L4block2.getAttribute("position");
        
        let L4block3 = document.getElementById("levelFour_3"); 
        let L4block3Pos = L4block3.getAttribute("position");

        let L4block4 = document.getElementById("levelFour_4"); 
        let L4block4Pos = L4block4.getAttribute("position");

        let L4block5 = document.getElementById("levelFour_5"); 
        let L4block5Pos = L4block5.getAttribute("position");


        if (ballPos.x < -0.37 && ballPos.x > -0.47 && ballPos.y < -5.73){
            console.log("in the bucket: ", ballPos);

            ball.removeAttribute('dynamic-body');
            ball.setAttribute('position', "-1.6 -4.75 3.8");
            ball.setAttribute('static-body', '');

            if (level == 1){
                L2block1Pos.z = 3.77;
                L2block2Pos.z = 3.77;

                level+=1
            }
            else if (level == 2){
                L2block1Pos.z = 0;
                L2block2Pos.z = 0;

                L3block1Pos.z = 3.77;

                level+=1
            }
            else if (level == 3){
                L3block1Pos.z = 0;

                L4block1Pos.z = 3.77;
                L4block2Pos.z = 3.77;
                L4block3Pos.z = 3.77;
                L4block4Pos.z = 3.77;
                L4block5Pos.z = 3.77;

                level+=1
            }
            console.log("counter: ", level);
        }
        else{
            
        }
    }


});