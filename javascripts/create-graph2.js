/*
 * Parse the data and create a graph with the data.
 */

function parseData2(createGraph2) {
	Papa.parse("../data/Employee_salary_copy.csv", {
		download: true,
		complete: function(results) {
			createGraph2(results.data);
		}
	});
}

function createGraph2(data) {
	var Employee = [];
	var salary = ["the top 20 salaries"];

	for (var i = 1; i < 20; i++) {
		Employee.push(data[i][0]);
		salary.push(data[i][5]);
	}

	//console.log(Employee);
	//console.log(salary);

	var chart = c3.generate({
		bindto: '#chart_salary',
	    data: {
	        columns: [
	        	salary
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: Employee,
	            tick: {
	            	multiline: true
                	/*culling: {
                    	max: 15
                	}*/
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


