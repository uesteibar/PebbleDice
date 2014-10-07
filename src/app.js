var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');




var main = new UI.Card({
  title: 'PebbleDice',
  icon: 'resources/images/pebbledice.png',
  subtitle: 'Shake your hand to throw the dice!',
  body: '',
  style: 'large'
});

main.show();



Accel.init();

main.on('accelTap', function(e){
  //calculate random number between 1 and 6
  var result = Math.floor((Math.random() * 6) + 1);
  console.log(result);

  
  
  setTimeout(function() {
    //vibrate to let the user know
    Vibe.vibrate('short');
  
    //show the result
    main.body('');
    main.subtitle('Result:  ' + result.toString());
    
    setTimeout(function() {
    main.body('Shake your hand to throw again!');
  }, 1000);
    
  }, 500);
  
  
  
  
  
  
});