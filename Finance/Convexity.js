/**
 * Calculating Bond Convexity
 * Made by TY
 * Date 10/23/2016
 */

var Convexity = function(BondPrice, InterestRate, Duration) {
	
	var ConvexityResult = 0;
	InterestRate = InterestRate/100;
	
	ConvexityResult = (1/BondPrice)*(Math.pow(Duration, 2) * (BondPrice*InterestRate));
	ConvexityResult = ConvexityResult / (Duration * Math.pow(InterestRate,2));
	
	return ConvexityResult;
	
};

console.log(Convexity(1000,2,3));