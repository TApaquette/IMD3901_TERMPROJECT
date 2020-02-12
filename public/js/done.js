AFRAME.registerComponent( 'done',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const coordinate = document.querySelector('clickable finish');
            
            console.log('click');
           
            selected = document.querySelectorAll(".active")
            Context_AF.el.getAttribute("position")

            console.log(selected);

           



      
            
           
           
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
