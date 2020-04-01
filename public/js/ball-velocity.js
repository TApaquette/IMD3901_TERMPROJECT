AFRAME.registerGeometry('ball-velocity', {

    init : function()
    {
        const Context_AF = this;

        Context_AF.el.addEventListener('physicscollided', function(event) {
            console.log("ouch you hit me with", event.detail.collidingEntity);
        });

    }

});