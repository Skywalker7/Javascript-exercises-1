//function expressions function expressions end with a semi-colon
var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");    
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

