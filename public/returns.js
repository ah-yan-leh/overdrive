
document.addEventListener('DOMContentLoaded', function() {
    function getTicketsOnLoad() {
        console.log("getActiveReturns is called");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                localStorage.setItem('returnsData',"");
                localStorage.setItem('returnsData',this.responseText);
            }
        };
        xhttp.open("GET", '/getActiveReturns', true);
        xhttp.send();
    }
    getTicketsOnLoad();
    var ReturnsModule = (function() {

        var totalByTeamByStatusContainer = [];
        var totalByRepByStatusContainer = [];
        var repStatus1InstallerLT8 = [];
        var repStatus1HomeLT10 = [];
        var teamStatus1InstallerByDC = [];
        var warehouseNameContainer = [];

        function TotalReturnsTeamByStatus(stage) {
            // var totalByTeamByStatusContainer;
            this.return_status0 = 0;
            this.return_status1 = 0;
            this.return_status2 = 0;
            this.return_status3 = 0;
            this.return_status4 = 0;
        }

        function TotalReturnsRepByStatus(user_id, user_name) {
            // var totalByRepByStatusContainer;
            this.return_status0 = 0;
            this.return_status1 = 0;
            this.return_status2 = 0;
            this.return_status3 = 0;
            this.return_status4 = 0;
            this.user_id = user_id;
            this.user_name = user_name;
        }

        // Public methods and properties
        var obj = {};
        obj._TotalReturnsTeamByStatus = function(stage) {
            for (var i in totalByTeamByStatusContainer) {
                if (stage == 0) {
                    totalByTeamByStatusContainer[i].return_status0 += 1;
                } else if (stage == 1) {
                    totalByTeamByStatusContainer[i].return_status1 += 1;
                } else if (stage == 2) {
                    totalByTeamByStatusContainer[i].return_status2 += 1;
                } else if (stage == 3) {
                    totalByTeamByStatusContainer[i].return_status3 += 1;
                } else if (stage == 4) {
                    totalByTeamByStatusContainer[i].return_status4 += 1;
                }
                return;
            }
            var totalReturns_TeamByStatus = new TotalReturnsTeamByStatus(stage);
            totalByTeamByStatusContainer.push(totalReturns_TeamByStatus);
        };
        obj._TotalReturnsRepByStatus = function(user_id, user_name, stage) {
            for (var i in totalByRepByStatusContainer) {
                if (totalByRepByStatusContainer[i].user_id === user_id) {
                    if (stage == 0) {
                        totalByRepByStatusContainer[i].user_name = user_name;
                        totalByRepByStatusContainer[i].user_id = user_id;
                        totalByRepByStatusContainer[i].return_status0++;
                    } else if (stage == 1) {
                        totalByRepByStatusContainer[i].user_name = user_name;
                        totalByRepByStatusContainer[i].user_id = user_id;
                        totalByRepByStatusContainer[i].return_status1++;
                    } else if (stage == 2) {
                        totalByRepByStatusContainer[i].user_name = user_name;
                        totalByRepByStatusContainer[i].user_id = user_id;
                        totalByRepByStatusContainer[i].return_status2++;
                    } else if (stage == 3) {
                        totalByRepByStatusContainer[i].user_name = user_name;
                        totalByRepByStatusContainer[i].user_id = user_id;
                        totalByRepByStatusContainer[i].return_status3 += 1;
                    } else if (stage == 4) {
                        totalByRepByStatusContainer[i].user_name = user_name;
                        totalByRepByStatusContainer[i].user_id = user_id;
                        totalByRepByStatusContainer[i].return_status4 += 1;
                    }
                    return;
                }
            }
            var totalReturns_RepByStatus = new TotalReturnsRepByStatus(user_id, user_name, stage);
            totalByRepByStatusContainer.push(totalReturns_RepByStatus);
        };

        obj._TeamStatus1InstallerByDC = function(orders) {
            for (var i in teamStatus1InstallerByDC) {
                if (teamStatus1InstallerByDC[i].warehouse_name == orders.warehouse_name && teamStatus1InstallerByDC[i].id == orders.id && orders.return_status == 1 && orders.return_method == "ATD Route Truck") {

                    teamStatus1InstallerByDC[i].id = orders.id;
                    teamStatus1InstallerByDC[i].return_status = orders.return_status;
                    teamStatus1InstallerByDC[i].warehouse_name = orders.warehouse_name;
                    teamStatus1InstallerByDC[i].locationnumber = orders.locationnumber;
                    teamStatus1InstallerByDC[i].pick_up_location = orders.pick_up_location;
                    teamStatus1InstallerByDC[i].ordernumber = orders.ordernumber;
                    teamStatus1InstallerByDC[i].order_type = orders.order_type;
                    teamStatus1InstallerByDC[i].user_id = orders.user_id;
                    teamStatus1InstallerByDC[i].user_name = orders.user_name;
                    return;
                }
            }
            var teamStatus_1_InstallerByDC = new RepStatus1InstallerLT8(orders);
            teamStatus1InstallerByDC.push(teamStatus_1_InstallerByDC);
        };

        obj.list_TotalReturnsTeamByStatus = function() { // -> array of Items
            var copy_totalByTeamByStatusContainer = [];
            for (var i in totalByTeamByStatusContainer) {

                var item = totalByTeamByStatusContainer[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                copy_totalByTeamByStatusContainer.push(itemCopy);
            }
            return copy_totalByTeamByStatusContainer;
        };
        obj.list_TotalReturnsRepByStatus = function() { // -> array of Items
            var copy_totalByRepByStatusContainer = [];
            for (var i in totalByRepByStatusContainer) {
                var item = totalByRepByStatusContainer[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                copy_totalByRepByStatusContainer.push(itemCopy);
            }
            return copy_totalByRepByStatusContainer;
        };

        obj.list_RepStatus1InstallerLT8 = function() { // -> array of Items
            var copy_repStatus1InstallerLT8 = [];
            for (var i in repStatus1InstallerLT8) {
                var item = repStatus1InstallerLT8[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                copy_repStatus1InstallerLT8.push(itemCopy);
            }
            return copy_repStatus1InstallerLT8;
        };
        obj.list_RepStatus1HomeLT10 = function() { // -> array of Items
            var copy_repStatus1HomeLT10 = [];
            for (var i in repStatus1HomeLT10) {
                var item = repStatus1HomeLT10[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                copy_repStatus1HomeLT10.push(itemCopy);
            }
            return copy_repStatus1HomeLT10;
        };
        obj.list_TeamStatus1InstallerByDC = function() { // -> array of Items
            var copy_teamStatus1InstallerByDC = [];
            for (var i in teamStatus1InstallerByDC) {
                var item = teamStatus1InstallerByDC[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                copy_teamStatus1InstallerByDC.push(itemCopy);
            }
            return copy_teamStatus1InstallerByDC;
        };
        return obj;
    })();

    function changeOrderStatus(orderStatus) {
        switch (orderStatus) {
            case 0:
                return "Return Awaiting Customer/CSR Action";
            case 1:
                return "Return Has Been Started";
            case 2:
                return "Return Picked Up";
            case 3:
                return "Return Delivered to DC";
            case 4:
                return "Ready For Credit";
            default:
                return "Requires attention";
        }
    }
    localData = localStorage.getItem("returnsData");
    parsedLocalData = JSON.parse(localData);

    for (var i in parsedLocalData) {
        ReturnsModule._TotalReturnsTeamByStatus(
            parsedLocalData[i].returnstage);

        ReturnsModule._TotalReturnsRepByStatus(
            parsedLocalData[i].user_id,
            parsedLocalData[i].user_name,
            parsedLocalData[i].returnstage);
    }

    var listReturnsByRep = ReturnsModule.list_TotalReturnsRepByStatus();
    var listReturnsByTeam = ReturnsModule.list_TotalReturnsTeamByStatus();

    function getDateByDay(dateArgument) {
        var holder;
        var systemFullDate = new Date();
        var systemDay = systemFullDate.getDate();
        var systemMonth = systemFullDate.getMonth();
        var dateToStr = dateArgument;
        var monthCreated = dateToStr.slice(5, 7);
        var dayCreated = dateToStr.slice(8, 10);
        if (systemMonth == monthCreated) {
            holder = (30 - Number(dayCreated)) + Number(systemDay);
        } else {
            holder = Number(systemDay) - Number(dayCreated);
        }
        return holder;
    }

    function parseWarehouseName(dc) {
        var holder = "",
            dcName = dc,
            pattSearch = /[0-9]/gi,
            result = dcName.match(pattSearch);

        for (var i in result) {
            holder += result[i];
        }
        return holder;
    }

    for (var index in listReturnsByTeam) {
        document.getElementById("teamReturnsByStatus").innerHTML += "<td>" + listReturnsByTeam[index].return_status0 + "</td><td>" + listReturnsByTeam[index].return_status1 + "</td><td>" + listReturnsByTeam[index].return_status2 + "</td><td>" + listReturnsByTeam[index].return_status3 + "</td><td>" + listReturnsByTeam[index].return_status4 + "</td><td>"+(listReturnsByTeam[index].return_status0 +listReturnsByTeam[index].return_status1+listReturnsByTeam[index].return_status2+listReturnsByTeam[index].return_status3+listReturnsByTeam[index].return_status4) + "</td>";

    }

    for (var index in listReturnsByRep) {
        document.getElementById("repReturnsByStatus").innerHTML += "<tr> <td>" + listReturnsByRep[index].user_name + "</td> <td>" + listReturnsByRep[index].return_status0 + "</td><td>" + listReturnsByRep[index].return_status1 + "</td> <td>" + listReturnsByRep[index].return_status2 + "</td> <td>" + listReturnsByRep[index].return_status3 + "</td> <td>" + listReturnsByRep[index].return_status4 + "</td><td>" + (listReturnsByRep[index].return_status0 + listReturnsByRep[index].return_status1 + listReturnsByRep[index].return_status2 + listReturnsByRep[index].return_status3 + listReturnsByRep[index].return_status4) + "</td>  </tr>";

    }
    var repReturnsByAgeContainer = [];

    function RepReturnsByAge(user_id, user_name) {
        this.olderThan6 = 0;
        this.olderThan10 = 0;
        this.olderThan15 = 0;
        this.olderThan20 = 0;
        this.user_id = user_id;
        this.user_name = user_name;

    }

    function returnsByAge(user_id, user_name, date) {
        for (var i in repReturnsByAgeContainer) {
            if (repReturnsByAgeContainer[i].user_id === user_id) {
                if ((date > 6 && date < 10)) {
                    console.log("date > 6 && date < 10 = " + (date > 6 && date < 10));
                    repReturnsByAgeContainer[i].olderThan6 += 1;
                    repReturnsByAgeContainer[i].user_id = user_id;
                    repReturnsByAgeContainer[i].user_name = user_name;
                } else if ((date > 9 && date < 15)) {
                    console.log("date > 9 && date < 15 = " + (date > 9 && date < 15));
                    repReturnsByAgeContainer[i].olderThan10 += 1;
                    repReturnsByAgeContainer[i].user_id = user_id;
                    repReturnsByAgeContainer[i].user_name = user_name;
                } else if ((date > 14 && date < 20)) {
                    console.log("date > 14 && date < 20 = " + (date > 14 && date < 20));
                    repReturnsByAgeContainer[i].olderThan15 += 1;
                    repReturnsByAgeContainer[i].user_id = user_id;
                    repReturnsByAgeContainer[i].user_name = user_name;
                } else if ((date > 19)) {
                    console.log("date > 19 = " + (date > 19));
                    repReturnsByAgeContainer[i].olderThan20 += 1;
                    repReturnsByAgeContainer[i].user_id = user_id;
                    repReturnsByAgeContainer[i].user_name = user_name;
                }
                return;
            }
        }
        var repReturns_ByAge = new RepReturnsByAge(user_id, user_name, date);
        repReturnsByAgeContainer.push(repReturns_ByAge);
    }
    for (var i in parsedLocalData) {
        if (parsedLocalData[i].return_method == "ATD Route Truck" && getDateByDay(parsedLocalData[i].created_at) > 6 && currentODuser == parsedLocalData[i].user_id) {
            /*
            document.getElementById("myOldInstallerReturns").innerHTML += '<a href="http://overdrive.tirebuyer.com/tborders/'+parsedLocalData[i].tborder_id+'"><button type="button" class="btn btn-warning btn-lg btn-block">'+parsedLocalData[i].user_name+': Order# : '+parsedLocalData[i].ordernumber+' ('+parsedLocalData[i].name+')  requires your attention ('+ getDateByDay(parsedLocalData[i].created_at) + ' days old)</button></a><br>';
            orderCounter++;
            */
            orderCounter++;
        }
        if (parsedLocalData[i].return_method !== "ATD Route Truck" && getDateByDay(parsedLocalData[i].created_at) > 10 && currentODuser == parsedLocalData[i].user_id) {
            /*
            console.log(" parsedLocalData[i].user_name " + parsedLocalData[i].user_name + "getDateByDay(parsedLocalData[i].created_at) > 10" + (getDateByDay(parsedLocalData[i].created_at) > 10));
            document.getElementById("myOldHomeReturns").innerHTML += '<a href="http://overdrive.tirebuyer.com/tborders/'+parsedLocalData[i].tborder_id+'"><button type="button" class="btn btn-warning btn-lg btn-block">'+parsedLocalData[i].user_name+': Order# : '+parsedLocalData[i].ordernumber+' ('+parsedLocalData[i].name+')  requires your attention ('+ getDateByDay(parsedLocalData[i].created_at) + ' days old)</button></a><br>';
            */
            orderCounter++;

        }
        if (parsedLocalData[i].return_method == "ATD Route Truck" && getDateByDay(parsedLocalData[i].created_at) > 6) {
            console.log(" parsedLocalData[i].user_name " + parsedLocalData[i].user_name);
            document.getElementById("installerReturnLT6").innerHTML += "<tr> <td>" + parsedLocalData[i].user_name + "</td> <td>" + parsedLocalData[i].ordernumber + "</td> <td>" + parsedLocalData[i].rma + "</td> <td>" + parsedLocalData[i].locationnumber + "</td> <td>" + parsedLocalData[i].return_method + "</td> <td>" + getDateByDay(parsedLocalData[i].created_at) + "</td> </tr>";
        }
        if (parsedLocalData[i].return_method !== "ATD Route Truck" && getDateByDay(parsedLocalData[i].created_at) > 10) {

            console.log(" parsedLocalData[i].user_name " + parsedLocalData[i].user_name + "getDateByDay(parsedLocalData[i].created_at) > 10" + (getDateByDay(parsedLocalData[i].created_at) > 10));
            document.getElementById("homeReturnLT10").innerHTML += "<tr> <td>" + parsedLocalData[i].user_name + "</td> <td>" + parsedLocalData[i].ordernumber + "</td> <td>" + parsedLocalData[i].rma + "</td> <td>" + parsedLocalData[i].locationnumber + "</td> <td>" + parsedLocalData[i].return_method + "</td> <td>" + getDateByDay(parsedLocalData[i].created_at) + "</td> </tr>";
        }
        returnsByAge(parsedLocalData[i].user_id, parsedLocalData[i].user_name, getDateByDay(parsedLocalData[i].created_at));
    }

    for (var index in repReturnsByAgeContainer) {
        document.getElementById("repReturnsByAge").innerHTML += "<tr> <td>" + repReturnsByAgeContainer[index].user_name + "</td> <td>" + repReturnsByAgeContainer[index].olderThan6 + "</td> <td>" + repReturnsByAgeContainer[index].olderThan10 + "</td> <td>" + repReturnsByAgeContainer[index].olderThan15 + "</td> <td>" + repReturnsByAgeContainer[index].olderThan20 + "</td> </tr>";
    }
console.log('orderCounter',orderCounter)
}, false);
