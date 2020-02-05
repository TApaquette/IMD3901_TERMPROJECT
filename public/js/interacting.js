AFRAME.registerComponent('interacting',{
    init : function()
    {
        const physicsElem = document.querySelector("#scene")
        var boxEl = document.querySelector('#box');
        boxEl.addEventListener('collide', function (e) {
          console.log('Box has collided with #' + e.detail.body.id);
        
          e.detail.target.el;  // Original entity (playerEl).
          e.detail.body.el;    // Other entity, which playerEl touched.
          e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
          e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

          if(e.detail.body.id == '1')
          {
            console.log('bouncy');
            physicsElem.setAttribute('physics', "friction: 0.1; restitution: 10")
          }
        });
    }
});