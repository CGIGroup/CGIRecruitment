/**
 * Register the About Controller class with RequireJS
 */
(function( define ) {
    "use strict";

    define( ['model/appModel'],

        function (appModel)
        {
            /**
             * @constructor
             */
            var adminController = function($scope, $uibModal, uiGridConstants, 
                                    candidateService, dataService, $translate)
            {
                // #region init, 
                console.log("admin Controller Initialized");
                //$scope.content = appModel.getInstance().getData().pages[1].content;
                $scope.candidates = [];
                $scope.isSelectedCandidate = false;
                $scope.selectedCandidate ={};

                $scope.GetAllCandidates = function(){
                    candidateService.getAll().then( (data) => {
                        console.log("GetAllCandidates data = " + JSON.stringify(data));
                        angular.extend($scope.candidates, data);
                        angular.extend($scope.serviceGrid.data, data);
                    }, (err) => {
                            console.log('GetAllCandidates err ' + JSON.stringify(err));
                    });
                }

                //TODO, problem with sync
                $scope.GetAllCandidates();
                
                // #endregion    

                //csv file needs data in format
                $scope.exportData = [];

                $scope.getExportData = function(){
                    candidateService.getFormatedData().then( (data) => {
                        console.log("getFormatedData data = " + JSON.stringify(data));
                        angular.extend($scope.exportData, data);
                    }, (err) => {
                            console.log('getFormatedData err ' + JSON.stringify(err));
                    });
                }
               
                $scope.getExportData();
                $scope.reportHeader = [ "firstName", "lastName", "gender","emailId", "phoneNumber", "highestQualification", 
                                        "qualificationDate",  "role", "linkedInUrl", "preferredLocation",
                                         "subscribeToNewsLetter", "privacyDisclaimer", "sector", "cgiContact", "comment"];

                // #region Grid,
                $scope.serviceGrid = {
                    enableRowSelection : true,
                    enableRowHeaderSelection : false,
                    multiSelect : false,
                    enableSorting : true,
                    enableFiltering : true,
                    enableGridMenu : true,
                    rowTemplate : "<div ng-dblclick=\"grid.appScope.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
                };

                $scope.serviceGrid.columnDefs = [ {
                        field : '_id',
                        displayName : 'Id',
                        enableSorting : true,
                        type : 'number',
                        enableCellEdit : false,
                        width : 60,
                        sort : {
                            direction : uiGridConstants.ASC,
                            priority : 1,
                        },
                        cellTemplate: 'edit-button'
                    }, {
                        field : 'firstName',
                        displayName : 'First Name',
                        enableSorting : true,
                        enableCellEdit : false
                    }, {
                        field : 'lastName',
                        displayName : 'Last Name',
                        enableSorting : true,
                        enableCellEdit : false
                    }, {
                        field : 'emailId',
                        displayName : 'Email Id',
                        enableSorting : true,
                        enableCellEdit : false
                    } ];

                $scope.editRow = function (grid, row) {
                        $uibModal.open({
                            templateUrl : 'assets/views/candidateDetails.html',
                            controller : 'candidateDetailsController',
                            resolve : {
                                grid : function() {
                                    return grid;
                                },
                                row : function() {
                                    return row;
                                }
                            }
                        });
                    }
                
                 // #endregion 

            };

            return ["$scope", '$uibModal', 'uiGridConstants','candidateService', 'dataService', '$translate', adminController];
        });

}( define ));