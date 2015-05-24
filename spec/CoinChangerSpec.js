describe("CoinChanger", function() {
  var changer;


  beforeEach(function() {
    changer = new CoinChanger();
    
  });
  
  it("makes change for one cent", function() {
	 var amount = 1;
	 expect (CoinChanger.changer(amount)).toEqual([1]);
  });    
  
  
  it ("makes change for two", function() {
	    var amount = 2;
	    expect (CoinChanger.changer(amount)).toEqual([1,1]);
	  });

	  it ("makes change for three", function() {
	    var amount = 3;
	    expect (CoinChanger.changer(amount)).toEqual([1,1,1]);
	  }); 

	  it ("makes change for four", function() {
	    var amount = 4;
	    expect (CoinChanger.changer(amount)).toEqual([1,1,1,1]);
	  });

	    it ("makes change for five", function() {
	    var amount = 5;
	    expect (CoinChanger.changer(amount)).toEqual([5]);
	  });

	    it ("makes change for six", function() {
	    var amount = 6;
	    expect (CoinChanger.changer(amount)).toEqual([5, 1]);
	  });

	  it("makes change for nine", function(){
	    var amount = 9;
	    expect (CoinChanger.changer(amount)).toEqual([5,1,1,1,1]);
	  });

	  it("makes change for ten", function(){
	    var amount = 10;
	    expect (CoinChanger.changer(amount)).toEqual([10]);
	  });

	   it("makes change for 19", function(){
	    var amount = 19;
	    expect (CoinChanger.changer(amount)).toEqual([10, 5, 1,1,1,1]);
	  });

	   it("makes change for 20", function(){
	    var amount = 20;
	    expect (CoinChanger.changer(amount)).toEqual([10,10]);
	  });

	 it("makes change for 24", function(){
	    var amount = 24;
	    expect (CoinChanger.changer(amount)).toEqual([10,10,1,1,1,1]);
	  });

	 it("makes change for 25", function(){
	    var amount = 25;
	    expect (CoinChanger.changer(amount)).toEqual([25]);
	  });

	 it("makes change for 49", function(){
	    var amount = 49;
	    expect (CoinChanger.changer(amount)).toEqual([25,10,10,1,1,1,1]);
	  });

	 it("makes change for 75", function(){
	    var amount = 75;
	    expect (CoinChanger.changer(amount)).toEqual([25,25,25]);
	  });

});
