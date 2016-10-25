/**
 * Calculating Bond Weighted Average
 * Made by TY
 * Date 10/23/2016
 */


// Weighted Average Coupon

var WAC = function(PAR, CurrentCoupon, SumOfAllPARValues)
{
	var WAC = 0;
	
	WAC = ((PAR*CurrentCoupon)/SumOfAllPARValues);
	
	return WAC;
};


