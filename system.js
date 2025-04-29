var users = {
  "admin": "1234",
  "user": "4321",
  "rohan": "1111",
  "check" : "9090"
};
onEvent("loginbutton", "click", function() {
  var enteredUsername = getText("username");
  var enteredPassword = getText("userpassword");

  if (users[enteredUsername] === enteredPassword) {
    setText("loginresult", "✅ Login successful!");
    setScreen("intropage");
  } else {
    setText("loginresult", "❌ Incorrect username or password.");
  }
});


onEvent("events", "click", function( ) {
	setScreen("Event");
});
onEvent("samay", "click", function( ) {
	setScreen("samaybook");
	onEvent("samayga", "click", function( ) {
	  setScreen("generalaccess");
	  setText("ganame", "SAMAY RAINA");
	  onEvent("gaquantity", "click", function() {
	    var x = getNumber("gaquantity");
	    x = x * 500;
	    setNumber("gabill", x);
	  });
	  onEvent("gapay", "click", function( ) {
	    setScreen("eventticket");
	    setImageURL("eventphoto", "samay.jpeg");
	    setText("eventtitle", getText("samaytitle"));
	    setText("eventtime", getText("samaytime"));
	    setText("eventaccess", getText("gatitle"));
	    setText("eventvenue", getText("samayvenue"));
	    setNumber("eventquantity", getNumber("gaquantity"));
	    onEvent("done1", "click", function( ) {
	      var samaydata = {};
	      samaydata.name = getText("eventtitle");
	      samaydata.venue = getText("eventvenue");
	      samaydata.time = getText("eventtime");
	      samaydata.access = getText("eventaccess");
	      samaydata.quantity = getNumber("eventquantity");
	      samaydata.amount = getNumber("gabill");
	      samaydata.user = getText("username");
	      createRecord("event", samaydata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
	  });
	});
	onEvent("samayvip", "click", function( ) {
	  setScreen("vipaccess");
	  setText("vipname", "SAMAY RAINA");
	  onEvent("vipquantity", "click", function( ) {
	    var x = getNumber("vipquantity");
	    x = x * 700;
	    setNumber("vipbill", x);
	    onEvent("vippay", "click", function( ) {
	    	    setScreen("eventticket");
	    	    setImageURL("eventphoto", "samay.jpeg");
	    	    setText("eventtitle", getText("samaytitle"));
	    	    setText("eventtime", getText("samaytime"));
	    	    setText("eventaccess", getText("viptitle"));
	    	    setText("eventvenue", getText("samayvenue"));
	    	    setNumber("eventquantity", getNumber("vipquantity"));
	    	    onEvent("done1", "click", function( ) {
	    	      var samaydata = {};
	    	      samaydata.name = getText("eventtitle");
	    	      samaydata.venue = getText("eventvenue");
	    	      samaydata.time = getText("eventtime");
	    	      samaydata.access = getText("eventaccess");
	    	      samaydata.quantity = getNumber("eventquantity");
	    	      samaydata.amount = getNumber("vipbill");
	    	      samaydata.user = getText("username");
	    	      createRecord("event", samaydata, function(record) {
	    	        console.log("Record created with id:" + record.id);
	    	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	
	    	      });
	    	    });
	    	    onEvent("backarrow", "click", function( ) {
	    	      setScreen("intropage");
	    	    });
	    	  });
	  });
	});
	onEvent("samaylou", "click", function( ) {
	  setScreen("loungeaccess");
	  setText("loungename", "SAMAY RAINA");
	  onEvent("loungequantity", "click", function( ) {
	    var x = getNumber("loungequantity");
	    x = x * 900;
	    setNumber("loungebill", x);
	    onEvent("loungepay", "click", function( ) {
	    	    setScreen("eventticket");
	    	    setImageURL("eventphoto", "samay.jpeg");
	    	    setText("eventtitle", getText("samaytitle"));
	    	    setText("eventtime", getText("samaytime"));
	    	    setText("eventaccess", getText("loungetitle"));
	    	    setText("eventvenue", getText("samayvenue"));
	    	    setNumber("eventquantity", getNumber("loungequantity"));
	    	    onEvent("done1", "click", function( ) {
	    	      var samaydata = {};
	    	      samaydata.name = getText("eventtitle");
	    	      samaydata.venue = getText("eventvenue");
	    	      samaydata.time = getText("eventtime");
	    	      samaydata.access = getText("eventaccess");
	    	      samaydata.quantity = getNumber("eventquantity");
	    	      samaydata.amount = getNumber("loungebill");
	    	      samaydata.user = getText("username");
	    	      createRecord("event", samaydata, function(record) {
	    	        console.log("Record created with id:" + record.id);
	    	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	    	        
	    	      });
	    	    });
	    	    onEvent("backarrow", "click", function( ) {
	    	      setScreen("intropage");
	    	    });
	    	  });
	  });
	});
});
onEvent("arjit", "click", function( ) {
  setScreen("arjitbook");
  onEvent("arjitga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "ARIJIT SINGH");
	  onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 300;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
     	    setScreen("eventticket");
     	    setImageURL("eventphoto", "mainarijitsinghjaipurconcert-1737619917.jpg");
     	    setText("eventtitle", getText("arjittitle"));
     	    setText("eventtime", getText("arjittime"));
     	    setText("eventaccess", getText("gatitle"));
     	    setText("eventvenue", getText("arjitvenue"));
     	    onEvent("done1", "click", function( ) {
	      var arjitdata = {};
	      arjitdata.name = getText("eventtitle");
	      arjitdata.venue = getText("eventvenue");
	      arjitdata.time = getText("eventtime");
	      arjitdata.access = getText("eventaccess");
	      arjitdata.quantity = getNumber("eventquantity");
	      arjitdata.amount = getNumber("gabill");
	      arjitdata.user = getText("username");
	      createRecord("event", arjitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
     	    setNumber("eventquantity", getNumber("gaquantity"));
     	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
     	  });
	  });
  });
  onEvent("arjitvip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "ARIJIT SINGH");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 500;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
          	    setScreen("eventticket");
          	    setImageURL("eventphoto", "mainarijitsinghjaipurconcert-1737619917.jpg");
          	    setText("eventtitle", getText("arjittitle"));
          	    setText("eventtime", getText("arjittime"));
          	    setText("eventaccess", getText("viptitle"));
          	    setText("eventvenue", getText("arjitvenue"));
          	    onEvent("done1", "click", function( ) {
	      var arjitdata = {};
	      arjitdata.name = getText("eventtitle");
	      arjitdata.venue = getText("eventvenue");
	      arjitdata.time = getText("eventtime");
	      arjitdata.access = getText("eventaccess");
	      arjitdata.quantity = getNumber("eventquantity");
	      arjitdata.amount = getNumber("vipbill");
	      arjitdata.user = getText("username");
	      createRecord("event", arjitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
          	    setNumber("eventquantity", getNumber("vipquantity"));
          	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
          	  });
	  });
  });
  onEvent("arjitlou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "ARIJIT SINGH");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 700;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
          	    setScreen("eventticket");
          	    setImageURL("eventphoto", "mainarijitsinghjaipurconcert-1737619917.jpg");
          	    setText("eventtitle", getText("arjittitle"));
          	    setText("eventtime", getText("arjittime"));
          	    setText("eventaccess", getText("loungetitle"));
          	    setText("eventvenue", getText("arjitvenue"));
          	    setNumber("eventquantity", getNumber("loungequantity"));
          	    onEvent("done1", "click", function( ) {
	      var arjitdata = {};
	      arjitdata.name = getText("eventtitle");
	      arjitdata.venue = getText("eventvenue");
	      arjitdata.time = getText("eventtime");
	      arjitdata.access = getText("eventaccess");
	      arjitdata.quantity = getNumber("eventquantity");
	      arjitdata.amount = getNumber("loungebill");
	      arjitdata.user = getText("username");
	      createRecord("event", arjitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
          	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
          	  });
    	  });
  });
});
onEvent("bassi", "click", function( ) {
  setScreen("bassibook");
  onEvent("bassiga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "ANUBHAV BASSI");
	  onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 300;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
          	    setScreen("eventticket");
          	    setImageURL("eventphoto", "Bassi.jpg");
          	    setText("eventtitle", getText("bassititle"));
          	    setText("eventtime", getText("bassitime"));
          	    setText("eventvenue", getText("bassivenue"));
          	    setText("eventaccess", getText("gatitle"));
          	    setNumber("eventquantity", getNumber("gaquantity"));
          	    onEvent("done1", "click", function( ) {
	      var bassidata = {};
	      bassidata.name = getText("eventtitle");
	      bassidata.venue = getText("eventvenue");
	      bassidata.time = getText("eventtime");
	      bassidata.access = getText("eventaccess");
	      bassidata.quantity = getNumber("eventquantity");
	      bassidata.amount = getNumber("gabill");
	      bassidata.user = getText("username");
	      createRecord("event", bassidata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
          	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
          	  });
	  });
  });
  onEvent("bassilou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "ANUBHAV BASSI");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 700;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
               	    setScreen("eventticket");
               	    setImageURL("eventphoto", "Bassi.jpg");
               	    setText("eventtitle", getText("bassititle"));
               	    setText("eventtime", getText("bassitime"));
               	    setText("eventvenue", getText("bassivenue"));
               	    setText("eventaccess", getText("loungetitle"));
               	    setNumber("eventquantity", getNumber("loungequantity"));
               	    onEvent("done1", "click", function( ) {
	      var bassidata = {};
	      bassidata.name = getText("eventtitle");
	      bassidata.venue = getText("eventvenue");
	      bassidata.time = getText("eventtime");
	      bassidata.access = getText("eventaccess");
	      bassidata.quantity = getNumber("eventquantity");
	      bassidata.amount = getNumber("loungebill");
	      bassidata.user = getText("username");
	      createRecord("event", bassidata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
               	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
               	  });
	  });
  });
  onEvent("bassivip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "ANUBHAV BASSI");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 500;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
               	    setScreen("eventticket");
               	    setImageURL("eventphoto", "Bassi.jpg");
               	    setText("eventtitle", getText("bassititle"));
               	    setText("eventtime", getText("bassitime"));
               	    setText("eventvenue", getText("bassivenue"));
               	    setText("eventaccess", getText("viptitle"));
               	    setNumber("eventquantity", getNumber("vipquantity"));
               	    onEvent("done1", "click", function( ) {
	      var bassidata = {};
	      bassidata.name = getText("eventtitle");
	      bassidata.venue = getText("eventvenue");
	      bassidata.time = getText("eventtime");
	      bassidata.access = getText("eventaccess");
	      bassidata.quantity = getNumber("eventquantity");
	      bassidata.amount = getNumber("vipbill");
	      bassidata.user = getText("username");
	      createRecord("event", bassidata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
               	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
               	  });
	  });
  });
});
onEvent("aarohan", "click", function( ) {
  setScreen("aarohanbook");
  onEvent("aarohanga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "AAROHAN");
    onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 0;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
               	    setScreen("eventticket");
               	    setImageURL("eventphoto", "aarohan.jpg");
               	    setText("eventtitle", getText("aarohantitle"));
               	    setText("eventtime", getText("aarohantime"));
               	    setText("eventvenue", getText("aarohanvenue"));
               	    setText("eventaccess", getText("gatitle"));
               	    setNumber("eventquantity", getNumber("gaquantity"));
               	    onEvent("done1", "click", function( ) {
	      var aarohandata = {};
	      aarohandata.name = getText("eventtitle");
	      aarohandata.venue = getText("eventvenue");
	      aarohandata.time = getText("eventtime");
	      aarohandata.access = getText("eventaccess");
	      aarohandata.quantity = getNumber("eventquantity");
	      aarohandata.amount = getNumber("gabill");
	      aarohandata.user = getText("username");
	      createRecord("event", aarohandata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
               	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
               	  });
     });
  });
  onEvent("aarohanvip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "AAROHAN");
    onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 0;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
                    	    setScreen("eventticket");
                    	    setImageURL("eventphoto", "aarohan.jpg");
                    	    setText("eventtitle", getText("aarohantitle"));
                    	    setText("eventtime", getText("aarohantime"));
                    	    setText("eventvenue", getText("aarohanvenue"));
                    	    setText("eventaccess", getText("viptitle"));
                    	    setNumber("eventquantity", getNumber("vipquantity"));
                    	    onEvent("done1", "click", function( ) {
	      var aarohandata = {};
	      aarohandata.name = getText("eventtitle");
	      aarohandata.venue = getText("eventvenue");
	      aarohandata.time = getText("eventtime");
	      aarohandata.access = getText("eventaccess");
	      aarohandata.quantity = getNumber("eventquantity");
	      aarohandata.amount = getNumber("vipbill");
	      aarohandata.user = getText("username");
	      createRecord("event", aarohandata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                    	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                    	  });
     });
  });
  onEvent("aarohanlou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "AAROHAN");
    onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 0;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
                    	    setScreen("eventticket");
                    	    setImageURL("eventphoto", "aarohan.jpg");
                    	    setText("eventtitle", getText("aarohantitle"));
                    	    setText("eventtime", getText("aarohantime"));
                    	    setText("eventvenue", getText("aarohanvenue"));
                    	    setText("eventaccess", getText("loungetitle"));
                    	    setNumber("eventquantity", getNumber("loungequantity"));
                    	    onEvent("done1", "click", function( ) {
	      var aarohandata = {};
	      aarohandata.name = getText("eventtitle");
	      aarohandata.venue = getText("eventvenue");
	      aarohandata.time = getText("eventtime");
	      aarohandata.access = getText("eventaccess");
	      aarohandata.quantity = getNumber("eventquantity");
	      aarohandata.amount = getNumber("loungebill");
	      aarohandata.user = getText("username");
	      createRecord("event", aarohandata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                    	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                    	  });
     });
  });
});
onEvent("diljit", "click", function( ) {
  setScreen("diljitbook");
  onEvent("diljitga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "DILJIT DOSANJH");
	  onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 800;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
                    	    setScreen("eventticket");
                    	    setImageURL("eventphoto", "unnamed.jpg");
                    	    setText("eventtitle", getText("diljititle"));
                    	    setText("eventtime", getText("diljittime"));
                    	    setText("eventvenue", getText("diljitvenue"));
                    	    setText("eventaccess", getText("gatitle"));
                    	    setNumber("eventquantity", getNumber("gaquantity"));
                    	    onEvent("done1", "click", function( ) {
	      var diljitdata = {};
	      diljitdata.name = getText("eventtitle");
	      diljitdata.venue = getText("eventvenue");
	      diljitdata.time = getText("eventtime");
	      diljitdata.access = getText("eventaccess");
	      diljitdata.quantity = getNumber("eventquantity");
	      diljitdata.amount = getNumber("gabill");
	      diljitdata.user = getText("username");
	      createRecord("event", diljitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                    	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                    	  });
    	  });
  });
  onEvent("diljitlou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "DILJIT DOSANJH");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 1200;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
                         	    setScreen("eventticket");
                         	    setImageURL("eventphoto", "unnamed.jpg");
                         	    setText("eventtitle", getText("diljititle"));
                         	    setText("eventtime", getText("diljittime"));
                         	    setText("eventvenue", getText("diljitvenue"));
                         	    setText("eventaccess", getText("loungetitle"));
                         	    setNumber("eventquantity", getNumber("loungequantity"));
                         	    onEvent("done1", "click", function( ) {
	      var diljitdata = {};
	      diljitdata.name = getText("eventtitle");
	      diljitdata.venue = getText("eventvenue");
	      diljitdata.time = getText("eventtime");
	      diljitdata.access = getText("eventaccess");
	      diljitdata.quantity = getNumber("eventquantity");
	      diljitdata.amount = getNumber("loungebill");
	      diljitdata.user = getText("username");
	      createRecord("event", diljitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                         	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                         	  });
	  });
  });
  onEvent("diljitvip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "DILJIT DOSANJH");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 1000;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
                         	    setScreen("eventticket");
                         	    setImageURL("eventphoto", "unnamed.jpg");
                         	    setText("eventtitle", getText("diljititle"));
                         	    setText("eventtime", getText("diljittime"));
                         	    setText("eventvenue", getText("diljitvenue"));
                         	    setText("eventaccess", getText("viptitle"));
                         	    setNumber("eventquantity", getNumber("vipquantity"));
                         	    onEvent("done1", "click", function( ) {
	      var diljitdata = {};
	      diljitdata.name = getText("eventtitle");
	      diljitdata.venue = getText("eventvenue");
	      diljitdata.time = getText("eventtime");
	      diljitdata.access = getText("eventaccess");
	      diljitdata.quantity = getNumber("eventquantity");
	      diljitdata.amount = getNumber("vipbill");
	      diljitdata.user = getText("username");
	      createRecord("event", diljitdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                         	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                         	  });
	  });
  });
});
onEvent("honey", "click", function( ) {
  setScreen("yoyobook");
  onEvent("yoyoga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "HONEY SINGH");
	  onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 800;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
                         	    setScreen("eventticket");
                         	    setImageURL("eventphoto", "mainyoyohoneysinghbangaoreconcert-1742557069.jpg");
                         	    setText("eventtitle", getText("yoyotitle"));
                         	    setText("eventtime", getText("yoyotime"));
                         	    setText("eventvenue", getText("yoyovenue"));
                         	    setText("eventaccess", getText("gatitle"));
                         	    setNumber("eventquantity", getNumber("gaquantity"));
                         	    onEvent("done1", "click", function( ) {
	      var honeydata = {};
	      honeydata.name = getText("eventtitle");
	      honeydata.venue = getText("eventvenue");
	      honeydata.time = getText("eventtime");
	      honeydata.access = getText("eventaccess");
	      honeydata.quantity = getNumber("eventquantity");
	      honeydata.amount = getNumber("gabill");
	      honeydata.user = getText("username");
	      createRecord("event", honeydata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                         	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                         	  });
	  });
  });
  onEvent("yoyolou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "HONEY SINGH");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 1200;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
                              	    setScreen("eventticket");
                              	    setImageURL("eventphoto", "mainyoyohoneysinghbangaoreconcert-1742557069.jpg");
                              	    setText("eventtitle", getText("yoyotitle"));
                              	    setText("eventtime", getText("yoyotime"));
                              	    setText("eventvenue", getText("yoyovenue"));
                              	    setText("eventaccess", getText("loungetitle"));
                              	    setNumber("eventquantity", getNumber("loungequantity"));
                              	    onEvent("done1", "click", function( ) {
	      var honeydata = {};
	      honeydata.name = getText("eventtitle");
	      honeydata.venue = getText("eventvenue");
	      honeydata.time = getText("eventtime");
	      honeydata.access = getText("eventaccess");
	      honeydata.quantity = getNumber("eventquantity");
	      honeydata.amount = getNumber("loungebill");
	      honeydata.user = getText("username");
	      createRecord("event", honeydata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                              	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                              	  });
	  });
  });
  onEvent("yoyovip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "HONEY SINGH");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 1000;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
                              	    setScreen("eventticket");
                              	    setImageURL("eventphoto", "mainyoyohoneysinghbangaoreconcert-1742557069.jpg");
                              	    setText("eventtitle", getText("yoyotitle"));
                              	    setText("eventtime", getText("yoyotime"));
                              	    setText("eventvenue", getText("yoyovenue"));
                              	    setText("eventaccess", getText("viptitle"));
                              	    setNumber("eventquantity", getNumber("vipquantity"));
                              	    onEvent("done1", "click", function( ) {
	      var honeydata = {};
	      honeydata.name = getText("eventtitle");
	      honeydata.venue = getText("eventvenue");
	      honeydata.time = getText("eventtime");
	      honeydata.access = getText("eventaccess");
	      honeydata.quantity = getNumber("eventquantity");
	      honeydata.amount = getNumber("vipbill");
	      honeydata.user = getText("username");
	      createRecord("event", honeydata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                              	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                              	  });
	  });
  });
});
onEvent("shankar", "click", function( ) {
  setScreen("shankarbook");
  onEvent("shankarga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "SHANKAR MAHADEVAN");
	  onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 500;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
                              	    setScreen("eventticket");
                              	    setImageURL("eventphoto", "ShankarMahadevan_1736507067600_1736507090959.jpg");
                              	    setText("eventtitle", getText("shankartitle"));
                              	    setText("eventtime", getText("shankartime"));
                              	    setText("eventvenue", getText("shankarvenue"));
                              	    setText("eventaccess", getText("gatitle"));
                              	    setNumber("eventquantity", getNumber("gaquantity"));
                              	    onEvent("done1", "click", function( ) {
	      var shankardata = {};
	      shankardata.name = getText("eventtitle");
	      shankardata.venue = getText("eventvenue");
	      shankardata.time = getText("eventtime");
	      shankardata.access = getText("eventaccess");
	      shankardata.quantity = getNumber("eventquantity");
	      shankardata.amount = getNumber("gabill");
	      shankardata.user = getText("username");
	      createRecord("event", shankardata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                              	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                              	  });
	  });
  });
  onEvent("shankarlou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "SHANKAR MAHADEVAN");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 900;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
                                   	    setScreen("eventticket");
                                   	    setImageURL("eventphoto", "ShankarMahadevan_1736507067600_1736507090959.jpg");
                                   	    setText("eventtitle", getText("shankartitle"));
                                   	    setText("eventtime", getText("shankartime"));
                                   	    setText("eventvenue", getText("shankarvenue"));
                                   	    setText("eventaccess", getText("loungetitle"));
                                   	    setNumber("eventquantity", getNumber("loungequantity"));
                                   	    onEvent("done1", "click", function( ) {
	      var shankardata = {};
	      shankardata.name = getText("eventtitle");
	      shankardata.venue = getText("eventvenue");
	      shankardata.time = getText("eventtime");
	      shankardata.access = getText("eventaccess");
	      shankardata.quantity = getNumber("eventquantity");
	      shankardata.amount = getNumber("loungebill");
	      shankardata.user = getText("username");
	      createRecord("event", shankardata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                                   	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                                   	  });
	  });
  });
  onEvent("shankarvip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "SHANKAR MAHADEVAN");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 700;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
                                   	    setScreen("eventticket");
                                   	    setImageURL("eventphoto", "ShankarMahadevan_1736507067600_1736507090959.jpg");
                                   	    setText("eventtitle", getText("shankartitle"));
                                   	    setText("eventtime", getText("shankartime"));
                                   	    setText("eventvenue", getText("shankarvenue"));
                                   	    setText("eventaccess", getText("viptitle"));
                                   	    setNumber("eventquantity", getNumber("vipquantity"));
                                   	    onEvent("done1", "click", function( ) {
	      var shankardata = {};
	      shankardata.name = getText("eventtitle");
	      shankardata.venue = getText("eventvenue");
	      shankardata.time = getText("eventtime");
	      shankardata.access = getText("eventaccess");
	      shankardata.quantity = getNumber("eventquantity");
	      shankardata.amount = getNumber("vipbill");
	      shankardata.user = getText("username");
	      createRecord("event", shankardata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                                   	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                                   	  });
	  });
  });
});
onEvent("zakir", "click", function( ) {
  setScreen("zakirbook");
  onEvent("zakirga", "click", function( ) {
    setScreen("generalaccess");
    setText("ganame", "ZAKIR KHAN");
    onEvent("gaquantity", "click", function( ) {
     var x = getNumber("gaquantity");
     x = x * 300;
     setNumber("gabill", x);
     onEvent("gapay", "click", function( ) {
                                   	    setScreen("eventticket");
                                   	    setImageURL("eventphoto", "zakirkhanfeesfeature-1722951107.jpg");
                                   	    setText("eventtitle", getText("zakirtitle"));
                                   	    setText("eventtime", getText("zakirtime"));
                                   	    setText("eventvenue", getText("zakirvenue"));
                                   	    setText("eventaccess", getText("gatitle"));
                                   	    setNumber("eventquantity", getNumber("gaquantity"));
                                   	    onEvent("done1", "click", function( ) {
	      var zakirdata = {};
	      zakirdata.name = getText("eventtitle");
	      zakirdata.venue = getText("eventvenue");
	      zakirdata.time = getText("eventtime");
	      zakirdata.access = getText("eventaccess");
	      zakirdata.quantity = getNumber("eventquantity");
	      zakirdata.amount = getNumber("gabill");
	      zakirdata.user = getText("username");
	      createRecord("event", zakirdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                                   	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                                   	  });
     });
  });
  onEvent("zakirvip", "click", function( ) {
    setScreen("vipaccess");
    setText("vipname", "ZAKIR KHAN");
	  onEvent("vipquantity", "click", function( ) {
     var x = getNumber("vipquantity");
     x = x * 500;
     setNumber("vipbill", x);
     onEvent("vippay", "click", function( ) {
                                        	    setScreen("eventticket");
                                        	    setImageURL("eventphoto", "zakirkhanfeesfeature-1722951107.jpg");
                                        	    setText("eventtitle", getText("zakirtitle"));
                                        	    setText("eventtime", getText("zakirtime"));
                                        	    setText("eventvenue", getText("zakirvenue"));
                                        	    setText("eventaccess", getText("viptitle"));
                                        	    setNumber("eventquantity", getNumber("vipquantity"));
                                        	    onEvent("done1", "click", function( ) {
	      var zakirdata = {};
	      zakirdata.name = getText("eventtitle");
	      zakirdata.venue = getText("eventvenue");
	      zakirdata.time = getText("eventtime");
	      zakirdata.access = getText("eventaccess");
	      zakirdata.quantity = getNumber("eventquantity");
	      zakirdata.amount = getNumber("vipbill");
	      zakirdata.user = getText("username");
	      createRecord("event", zakirdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                                        	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                                        	  });
	  });
  });
  onEvent("zakirlou", "click", function( ) {
    setScreen("loungeaccess");
    setText("loungename", "ZAKIR KHAN");
	  onEvent("loungequantity", "click", function( ) {
     var x = getNumber("loungequantity");
     x = x * 700;
     setNumber("loungebill", x);
     onEvent("loungepay", "click", function( ) {
                                        	    setScreen("eventticket");
                                        	    setImageURL("eventphoto", "zakirkhanfeesfeature-1722951107.jpg");
                                        	    setText("eventtitle", getText("zakirtitle"));
                                        	    setText("eventtime", getText("zakirtime"));
                                        	    setText("eventvenue", getText("zakirvenue"));
                                        	    setText("eventaccess", getText("loungetitle"));
                                        	    setNumber("eventquantity", getNumber("loungequantity"));
                                        	    onEvent("done1", "click", function( ) {
	      var zakirdata = {};
	      zakirdata.name = getText("eventtitle");
	      zakirdata.venue = getText("eventvenue");
	      zakirdata.time = getText("eventtime");
	      zakirdata.access = getText("eventaccess");
	      zakirdata.quantity = getNumber("eventquantity");
	      zakirdata.amount = getNumber("loungebill");
	      zakirdata.user = getText("username");
	      createRecord("event", zakirdata, function(record) {
	        console.log("Record created with id:" + record.id);
	        console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " + record.access + "Quantity: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
	        
	      });
	    });
                                        	    onEvent("backarrow", "click", function( ) {
	      setScreen("intropage");
	    });
                                        	  });
	  });
  });
});
onEvent("movies", "click", function( ) {
  setScreen("Movie");
  onEvent("kabirsingh", "click", function( ) {
    setScreen("venue");
    onEvent("dropdown1", "click", function( ) {
      var x = getNumber("dropdown1");
      x = getText("dropdown1");
      onEvent("venue1", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 200;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue1"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
                onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue2", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 300;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue2"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue3", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 400;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue3"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue4", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 500;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue4"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue5", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 600;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue5"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue6", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 700;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "kabirsingh.jpg");
            setText("movievenue", getText("venue6"));
            setText("moviename", "KABIR SINGH");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var kabirdata = {};
                 kabirdata.name = getText("moviename");
                 kabirdata.venue = getText("movievenue");
                 kabirdata.time = getText("movietime");
                 kabirdata.quantity = getNumber("moviequantity");
                 kabirdata.amount = getNumber("movieprice");
                 kabirdata.user = getText("username");
                 createRecord("movie", kabirdata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity + "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
    });
  });
  onEvent("znmd", "click", function( ) {
    setScreen("venue");
    onEvent("dropdown1", "click", function( ) {
      var x = getNumber("dropdown1");
      x = getText("dropdown1");
      onEvent("venue1", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 200;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue1"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue2", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 300;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue2"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue3", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 400;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue3"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue4", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 500;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue4"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue5", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 600;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue5"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue6", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 700;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "znmd-cvr_za2y.png");
            setText("movievenue", getText("venue6"));
            setText("moviename", "ZNMD");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var znmddata = {};
                 znmddata.name = getText("moviename");
                 znmddata.venue = getText("movievenue");
                 znmddata.time = getText("movietime");
                 znmddata.quantity = getNumber("moviequantity");
                 znmddata.amount = getNumber("movieprice");
                 znmddata.user = getText("username");
                 createRecord("movie", znmddata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
    });
  });
  onEvent("anyonebutyou", "click", function( ) {
    setScreen("venue");
    onEvent("dropdown1", "click", function( ) {
      var x = getNumber("dropdown1");
      x = getText("dropdown1");
      onEvent("venue1", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 200;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue1"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
               var anyonedata = {};
               anyonedata.name = getText("moviename");
               anyonedata.venue = getText("movievenue");
               anyonedata.time = getText("movietime");
               anyonedata.quantity = getNumber("moviequantity");
               anyonedata.amount = getNumber("movieprice");
               anyonedata.user = getText("username");
               createRecord("movie", anyonedata, function(record) {
                 console.log("Record created with id:" + record.id);
                 console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                 
               });
             });
             onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue2", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 300;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue2"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var anyonedata = {};
                 anyonedata.name = getText("moviename");
                 anyonedata.venue = getText("movievenue");
                 anyonedata.time = getText("movietime");
                 anyonedata.quantity = getNumber("moviequantity");
                 anyonedata.amount = getNumber("movieprice");
                 anyonedata.user = getText("username");
                 createRecord("movie", anyonedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue3", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 400;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue3"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var anyonedata = {};
                 anyonedata.name = getText("moviename");
                 anyonedata.venue = getText("movievenue");
                 anyonedata.time = getText("movietime");
                 anyonedata.quantity = getNumber("moviequantity");
                 anyonedata.amount = getNumber("movieprice");
                 anyonedata.user = getText("username");
                 createRecord("movie", anyonedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue4", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 500;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue4"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var anyonedata = {};
                 anyonedata.name = getText("moviename");
                 anyonedata.venue = getText("movievenue");
                 anyonedata.time = getText("movietime");
                 anyonedata.quantity = getNumber("moviequantity");
                 anyonedata.amount = getNumber("movieprice");
                 anyonedata.user = getText("username");
                 createRecord("movie", anyonedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue5", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 600;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue5"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var anyonedata = {};
                 anyonedata.name = getText("moviename");
                 anyonedata.venue = getText("movievenue");
                 anyonedata.time = getText("movietime");
                 anyonedata.quantity = getNumber("moviequantity");
                 anyonedata.amount = getNumber("movieprice");
                 anyonedata.user = getText("username");
                 createRecord("movie", anyonedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue6", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 700;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "anyone.jpeg");
            setText("movievenue", getText("venue6"));
            setText("moviename", "ANYONE BUT YOU");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var anyonedata = {};
                 anyonedata.name = getText("moviename");
                 anyonedata.venue = getText("movievenue");
                 anyonedata.time = getText("movietime");
                 anyonedata.quantity = getNumber("moviequantity");
                 anyonedata.amount = getNumber("movieprice");
                 anyonedata.user = getText("username");
                 createRecord("movie", anyonedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
    });
  });
  onEvent("pirates", "click", function( ) {
    setScreen("venue");
    onEvent("dropdown1", "click", function( ) {
      var x = getNumber("dropdown1");
      x = getText("dropdown1");
      onEvent("venue1", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 200;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue1"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue2", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 300;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue2"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue3", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 400;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue3"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue4", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 500;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue4"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue5", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 600;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue5"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue6", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 700;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "piratesofcarab.jpg");
            setText("movievenue", getText("venue6"));
            setText("moviename", "Pirates Of Caribbean");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var piratedata = {};
                 piratedata.name = getText("moviename");
                 piratedata.venue = getText("movievenue");
                 piratedata.time = getText("movietime");
                 piratedata.quantity = getNumber("moviequantity");
                 piratedata.amount = getNumber("movieprice");
                 piratedata.user = getText("username");
                 createRecord("movie", piratedata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
    });
  });
  onEvent("seena", "click", function( ) {
    setScreen("venue");
    onEvent("dropdown1", "click", function( ) {
      var x = getNumber("dropdown1");
      x = getText("dropdown1");
      onEvent("venue1", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 200;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue1"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var sennadata = {};
                 sennadata.name = getText("moviename");
                 sennadata.venue = getText("movievenue");
                 sennadata.time = getText("movietime");
                 sennadata.quantity = getNumber("moviequantity");
                 sennadata.amount = getNumber("movieprice");
                 sennadata.user = getText("username");
                 createRecord("movie", sennadata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue2", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 300;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue2"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var sennadata = {};
                 sennadata.name = getText("moviename");
                 sennadata.venue = getText("movievenue");
                 sennadata.time = getText("movietime");
                 sennadata.quantity = getNumber("moviequantity");
                 sennadata.amount = getNumber("movieprice");
                 sennadata.user = getText("username");
                 createRecord("movie", sennadata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue3", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 400;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue3"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var sennadata = {};
                 sennadata.name = getText("moviename");
                 sennadata.venue = getText("movievenue");
                 sennadata.time = getText("movietime");
                 sennadata.quantity = getNumber("moviequantity");
                 sennadata.amount = getNumber("movieprice");
                 sennadata.user = getText("username");
                 createRecord("movie", sennadata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue4", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 500;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue4"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var sennadata = {};
                 sennadata.name = getText("moviename");
                 sennadata.venue = getText("movievenue");
                 sennadata.time = getText("movietime");
                 sennadata.quantity = getNumber("moviequantity");
                 sennadata.amount = getNumber("movieprice");
                 sennadata.user = getText("username");
                 createRecord("movie", sennadata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue5", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 600;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue5"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
                 var sennadata = {};
                 sennadata.name = getText("moviename");
                 sennadata.venue = getText("movievenue");
                 sennadata.time = getText("movietime");
                 sennadata.quantity = getNumber("moviequantity");
                 sennadata.amount = getNumber("movieprice");
                 sennadata.user = getText("username");
                 createRecord("movie", sennadata, function(record) {
                   console.log("Record created with id:" + record.id);
                   console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
                   
                 });
               });
               onEvent("backarrow1", "click", function( ) {
	      setScreen("intropage");
	    });
          });
        });
      });
      onEvent("venue6", "click", function( ) {
        setScreen("seats");
        onEvent("seatquantity", "click", function( ) {
          var y = getNumber("seatquantity");
          y = getText("seatquantity");
          var r = getNumber("seatquantity");
          r = r * 700;
          setNumber("movieprice", r);
          onEvent("ticketbutton", "click", function( ) {
            setScreen("movieticket");
            setImageURL("movieimage", "senna.jpg");
            setText("movievenue", getText("venue6"));
            setText("moviename", "F1 Seena");
            setText("movietime", x);
            setText("moviequantity", y);
            onEvent("done", "click", function( ) {
             var sennadata = {};
            sennadata.name = getText("moviename");
            sennadata.venue = getText("movievenue");
            sennadata.time = getText("movietime");
            sennadata.quantity = getNumber("moviequantity");
            sennadata.amount = getNumber("movieprice");
            sennadata.user = getText("username");
            createRecord("movie", sennadata, function(record) {
              console.log("Record created with id:" + record.id);
              console.log("Name: " + record.name + "Venue: " + record.venue + "Time: " + record.time + "Access: " +record.quantity+ "Price: " + record.amount + "User: " + record.user);
              
            });
               });
            onEvent("backarrow1", "click", function( ) {
                 setScreen("intropage");
               });
          });
        });
      });
    });
  });
});