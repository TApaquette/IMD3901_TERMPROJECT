AFRAME.registerComponent( 'grabbing',{


    init : function()
    {
        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
         
        });
        
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");

            let camera = document.querySelector("#camera");
            Context_AF.el.object3D.position.set(0,0, -10);

            camera.object3D.add(Context_AF.el.object3D);

            
        });

    },
})