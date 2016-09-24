var app = angular.module('myApp');
app.service('dressservice', ['$filter', function ($filter) {
    var self = this;
    var dresses = [
        { id: 1, lable: 'short ...',image:"/images/01-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km" },
        { id: 2, lable: 'chic high',image:"images/02-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300" },
        { id: 3, lable: 'short ...',image:"/images/03-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km" },
        { id: 4, lable: 'chic high',image:"images/04-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300" },
        { id: 5, lable: 'short ...',image:"/images/01-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km" },
        { id: 6, lable: 'chic high',image:"images/02-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300" },
        { id: 7, lable: 'short ...',image:"/images/03-homepage-dress.png", buy: "$120", rent: "$120",distance:"5km" },
        { id: 8, lable: 'chic high',image:"images/04-homepage-dress.png" ,buy: "$60", rent: "$60",distance:"less than 300" }
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