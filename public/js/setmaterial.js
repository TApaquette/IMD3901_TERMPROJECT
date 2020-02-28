AFRAME.registerComponent( 'setmaterial',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){

            if(document.querySelector('.setmaterial_slip')){
                console.log('slipperyclick')
                Context_AF.el.object3D.material.set

            }

            else if (document.querySelector('.setmaterial_bounce')){
                console.log('bounceclick')
                Context_AF.el.object3D.material.set
            }

            else if (document.querySelector('.setmaterial_normal')){
                console.log('normalclick')
                Context_AF.el.object3D.material.set
            }










            let scene = document.querySelector('a-scene');
            scene.appendChild(createdShape);
            });
            
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1); 
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
       
    },
  }
,);