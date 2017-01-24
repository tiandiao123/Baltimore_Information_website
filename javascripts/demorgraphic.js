function parseData2(createGraph2) {
	Papa.parse("../data/data_ages.csv", {
		download: true,
		complete: function(results) {
			createGraph2(results.data);
		}
	});
}

function createGraph2(data) {
	var ages = ['18-24','25-34','35-44','45-54','55-59','60-61','62-64','65-74','75+'];
	var data1 = ['native people'];
	var data2=['foreign-born people'];


	for (var i = 4; i<=21; i++) {
		if(i%2==0) data1.push(data[1][i]);
        if(i%2==1) data2.push(data[1][i]);
	}

	//console.log(time);
	//console.log(population);

	var chart = c3.generate({
		bindto: '#ages_data',
	    data: {
	        columns: [
	        	data1,
	        	data2
	        ],
	        type: 'bar'
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: ages,
	            tick: {
	            	multiline: false
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


var chart_ethnicity = c3.generate({
    bindto: '#ethnicity',

    data: {
        // iris data from R

        columns: [
            ['the number of black people(386599)', 386599],
            ['the number of white people(174627)', 174627],
            ['the number of hispanic people(29448)',29448],
            ['the number of asian people(16984)',16984],
            ['others(11909)',11909]
        ],
        type : 'pie'
    }
});