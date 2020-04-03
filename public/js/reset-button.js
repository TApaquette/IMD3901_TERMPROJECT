AFRAME.registerComponent( 'reset-button',{

    init : function()
    {
        function resetevent(event){
            console.log("VR click");
            let ball = document.querySelector("#player_ball");
           
    
            if (ball.hasAttribute('dynamic-body')){
                ball.removeAttribute('dynamic-body');
                ball.setAttribute('position', "-1.6 -4.75 3.8");
                ball.setAttribute('static-body', '');
            }
    
            
            else if(ball.hasAttribute('static-body')){
                ball.setAttribute('position', "-1.6 -4.75 3.8");
            }
        }

        console.log('init component');

        const Context_AF = this;
        
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

            document.querySelector('#leftController').addEventListener('triggerdown', resetevent);

            document.querySelector('#rightController').addEventListener('triggerdown', resetevent);
            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);

            document.querySelector('#leftController').removeEventListener('triggerdown', resetevent);

            document.querySelector('#rightController').removeEventListener('triggerdown', resetevent);
        });
        
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            let ball = document.querySelector("#player_ball");
       

            if (ball.hasAttribute('dynamic-body')){
                ball.removeAttribute('dynamic-body');
                ball.setAttribute('position', "-1.6 -4.75 3.8");
                ball.setAttribute('static-body', '');
            }

            
            else if(ball.hasAttribute('static-body')){
                ball.setAttribute('position', "-1.6 -4.75 3.8");
            }
                

            
        });
    },

})