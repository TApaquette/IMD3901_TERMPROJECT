AFRAME.registerComponent( 'go-button',{


    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
         
        });
        
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            let ball = document.querySelector("#player_ball");
            if (ball.hasAttribute('static-body')){
                ball.removeAttribute('static-body');
                ball.setAttribute('dynamic-body', 'mass: 1');
                
            }

            else if(ball.hasAttribute('dynamic-body')){
                ball.removeAttribute('dynamic-body');
                ball.setAttribute('static-body', '');
            }

            
        });
    },
})