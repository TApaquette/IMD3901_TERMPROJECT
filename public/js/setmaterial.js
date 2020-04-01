AFRAME.registerComponent( 'setmaterial',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;

        

        document.querySelector('.setmaterial_slip').addEventListener('click', function(event){
            console.log('slipperyclick')
            Context_AF.material = 'blue';

            console.log("hello", Context_AF.material)
        });

        document.querySelector('.setmaterial_bounce').addEventListener('click', function(event){
            console.log('bounceclick')
            Context_AF.material = 'orange';

            console.log("hello", Context_AF.material)
        });

        document.querySelector('.setmaterial_normal').addEventListener('click', function(event){
            console.log('normalclick')
            Context_AF.material = 'grey';

            console.log("hello", Context_AF.material)
        });

        console.log("hello", Context_AF.material)
            
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1); 
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
       
    },
  }
,);