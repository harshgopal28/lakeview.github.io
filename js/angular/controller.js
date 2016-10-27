(function() {
  angular.module('sample',['angular.chips','ui.bootstrap'])
        .controller('basicController', BasicController);

    function BasicController() {
      this.companies = ['CRM', 'HR', 'Sales', 'Logistics'];
        /*for bootstrap.ui.typeahead example*/
        this.availableCompanies = ['Accounts',
            'Purchase',
            'Orders',
            'S1',
            'S2',
            'S3',
            'S4',
            'S5',
        ];
    }
})();