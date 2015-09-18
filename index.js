var lineInt = require('./lib/lineIntersect')

exports.features = function(obj1, obj2, callback) {
	var coords1 = obj1.geometry.coordinates
	var coords2 = obj2.geometry.coordinates
	lineInt.all(coords1, coords2, function(r) {
		if(r === false) { callback(false) }
		else {
			var points = []
			for(i=0;i<r.length;i++) {
				var f = {type:'Feature', properties: {}, geometry: {type:'Point', coordinates: r[i]}}
				points.push(f)
			}
			callback(points)
		}
	})
}
exports.coordinates = function(obj1, obj2, callback) {
	lineInt.all(obj1, obj2, function(r) { callback(r)})
}
