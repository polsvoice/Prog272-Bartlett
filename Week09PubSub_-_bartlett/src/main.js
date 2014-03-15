require.config( {
    paths: {
        "jQuery": "http://code.jquery.com/jquery-latest.min",
        "pubsub": "TinyPubSub"
    }
} );

require( [ "CalculateUi", "Calculate", ], function( calcUi, calc )
{
    "use strict";
    
    $( document ).ready( function()
                        {
                            calcUi.publisher();
                            calc.subscriber();
                        } );
} );
