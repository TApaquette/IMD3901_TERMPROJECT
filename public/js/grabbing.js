AFRAME.registerComponent( 'grabbing',{


    init : function()
    {
        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(0.12, 0.12, 0.12);

            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(0.1, 0.1, 0.1);
         
        });
        
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#camera");

            if(Context_AF.el.getAttribute('class') === "clickable notgrab"){
                Context_AF.el.object3D.position.set(0,0, -1);
                Context_AF.el.setAttribute('class', 'clickable grab');

                camera.object3D.add(Context_AF.el.object3D);
            }

            else if(Context_AF.el.getAttribute('class') === "clickable grab"){
                var position = new THREE.Vector3();
                console.log(this.object3D.getWorldPosition(position));

                Context_AF.el.object3D.position.set(position.x, position.y, 3.77);
                Context_AF.el.object3D.rotation.set(0, 0, 0);

                spot.object3D.add(Context_AF.el.object3D);
                Context_AF.el.setAttribute('class', 'clickable notgrab');             
            }

            this.object3D.getWorldPosition(position)
            if (Context_AF.el.object3D.position.x < -0.25 && Context_AF.el.object3D.position.x > -1.7 && Context_AF.el.object3D.position.y < -6.3 && Context_AF.el.object3D.position.z < 4 && Context_AF.el.object3D.position.z > 3){
                console.log("in the nono zone: ", Context_AF.el.object3D.position)
                Context_AF.el.object3D.parentNode.removeChild( Context_AF.el.object3D );
            }
            else{
                console.log("you good: ", Context_AF.el.object3D.position)
            }
            
        });

    },
})


// if (shapePos.x < -0.25 && shapePos.x > -1.7 && shapePos.z < 4 && shapePos.z > 3 && shapePos.y < -6.5) { //if dropped on the destroyer plane
//     console.log('dump');
//     shapeLocation.parentNode.removeChild( shapeLocation ); //delete
// }else{
//     console.log('not in zone'); //if dropped in the regular area
// }