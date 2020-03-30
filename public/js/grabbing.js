AFRAME.registerComponent( 'grabbing',{


    init : function()
    {
        const Context_AF = this;

        let shapePos = Context_AF.el.getAttribute('position');

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(0.12, 0.12, 0.12);
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(0.1, 0.1, 0.1);
        });

        Context_AF.el.addEventListener('click', function(event) {
            console.log("clickewewew" + shapePos);
            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#camera");

            if(Context_AF.el.getAttribute('class') === "clickable notgrab grabbable"){
                Context_AF.el.object3D.position.set(0,0, -1);
                Context_AF.el.setAttribute('class', 'clickable grab grabbable');

                camera.object3D.add(Context_AF.el.object3D);
            }

            else if(Context_AF.el.getAttribute('class') === "clickable grab grabbable"){
                var position = new THREE.Vector3();
                console.log(this.object3D.getWorldPosition(position));

                Context_AF.el.object3D.position.set(position.x, position.y, 3.77);
                Context_AF.el.object3D.rotation.set(0, 0, 0);

                spot.object3D.add(Context_AF.el.object3D);
                Context_AF.el.setAttribute('class', 'clickable notgrab grabbable');  
            }

            
        });

    }
})