var margin = {top: 20, right: 10, bottom: 20, left: 10};

var width = 960 - margin.right - margin.left;
var height = 500 - margin.top - margin.bottom;

var g = d3.select('#chart-area')
	.append('svg')
		.attr('width', width + margin.right + margin.left)
		.attr('height', height + margin.top + margin.bottom)
	.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


var circle = g.append("circle")
	.attr("cx", 960)
	.attr("cy", 0)
	.attr("r", 70)
	.attr("fill", "grey");
