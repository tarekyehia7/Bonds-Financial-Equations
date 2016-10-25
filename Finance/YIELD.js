/**
 * Calculating Current YIELD, Adjusted Current YIELD, YIELD to Maturity and YIELD to Worst
 * Made by TY
 * Date 10/23/2016
 */

var CurrentYIELD = function(CouponRate, LastPrice)
{
	var CurrentYIELDResult = 0;
		
	CurrentYIELDResult = (CouponRate/LastPrice)*100;
	
	return CurrentYIELDResult;	
};

var AdjustedCurrentYIELD = function(CouponRate, LastPrice, MarketPrice, Maturity)
{
	var AdjustedCurrentYIELDResult = 0;
	var CurrentYIELD = 0;
		
	//First Calculate Current YIELD
	
	CurrentYIELD = (CouponRate/LastPrice) * 100;
	
	AdjustedCurrentYIELDResult = CurrentYIELD + ((100 - MarketPrice)/Maturity);
	
	return AdjustedCurrentYIELDResult;
};

var YIELDToMaturity = function(Coupon, FaceValue, Price, Maturity)
{
	var YIELDToMaturity = 0;
	
	YIELDToMaturity = Coupon + ((FaceValue-Price)/Maturity);
	YIELDToMaturity = YIELDToMaturity / ((FaceValue + Price)/2);

	return YIELDToMaturity;
};

var YIELDToWorst  = function(CouponRate, LastPrice, MarketPrice, RemainingYearsToNextCallDate)
{
	var YIELDToWorst = 0;
	var CurrentYIELD = 0;
		
	//First Calculate Current YIELD
	
	CurrentYIELD = (CouponRate/LastPrice) * 100;
	
	YIELDToWorst = CurrentYIELD + ((100 - MarketPrice)/RemainingYearsToNextCallDate);
	
	return YIELDToWorst;
};

console.log(CurrentYIELD(5, 99));