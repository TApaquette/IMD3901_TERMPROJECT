AFRAME.registerComponent( 'done',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const coordinate = document.querySelector('finish');
            
            console.log('click');
           
            if(Context_AF.el.getAttribute('class')=== 'clickable finish'){
                
                console.log('done');


            }
           



      
            
           
           
            });



        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

            
        });
    
        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
         
        });

    },        

})
//this.el.getAttribute("position")//
