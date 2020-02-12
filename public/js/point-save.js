AFRAME.registerComponent( 'point-save',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
       
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const coordinate = document.querySelector('.inactive');
            
         
            if(Context_AF.el.getAttribute('class')=== 'clickable inactive'){

                Context_AF.el.setAttribute('material', 'color:red');
                Context_AF.el.setAttribute('class', "clickable active");
                console.log('active');

              

            }
            else if (Context_AF.el.getAttribute('class')=== 'clickable active'){
                Context_AF.el.setAttribute('material', 'color:blue');
                Context_AF.el.setAttribute('class', "clickable inactive");
                console.log('inactive');

               

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
