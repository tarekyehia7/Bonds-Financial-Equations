/**
 * Calculating Macaulay Duration, Modified Duration and Duration
 * Made by TY
 * Date 10/23/2016
 */

var MacaulayDuration = function(Maturity, Coupon, LastMarketPrice, Frequency, InterestRate) {
	
	var PresentValue, Discount, time, Sum = 0, MacaulayDurationResult;
	var CashFlow = 0;
	var CouponDollar = Coupon/100;
	var RealMaturityRespectivetoFrequency = Maturity*Frequency;
	
	for(time = 1; time <= RealMaturityRespectivetoFrequency; time++)
	{
		CashFlow = CouponDollar * LastMarketPrice;
		if(time === RealMaturityRespectivetoFrequency)
		{
			CashFlow += LastMarketPrice;
		}
		Discount = 1/Math.pow(1+CouponDollar, time);

		PresentValue = time * CashFlow * Discount;
		
		Sum += PresentValue;
		
	}
	MacaulayDurationResult = Sum/LastMarketPrice;
	
	MacaulayDurationResult = Number((MacaulayDurationResult).toFixed(2));
	
	return MacaulayDurationResult;
};

var ModifiedDuration = function(MacaulayDuration, CouponRate)
{
	var ModifiedDuration = MacaulayDuration/1+CouponRate;
	
	return ModifiedDuration;
};


//console.log(ModifiedDuration(MacaulayDuration(3,6,1000,2,6), 6));