var app = angular.module('contactApp');
app.service('contactservice', ['$filter', function ($filter) {
    var self = this;
    var contacts = [
        { id: 1, name: 'azadeh', mobile: "0408655761", email: "azadehkhojandi@gmail.com" },
        { id: 2, name: 'harry', mobile: "0407333666", email: "harry@gmail.com" }
    ];
    self.getAll = function () {
        return contacts;
    }
    self.getNewId = function () {
        var id = 1;
        if (contacts.length > 0) {
            id = contacts[contacts.length - 1].id + 1;
        }
        return id;
    }
    self.delete = function (id) {
        contacts = $filter('filter')(contacts, function (value) { return value.id !== id; });
    }

    self.get = function (id) {
        var foundcontact = $filter('filter')(contacts, { id: id });
        if (foundcontact != undefined && foundcontact.length > 0) {
            return foundcontact[0];
        }
        return null;
    };
    self.saveContact = function (newcontact) {
        var foundcontact = self.get(newcontact.id);
        if (foundcontact === null) {
            self.add(newcontact);
        } else {
            self.update(foundcontact, newcontact);
        }

    };
    self.add = function (newcontact) {
        contacts.push(newcontact);
    };
    self.update = function (foundcontact, newcontact) {

        foundcontact.name = newcontact.name;
        foundcontact.mobile = newcontact.mobile;
        foundcontact.email = newcontact.email;
    };
}
]);