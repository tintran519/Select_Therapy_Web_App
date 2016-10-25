(function() {
	'use strict';
	angular.module('services.modalService', ['services.looksIntegrationByUIB'])
		.factory('modalService', ['$rootScope', '$uibModal', ModalService]);

		function ModalService($rootScope, $uibModal) {

					function assignCurrentUser(user) {
						$rootScope.currentUser = user;
						return user;
					}

					function loginModalService () {
						var modalInstance = $uibModal.open({
						  animation: true,
					      ariaLabelledBy: 'modal-title',
					      ariaDescribedBy: 'modal-body',
					      templateUrl: 'app/userDropdown/view/english/signIn/signInModal.html', 
					      controller: 	'signInModalInstanceController',
					      controllerAs: 'signInModalInstanceCtrl',
					      size: 'lg'
						});

						return modalInstance.result.then(assignCurrentUser);
					}

					function signUpModalService () {
						var modalInstance = $uibModal.open({
						  animation: true,
					      ariaLabelledBy: 'modal-title',
					      ariaDescribedBy: 'modal-body',
					      templateUrl: 'app/userDropdown/view/english/signUp/signUpModal.html', 
					      controller: 	'signUpModalInstanceController',
					      controllerAs: 'signUpModalInstanceCtrl',
					      size: 'lg'
						});

						return modalInstance.result.then(assignCurrentUser);
					}

					return {
						loginModalService: loginModalService,
						signUpModalService: signUpModalService
					}
		}
}());