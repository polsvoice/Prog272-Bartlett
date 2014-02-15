var dataDisplay = {
	init: function(){
		$( "#showButton" ).on( "click", dataDisplay.showRecord );
		dataDisplay.populate( 0 );
	},
	showRecord: function(){
		var value = $( "#userInput" ).val();
		dataDisplay.populate( value );
	},
	populate: function( num ){
		var field1 = $( "#line1" );
		var field2 = $( "#line2" );
		var field3 = $( "#line3" );
		$.getJSON( '/read', function( data ){
			theData = data[ num ];
			field1.html( theData.firstName + " " + theData.lastName );
			field2.html( theData.address );
			field3.html( theData.city + " " + theData.state + " " + theData.zip );
		} );
	}
};
dataDisplay.init();
