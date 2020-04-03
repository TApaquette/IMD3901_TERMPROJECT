AFRAME.registerComponent( 'collider',{

    dependencies: ['raycaster'],

    init : function()
    {
        const Context_AF = this;
        console.log("EPIC TEST!")

        let collideObj = document.querySelector("#done_button");

        Context_AF.el.addEventListener('collide', function(collideObj){
            const collidedEl = colldedObj.detail.body.el;
            console.log("WHEN WE COLLIDE!");
            
        });
    }
});