/*
 * Parse the data and create a graph with the data.
 */

function parseData2(createGraph2) {
	Papa.parse("../data/unemployment_baltimore.csv", {
		download: true,
		complete: function(results) {
			createGraph2(results.data);
		}
	});
}

function createGraph2(data) {
	var time = [];
	var unemployment = ["unemplyment_rate(%)"];

	for (var i = 1; i < 300; i++) {
		time.push(data[i][0]);
		unemployment.push(data[i][1]);
	}

	console.log(time);
	console.log(unemployment);

	var chart = c3.generate({
		bindto: '#chart3',
	    data: {
	        columns: [
	        	unemployment
	        ]
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
