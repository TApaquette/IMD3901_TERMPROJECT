var arrayZero = [0, 0, 0];
var arrayOne = [1, 0, 0];
var arrayTwo = [2, 0, 0];
var arrayThree = [3, 0, 0];

var arrayFour = [arrayZero[0], arrayZero[1], arrayZero[2] - 1];
var arrayFive = [arrayOne[0], arrayOne[1], arrayOne[2] - 1];
var arraySix = [arrayTwo[0], arrayTwo[1], arrayTwo[2] - 1];
var arraySeven = [arrayThree[0], arrayThree[1], arrayThree[2] - 1];

var arrayEight = [arrayZero[0], arrayZero[1] - 1, arrayZero[2]];
var arrayNine = [arrayOne[0], arrayOne[1] - 1, arrayOne[2]];
var arrayTen = [arrayTwo[0], arrayTwo[1] - 1, arrayTwo[2]];
var arrayEleven = [arrayThree[0], arrayThree[1] - 1, arrayThree[2]];

var arrayTwelve = [arrayZero[0], arrayZero[1] - 1, arrayZero[2] - 1];
var arrayThirteen = [arrayOne[0], arrayOne[1] - 1, arrayOne[2] - 1];
var arrayFourteen = [arrayTwo[0], arrayTwo[1] - 1, arrayTwo[2] - 1];
var arrayFifteen = [arrayThree[0], arrayThree[1] - 1, arrayThree[2] - 1];


var vertexZero = arrayZero.join(' ');
var vertexOne = arrayOne.join(' ');
var vertexTwo = arrayTwo.join(' ');
var vertexThree = arrayThree.join(' ');

var vertexFour = arrayFour.join(' ');
var vertexFive = arrayFive.join(' ');
var vertexSix = arraySix.join(' ');
var vertexSeven = arraySeven.join(' ');

var vertexEight = arrayEight.join(' ');
var vertexNine = arrayNine.join(' ');
var vertexTen = arrayTen.join(' ');
var vertexEleven = arrayEleven.join(' ');

var vertexTwelve = arrayTwelve.join(' ');
var vertexThirteen = arrayThirteen.join(' ');
var vertexFourteen = arrayFourteen.join(' ');
var vertexFifteen = arrayFifteen.join(' ');


AFRAME.registerGeometry('example', {
    schema: {
      vertices: {
        default: [vertexZero, vertexOne, vertexTwo, vertexThree, vertexFour, vertexFive, vertexSix, vertexSeven, vertexEight, vertexNine, vertexTen, vertexEleven, vertexTwelve, vertexThirteen, vertexFourteen, vertexFifteen],
      },
    },
  
    init: function (data) {
      var geometry = new THREE.Geometry();
      geometry.vertices = data.vertices.map(function (vertex) {
          var points = vertex.split(' ').map(function(x){return parseInt(x);});
          return new THREE.Vector3(points[0], points[1], points[2]);
      });
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