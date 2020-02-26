AFRAME.registerComponent( 'go-button',{


    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            let ball = document.querySelector("#player_ball");
            ball.removeAttribute('static-body');
            ball.setAttribute('dynamic-body', 'mass: 1')
        });
    },
})