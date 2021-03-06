(function() {
	'use strict';
	angular.module('myApp.admin')
		.controller('adminAddController', ['$scope', 'ajaxService', 'toastFactory', adminAddControllerHandler]);

		function adminAddControllerHandler($scope, ajaxService, toastFactory) {
			var admin_add_ctrl = this;
			var postData = null;
			
			admin_add_ctrl.submit = function() {
				
				postData = {
				name: admin_add_ctrl.name,
				phoneNumber: admin_add_ctrl.phoneNumber,
				ssn: admin_add_ctrl.ssn,
				address: admin_add_ctrl.address,
				email: admin_add_ctrl.email,
				program: [{
					programName: admin_add_ctrl.FirstprogramName,
					programRotation: admin_add_ctrl.FirstprogramRotation
				}, {
					programName: admin_add_ctrl.SecondprogramName,
					programRotation: admin_add_ctrl.SecondprogramRotation
				}, {
					programName: admin_add_ctrl.ThirdprogramName,
					programRotation: admin_add_ctrl.ThirdprogramRotation
				}, {
					programName: admin_add_ctrl.ForthprogramName,
					programRotation: admin_add_ctrl.ForthprogramName
				}, {
					programName: admin_add_ctrl.FifthprogramName,
					programRotation: admin_add_ctrl.FifthprogramRotation
				}],
				graduate: admin_add_ctrl.graduate,
				tuitionPaid: admin_add_ctrl.tuitionPaid,
				jobPlaced: admin_add_ctrl.jobPlaced,
				fullTimePos: admin_add_ctrl.fullTimePos,
				partTimePos: admin_add_ctrl.partTimePos,
				payRate: admin_add_ctrl.payRate,
				jobDescription: admin_add_ctrl.jobDescription,
				noJobReason: admin_add_ctrl.noJobReason,
				passedExam: admin_add_ctrl.passedExam,
				passedOn1st: admin_add_ctrl.passedOn1st,
				passedOn2nd: admin_add_ctrl.passedOn2nd,
				passedOn3rd: admin_add_ctrl.passedOn3rd
			};

				postData.program = postData.program.filter(function(eachProgram) {	//filters each program input so only the submitted values are submitted to the db
					return eachProgram.programName && eachProgram.programRotation;
				});
				console.log(postData);
				ajaxService.post('/admin/add/', postData)
				.then(function(successResponse) {
					toastFactory.successAdd(postData.name);
					admin_add_ctrl.refresh();
					console.log(successResponse);
				}, 
			function(failureResposne) {
					console.log(failureResposne);
				});
			};

			admin_add_ctrl.refresh = function() {	
//strings and Numbers				
				admin_add_ctrl.name = '';
				admin_add_ctrl.phoneNumber = '';
				admin_add_ctrl.ssn = '';
				admin_add_ctrl.address = '';
				admin_add_ctrl.email = '';
				admin_add_ctrl.payRate = '';
				admin_add_ctrl.jobDescription = '';
				admin_add_ctrl.noJobReason = '';	
				admin_add_ctrl.showAddProgramInput = false;			

//Boolean Values
				var graduate = document.getElementsByName('graduate');
				var tuitionPaid = document.getElementsByName('tuitionPaid');
				var jobPlaced = document.getElementsByName('jobPlaced');
				var fullTimePos = document.getElementsByName('fullTimePos');
				var partTimePos = document.getElementsByName('partTimePos');
				var passedExam = document.getElementsByName('passedExam');
				var passedOn1st = document.getElementsByName('passedOn1st');
				var passedOn2nd = document.getElementsByName('passedOn2nd');
				var passedOn3rd = document.getElementsByName('passedOn3rd');


				graduate.forEach(function(input) {
					input.checked = false;
				});
				tuitionPaid.forEach(function(input) {
					input.checked = false;
				});
				jobPlaced.forEach(function(input) {
					input.checked = false;
				});
				fullTimePos.forEach(function(input) {
					input.checked = false;
				});
				partTimePos.forEach(function(input) {
					input.checked = false;
				});
				passedExam.forEach(function(input) {
					input.checked = false;
				});
				passedOn1st.forEach(function(input) {
					input.checked = false;
				});
				passedOn2nd.forEach(function(input) {
					input.checked = false;
				});
				passedOn3rd.forEach(function(input) {
					input.checked = false;
				});

			};
		};
}());