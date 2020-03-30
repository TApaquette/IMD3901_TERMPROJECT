AFRAME.registerComponent( 'Collider',{

    init : function()
    {
        const Context_AF = this;

        let Left = document.querySelector("#leftController");
        let Right = document.querySelector("#rightController");

        let collideObj = document.querySelector("#done_button")

        //Context_AF.el.object3D.position.set(position.x, position.y, posiion.z);
        //Context_AF.el.object3D.rotation.set(rotate.x, rotate.y, rotate.z);

        //if(position of controller collider is in position of object){
            //if(gripdown is on){
                //set object to coontrollers position
            //}
            //if (gripup is on){
                //make object static and set the rotation to 0 and the position to where ever it is when it is released
            //}  
        //}
        //check if the collider is in the object then check if the grip is pressed. if both are true contrain object with hand


        Context_AF.el.addEventListener('collide', function(collideObj){
            const collidedEl = colldedObj.detail.body.el
            console.log("WHEN WE COLLIDE!")
        });
    }

});