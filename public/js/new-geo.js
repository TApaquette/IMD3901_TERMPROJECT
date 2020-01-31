AFRAME.registerGeometry('example', {
    schema: {
      vertices: {
        default: ['-2 2 0', '2 -2 0', '2 2 0', '-2 2 -1', '-2 -2 -1', '2 -2 -1', '2 2 -1', '-2 -2 0'],
      },

    },
  
    init: function (data) {
      var geometry = new THREE.Geometry();
      geometry.vertices = data.vertices.map(function (vertex) {
          var points = vertex.split(' ').map(function(x){return parseInt(x);});
          return new THREE.Vector3(points[0], points[1], points[2]);
      });
      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.faces.push(new THREE.Face3(0, 2, 3));
      geometry.faces.push(new THREE.Face3(0, 3, 4));
      geometry.faces.push(new THREE.Face3(0, 5, 1));
      geometry.faces.push(new THREE.Face3(1, 5, 2));
      geometry.faces.push(new THREE.Face3(3, 2, 6));
      geometry.faces.push(new THREE.Face3(3, 6, 7));
      geometry.faces.push(new THREE.Face3(2, 5, 6));
      geometry.faces.push(new THREE.Face3(4, 3, 7));
      geometry.faces.push(new THREE.Face3(4, 5, 0));
      geometry.faces.push(new THREE.Face3(4, 6, 5));   
      geometry.faces.push(new THREE.Face3(7, 6, 4));


      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      this.geometry = geometry;
    }
  });