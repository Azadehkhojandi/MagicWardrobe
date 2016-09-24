var app = angular.module('myApp');
app.service('dressservice', ['$filter', function ($filter) {
    var self = this;
    var dresses = [

{ id: 1, label: 'Silver sparkly dress',image:'https://s-media-cache-ak0.pinimg.com/564x/19/c3/f3/19c3f3d69d6bac5df59b89b3b1e138ea.jpg', buy: '$120', rent: '$60',distance:'5km',tags:'silver',size:'08'},
{ id: 2, label: 'Red cocktail dress',image:'https://s-media-cache-ak0.pinimg.com/564x/92/23/10/92231048009612dc850d937aea25e1ab.jpg' ,buy: '$120', rent: '$60',distance:'less than 300m',tags:'red',size:'10' },
{ id: 3, label: 'Long flower dress',image:'https://s-media-cache-ak0.pinimg.com/236x/a5/8a/62/a58a62af1fa270f65d69e8ebdacb5a89.jpg', buy: '$120', rent: '$120',distance:'5km',tags:'',size:'08'},
{ id: 4, label: 'Dress with sparkles',image:'https://s-media-cache-ak0.pinimg.com/236x/8b/6e/a6/8b6ea6be9a9bfa3cd5ae3ab8389c7709.jpg' ,buy: '$60', rent: '$60',distance:'less than 300',tags:'',size:'10' },
{ id: 5, label: 'My favourite dress',image:'https://s-media-cache-ak0.pinimg.com/236x/35/a4/f0/35a4f0659c6189d12da8430e7b4b74b0.jpg', buy: '$120', rent: '$120',distance:'5km' ,tags:'red',size:'06'},
{ id: 6, label: 'Retro fun dress',image:'https://s-media-cache-ak0.pinimg.com/564x/af/65/77/af6577efe9c0dfd921f03127cc7f6cb8.jpg' ,buy: '$60', rent: '$60',distance:'less than 300' ,tags:'red',size:'10'},
{ id: 7, label: 'Short dress with purple flowers',image:'https://s-media-cache-ak0.pinimg.com/564x/08/bc/c8/08bcc81e5c8d1335999077191f596531.jpg', buy: '$120', rent: '$120',distance:'5km',tags:'red',size:'08' },
{ id: 8, label: 'High line evening dress',image:'https://s-media-cache-ak0.pinimg.com/564x/51/03/d2/5103d291659bded22312e666798abf53.jpg' ,buy: '$60', rent: '$60',distance:'less than 300',tags:'red',size:'08'},
{ id: 9, label: 'My favourite dress',image:'/images/01-homepage-dress.png', buy: '$120', rent: '$120',distance:'5km' ,tags:'light',size:'06'},
{ id: 10, label: 'Retro fun dress',image:'/images/02-homepage-dress.png' ,buy: '$60', rent: '$60',distance:'less than 300' ,tags:'light',size:'10'},
{ id: 11, label: 'Short dress with purple flowers',image:'/images/03-homepage-dress.png', buy: '$120', rent: '$120',distance:'5km',tags:'light',size:'08' },
{ id: 12, label: 'High line evening dress',image:'/images/04-homepage-dress.png' ,buy: '$60', rent: '$60',distance:'less than 300',tags:'light',size:'08'}

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
