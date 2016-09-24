var app = angular.module('myApp');
app.service('dressservice', ['$filter', function ($filter) {
    var self = this;
    var dresses = [
        { id: 1, label: 'short ...',image:"/images/01-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km",tags:"colorful",size:"08"},
        { id: 2, label: 'chic high',image:"images/02-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300",tags:"blue",size:"10" },
        { id: 3, label: 'short ...',image:"/images/03-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km",tags:"",size:"08"},
        { id: 4, label: 'chic high',image:"images/04-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300",tags:"",size:"10" },
        { id: 5, label: 'short ...',image:"/images/01-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km" ,tags:"",size:"06"},
        { id: 6, label: 'chic high',image:"images/02-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300" ,tags:"",size:"10"},
        { id: 7, label: 'short ...',image:"/images/03-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km",tags:"",size:"08" },
        { id: 8, label: 'chic high',image:"images/04-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300",tags:"colorful",size:"08",size:"08" }
    ];
    self.getAll = function () {
        return dresses;
    }
    self.getNewId = function () {
        var id = 1;
        if (dresses.length > 0) {
            id = dresses[dresses.length - 1].id + 1;
        }
        return id;
    }
    self.delete = function (id) {
        dresses = $filter('filter')(dresses, function (value) { return value.id !== id; });
    }

    self.get = function (id) {
        var founddress = $filter('filter')(dresses, { id: id });
        if (founddress != undefined && founddress.length > 0) {
            return founddress[0];
        }
        return null;
    };
    self.saveDress = function (newdress) {
        var founddress = self.get(newdress.id);
        if (founddress === null) {
            self.add(newdress);
        } else {
            self.update(founddress, newdress);
        }

    };
    self.add = function (newdress) {
        dresses.push(newdress);
    };
    self.update = function (founddress, newdress) {

        founddress.lable = newcontact.lable;
        founddress.image = newcontact.image;
        founddress.buy = newcontact.buy;
        founddress.rent = newcontact.rent;
         founddress.distance = newcontact.distance;
    };


}
]);