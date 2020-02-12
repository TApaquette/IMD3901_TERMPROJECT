var drawPoints = [];


AFRAME.registerComponent( 'done',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const coordinate = document.querySelector('clickable finish');
            
            console.log('click');
           
            let selected = document.querySelectorAll(".active")
                console.log(selected.length);
            
            for(i = 0; i < 4; i++){
                let pointfound = selected[i].getAttribute('position')
                
            }
            drawPoints[0] = selected[0].getAttribute('position');
            drawPoints[1] = selected[1].getAttribute('position');
            drawPoints[2] = selected[2].getAttribute('position');
            drawPoints[3] = selected[3].getAttribute('position');

            console.log(drawPoints[0]);
            console.log(drawPoints[1]);
            console.log(drawPoints[2]);
            console.log(drawPoints[3]);


      
            
           
           
            });



        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
         
        });

    },        

})
//this.el.getAttribute("position")//
