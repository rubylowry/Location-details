console.log('Location Details');

    // 1) Create config.json file inside js folder
    // 2) Remove the your key from script tag in the index.html
    // 3) replace the key with 'YourKey' in index.html
    // 4) Comment out script tag for google map plugin
    // 5) ignore js/config.json in '.gitignore' plain text file
    // 6) Include script src="js/config.json"></script> before bottom 'script.js'
    // 7) Then access the key in js/script.js file

var bakeries = [
  {
    name : "Baker Gramercy",
    id : "101",
    location : "Berhampore",
    latitude : -41.3109145,
    longitude: 174.7727256,
    type : "Bakery",
    phone : 043895272,
    rating : 4.9,
    price : "Moderate"
  },
  {
    name : "Friendly Bakery & Cafe",
    id : "102",
    location : "Newtown",
    latitude : -41.3046239,
    longitude: 174.7728987,
    type : "Bakery",
    phone : 043896517,
    rating : 4.5,
    price : "Affordable"
  },
  {
    name : "Jacks Bakery",
    id : "103",
    location : "Mount Cook",
    latitude : -41.3008303,
    longitude: 174.7785339,
    type : "Bakery",
    phone : 043810218,
    rating : 4.4,
    price : "Affordable"
  },
  {
    name : "Leeds Street Bakery",
    id : "104",
    location : "Te Aro",
    latitude : -41.2963999,
    longitude: 174.7726772,
    type : "Bakery",
    phone :  048024278,
    rating : 4.6,
    price : "Moderate"
  },
  {
    name : "Le Moulin Bakery",
    id : "105",
    location : "Te Aro",
    latitude : -41.300259,
    longitude: 174.786015,
    type : "Bakery",
    phone : 043828118,
    rating : 4.6,
    price : "Affordable"
  },
  {
    name : "Jo's Bakery",
    id : "106",
    location : "Brooklyn",
    latitude : -41.3018424,
    longitude: 174.786015,
    type : "Bakery",
    phone : 043844934,
    rating : 4.8,
    price : "Affordable"
  },
  {
    name : "Hataitai Hot Bread Shop",
    id : "107",
    location : "Wellington",
    latitude : -41.3016509,
    longitude: 174.7792272,
    type : "Bakery",
    phone : 043861870,
    rating : 4.5,
    price : "Affordable"
  },
  {
    name : "Pandoro Panetteria Ltd",
    id : "108",
    location : "Te Aro",
    latitude : -41.2963745,
    longitude: 174.7810072,
    type : "Bakery",
    phone : 043854478,
    rating : 4.1,
    price : "Moderate"
  }
];


//accessiing apiKey from config.json
var myKey = JSON.parse(apiKey); //convert JSON data into js object
 console.log (myKey[0].key);

 // Dynamically creating the script element
var script = document.createElement('script');
// Giving the src attribute to the google plug in from external json file
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
// Appending to the body of index.html
document.getElementsByTagName('body')[0].appendChild(script);

 window.onload = function() {
     if (window.jQuery) {
         // jQuery is loaded
         console.log("Yeah! Working");
     } else {
         // jQuery is not loaded
         console.log("Doesn't Work");
     }
 }

 $('#map').hide();
 $('#home').show();

 $('.myBtn').click(function(){
   $('#home').hide();
   $('#map').show();
 });
 // $('#homeBtn').click(function(){
 //   $('#map').hide();
 //   $('#home').show();
 // });


 // var map;
 function initMap() {
   // Map options
         // The location of Wellington
   var wellington = {lat: -41.2865, lng: 174.7762};
   var christchurch ={lat:-43.5321  ,lng: 172.6362 };
   var auckland = {lat:-36.8485  ,lng: 174.7633};
   var napier = {lat:-39.4928 ,lng: 176.9120};

   // The map, centered at Uluru
   var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: wellington});
   // The marker, positioned at Uluru
   var marker1 = new google.maps.Marker({
     position: wellington,
     map: map});
     // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
   var marker2 = new google.maps.Marker({position: christchurch, map: map});
   var marker3 = new google.maps.Marker({position: auckland, map: map});
   var marker4 = new google.maps.Marker({position: napier, map: map});




   var contentString = '<div id="content">'+

             '<h1 id="firstHeading" class="firstHeading">Wellington</h1>'+
                 '<div id="bodyContent">'+
                     '<p>dfgqehfihewihfwe</p>'+
                   '</div>'+
       '</div>';

   var infowindow = new google.maps.InfoWindow({
     content: contentString
   });

   var marker1 = new google.maps.Marker({
     position: wellington,
     map: map,
     title: 'Wellington'
   });
   marker1.addListener('click', function() {
     infowindow.open(map, marker1);
   });




 }
