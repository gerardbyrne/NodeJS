// agentsCalculationsModule.js
module.exports = {
					commission: function(salesTotal, commissionRate) 
					{
				  	return salesTotal * commissionRate/100;
				 	},

				 	bonus: function(salesTotal) 
				 	{
				 		if (salesTotal > 10000) 
				 		{
							return salesTotal * 0.001;
				 		}
				 		else
				 		{
				 			return 0.00;
				 		}
				  	
					} 
				}