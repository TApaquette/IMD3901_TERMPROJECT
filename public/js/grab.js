AFRAME.registerComponent( 'grab',{

    schema:{
        grabbing: {type:'boolean', default:false},
    },

    init : function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('gripdown', function(){
            Context_AF.el.data.grabbing = true;
            console.log("stinky!!");
        });

    }  
});