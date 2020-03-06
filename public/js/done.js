AFRAME.registerComponent( 'done',{


    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
        Context_AF.el.addEventListener('click', function(event) {
             Context_AF.drawPoints = [];

            const coordinate = document.querySelector('clickable finish');
            
            console.log('click');
           
            let selected = document.querySelectorAll(".active")
                console.log(selected.length);
            
            for(i = 0; i < 4; i++){
                let pointfound = selected[i].getAttribute('position') 
            }

            selected[0].object3D.position; //three.js

            Context_AF.drawPoints[0] = selected[0].getAttribute('position');
            Context_AF.drawPoints[1] = selected[1].getAttribute('position');
            Context_AF.drawPoints[2] = selected[2].getAttribute('position');
            Context_AF.drawPoints[3] = selected[3].getAttribute('position');

            console.log(Context_AF.drawPoints[0]);
            console.log(Context_AF.drawPoints[1]);
            console.log(Context_AF.drawPoints[2]);
            console.log(Context_AF.drawPoints[3]);

            var pointOne = Context_AF.drawPoints[0].x + " " + Context_AF.drawPoints[0].y + " " + Context_AF.drawPoints[0].z;
            var pointTwo = Context_AF.drawPoints[1].x + " " + Context_AF.drawPoints[1].y + " " + Context_AF.drawPoints[1].z;
            var pointThree = Context_AF.drawPoints[2].x + " " + Context_AF.drawPoints[2].y + " " + Context_AF.drawPoints[2].z;
            var pointFour = Context_AF.drawPoints[3].x + " " + Context_AF.drawPoints[3].y + " " + Context_AF.drawPoints[3].z;

            Context_AF.verts = pointOne + "," + pointTwo + "," + pointThree + "," + pointFour;

            });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1); 
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },        
})

