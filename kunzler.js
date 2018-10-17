angular.module('Kunzler', [])
  .controller('seedCtrl', seedCtrl);
  //.directive('seedView', seedDirective); //links avatar tag to directive

function seedCtrl ($scope) {
    
    $scope.options = true;

  //$scope.seeds = ['Nova', 'Hyland', 'Skyline', 'Skyline Plus', 'Hay Graze', 'Ram', 'Key', 'Cache','Lander', 'Ranger', 'Broadleaf', 'Wrangler'];
   $scope.seeds =  [
       {name: 'Nova', img: 'wheat2.jpg', price: '$3.25/lb'},
       {name: 'Hyland', img: 'field1.jpg', price: '$2.75/lb'},
       {name: 'Skyline', img: 'wheat7.jpg', price: '$3.00/lb'},
       {name: 'Skyline Plus', img: 'wheat3.jpg', price: '$3.10/lb'},
       {name: 'Hay Graze', img: 'wheat1.jpg', price: '$3.30/lb'},
       {name: 'Ram', img: 'seed2.jpg', price: '$2.80/lb'},
       {name: 'Key', img: 'wheat4.jpg', price: '$2.50/lb'},
       {name: 'Cache', img: 'seed3.jpg', price: '$3.40/lb'},
       {name: 'Lander', img: 'wheat5.jpg', price: '$3.69/lb'},
       {name: 'Ranger', img: 'wheat6.jpg', price: '$3.10/lb'},
       {name: 'Broadleaf', img: 'seed4.jpg', price: '$3.25/lb'},
       {name: 'Wrangler', img: 'field2.jpg', price: '$2.15/lb'}
    ];
//   $scope.showPrice = function (e) {
//   //show price and outline the thing
//   var id = $(e.currentTarget).id;
//   console.log(id);
//   $('#'+ id).css('display', 'block');
   
//   };
  
//   $scope.hidePrice = function(e){
      
//   }
}

/**f
 * 1. this defines the api of our avatar directive. This means we are
 * expecting a user property whose value should be interpreted as an object.
 * 2. This simply means we want this directive to be used as an element.
 * 3. You can see here we've moved the html that was in our template before
 * and give it as the template for this directive. This means wherever we use
 * <avatar /> this html will also be placed there.
 * 4. Here we are implementing the feature where if there is no user avatar url,
 * we go ahead and give it a default
 */
// function seedDirective () {
//   return {
//     scope: {
//       seed: '=' /* [1] */
//     },
//     restrict: 'E', /* [2] */
//     replace: 'true',
//     template: ( //replaces <seedView> tags
//       '<div class="seedItem" style="background-image: url({{seed.img}})">' + //may need quotes around
//         '<div class="seedName">{{seed.name}}</div>' +
//       '</div>'
//     ) /* [3] */
//   };
  

//}


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}