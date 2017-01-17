function parseData2(createGraph2) {
	Papa.parse("../data/population_baltimore.csv", {
		download: true,
		complete: function(results) {
			createGraph2(results.data);
		}
	});
}

function createGraph2(data) {
	var time = [];
	var population = ["population of baltimore(thousands)"];

	for (var i = 1; i <47; i++) {
		time.push(data[i][0]);
		population.push(data[i][1]);
	}

	//console.log(time);
	//console.log(population);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	population
	        ],
	        type: 'bar'
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }


	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData2(createGraph2);