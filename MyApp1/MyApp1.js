
var Employees = new Meteor.Collection("employees")

if (Meteor.isClient) {
  Template.test.rendered = function() {
    $('.employee_form').hide();
  }

  Template.test.events({

    'click .new_employee': function() {

      $('.employee_form').toggle();

    },

    'click .employee_submit': function() {

      Employees.insert({
        name: $('.employee_name').val(),
        ic: $('.employee_ic').val(),
        dob: $('.employee_dob').val(),
        email: $('.employee_email').val(),
        phone: $('.employee_phone').val(),
        address: $('.employee_address').val()
      });
      
    }

  });

  Template.employees.lists = function() {
    return Employees.find({});
  };

  Template.employees.events({
    'click a.delete': function(e) {
      e.preventDefault();
      Employees.remove(this._id);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
