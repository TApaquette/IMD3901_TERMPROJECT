AFRAME.registerComponent( 'point_save',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const coordinate = document.querySelector('.active');

            if(document.querySelector('.active'))

            console.log('click');

            console.log('change');
            
           
           
            },

            Context_AF.el.addEventListener('mouseenter', function(event) {
                Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
            });
    
            Context_AF.el.addEventListener('mouseleave', function(event) {
                Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
            });

            
spawnPoints: function(){
    const Context_AF = this;

    let Point_Elem = document.createElement('a-entity');
        Point_Elem.setAttribute('id', "point");
        Point_Elem.setAttribute('class', 'clickable active inactive');
        Point_Elem.setAttribute('geometry', 'primitive:sphere: radius:0.2');
        Point_Elem.setAttribute()
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(Point_Elem);



}
this.el.getAttribute("position");
