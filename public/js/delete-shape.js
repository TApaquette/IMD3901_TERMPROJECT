AFRAME.registerComponent( 'delete-shape', {
    init : function() {
        const Context_AF = this;

        let shapeLocation = document.querySelector(".clickable notgrab");
        let shapePos = shapeLocation.getAttribute("position");

        if (shapePos.x < -0.25 && shapePos.x > -1.7 && shapePos.z < 4 && shapePos.z > 3 && shapePos.y < -6.5) { //if dropped on the destroyer plane
            console.log('dump');
            shapeLocation.parentNode.removeChild( shapeLocation ); //delete
        }else{
            console.log('not in zone'); //if dropped in the regular area
        }

    },
  
});