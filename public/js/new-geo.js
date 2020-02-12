AFRAME.registerGeometry('new-geo', {

    schema: {
      vertices: {
        default: ['0 0 0', '1 0 0', '2 0 0', '3 0 0'],
      }
    },

    init: function (data) {

      //geometry.vertices = data.vertices.map(function (vertex) {
          // var points = vertex.split(' ').map(function(x){return parseInt(x);});
          // return new THREE.Vector3(points[0], points[1], points[2]);
      // });
      

      // var arrayZero = [0, 0, 0];
      // var arrayOne = [1, 0, 0];
      // var arrayTwo = [2, 0, 0];
      // var arrayThree = [3, 0, 0];

      var arrayZero = data.vertices[0].split(" ");
      var arrayOne = data.vertices[1].split(" ");
      var arrayTwo = data.vertices[2].split(" ");
      var arrayThree = data.vertices[3].split(" ");

      this.createGeo(arrayZero, arrayOne, arrayTwo, arrayThree);
    },


    createGeo : function ( point1, point2, point3, point4 ) {

      var geometry = new THREE.Geometry();

      geometry.vertices.push(new THREE.Vector3(point1[0], point1[1], point1[2]));
      geometry.vertices.push(new THREE.Vector3(point2[0], point2[1], point2[2]));
      geometry.vertices.push(new THREE.Vector3(point3[0], point3[1], point3[2]));
      geometry.vertices.push(new THREE.Vector3(point4[0], point4[1], point4[2]));

      geometry.vertices.push(new THREE.Vector3(point1[0], point1[1], point1[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point2[0], point2[1], point2[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point3[0], point3[1], point3[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point4[0], point4[1], point4[2] - 1));

      geometry.vertices.push(new THREE.Vector3(point1[0], point1[1] - 1, point1[2]));
      geometry.vertices.push(new THREE.Vector3(point2[0], point2[1] - 1, point2[2]));
      geometry.vertices.push(new THREE.Vector3(point3[0], point3[1] - 1, point3[2]));
      geometry.vertices.push(new THREE.Vector3(point4[0], point4[1] - 1, point4[2]));

      geometry.vertices.push(new THREE.Vector3(point1[0], point1[1] - 1, point1[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point2[0], point2[1] - 1, point2[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point3[0], point3[1] - 1, point3[2] - 1));
      geometry.vertices.push(new THREE.Vector3(point4[0], point4[1] - 1, point4[2] - 1));
      


      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(0, 8, 9));
      geometry.faces.push(new THREE.Face3(0, 9, 1));
      geometry.faces.push(new THREE.Face3(0, 1, 5));
      geometry.faces.push(new THREE.Face3(0, 5, 4));
      geometry.faces.push(new THREE.Face3(1, 9, 10));
      geometry.faces.push(new THREE.Face3(1, 10, 2));
      geometry.faces.push(new THREE.Face3(1, 2, 6));
      geometry.faces.push(new THREE.Face3(1, 6, 5));
      geometry.faces.push(new THREE.Face3(2, 10, 11));
      geometry.faces.push(new THREE.Face3(2, 11, 3));
      geometry.faces.push(new THREE.Face3(2, 3, 7));   
      geometry.faces.push(new THREE.Face3(2, 7, 6));
      geometry.faces.push(new THREE.Face3(3, 11, 15));
      geometry.faces.push(new THREE.Face3(3, 15, 7));
      geometry.faces.push(new THREE.Face3(4, 12, 8));
      geometry.faces.push(new THREE.Face3(4, 8, 0));
      geometry.faces.push(new THREE.Face3(5, 13, 12));
      geometry.faces.push(new THREE.Face3(5, 12, 4));
      geometry.faces.push(new THREE.Face3(6, 14, 13));
      geometry.faces.push(new THREE.Face3(6, 13, 5));
      geometry.faces.push(new THREE.Face3(7, 15, 14));
      geometry.faces.push(new THREE.Face3(7, 14, 6));
      geometry.faces.push(new THREE.Face3(8, 13, 9));   
      geometry.faces.push(new THREE.Face3(8, 12, 13));
      geometry.faces.push(new THREE.Face3(9, 14, 10));
      geometry.faces.push(new THREE.Face3(9, 13, 14));
      geometry.faces.push(new THREE.Face3(10, 15, 11));   
      geometry.faces.push(new THREE.Face3(10, 14, 15));


      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      this.geometry = geometry;
    }
  });