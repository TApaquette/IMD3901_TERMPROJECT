AFRAME.registerComponent( 'grabbing',{

    dependencies: ['raycaster'],

    init : function()
    {
        function leftdownevent(event){
            
            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#leftController");

            if(Context_AF.el.getAttribute('class') === "clickable notgrab grabbable"){
                Context_AF.el.object3D.position.set(0,0,-0.2);
                Context_AF.el.setAttribute('class', 'clickable grab grabbable');

                camera.object3D.add(Context_AF.el.object3D);
            }
            document.querySelector('#leftController').addEventListener('triggerup', leftupevent);
        }

        function leftupevent(event){
            console.log("item placed");

            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#leftController");

            if(Context_AF.el.getAttribute('class') === "clickable grab grabbable"){
                var position = new THREE.Vector3();
                console.log(this.object3D.getWorldPosition(position));

                Context_AF.el.object3D.position.set(position.x, position.y, 3.77);
                Context_AF.el.object3D.rotation.set(0, 0, 0);

                spot.object3D.add(Context_AF.el.object3D);
                Context_AF.el.setAttribute('class', 'clickable notgrab grabbable');  
            }
        }

        function rightdownevent(event){

            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#rightController");

            if(Context_AF.el.getAttribute('class') === "clickable notgrab grabbable"){
                Context_AF.el.object3D.position.set(0,0,-0.2);
                Context_AF.el.setAttribute('class', 'clickable grab grabbable');

                camera.object3D.add(Context_AF.el.object3D);
            }
            document.querySelector('#rightController').addEventListener('triggerup', rightupevent);
        }

        function rightupevent(event){

            let spot = document.querySelector("#spot");

            let camera = document.querySelector("#rightController");

            if(Context_AF.el.getAttribute('class') === "clickable grab grabbable"){
                var position = new THREE.Vector3();
                console.log(this.object3D.getWorldPosition(position));

                Context_AF.el.object3D.position.set(position.x, position.y, 3.77);
                Context_AF.el.object3D.rotation.set(0, 0, 0);

                spot.object3D.add(Context_AF.el.object3D);
                Context_AF.el.setAttribute('class', 'clickable notgrab grabbable');  
            }
        }

        const Context_AF = this;

        let shapePos = Context_AF.el.getAttribute('position');


        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(0.12, 0.12, 0.12);

            document.querySelector('#leftController').addEventListener('triggerdown', leftdownevent);

            document.querySelector('#rightController').addEventListener('triggerdown', rightdownevent);
  
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(0.1, 0.1, 0.1);

            document.querySelector('#leftController').removeEventListener('triggerdown', leftdownevent);

            document.querySelector('#rightController').removeEventListener('triggerdown', rightdownevent);

        });

        Context_AF.el.addEventListener('raycaster-intersection', function(hitObj){

        });

        Context_AF.el.addEventListener('click', function(event) {

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