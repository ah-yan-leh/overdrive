var shoppingCart = (function() {
    // Private methods and properties
    var repsalescart = [];
    var orderTypecart = [];
    var repordertypescart = [];
  
    function RepSales(repname, amount, discount, qty, accqty) {
      this.repSalesOrdercount = 1;
      this.repname = repname;
      this.amount = amount;
      this.discount = discount;
      this.qty = qty;
      this.accqty = accqty;
    }
  
    function RepSalesOrderType(repname, ordertype, amount, discount, qty, accqty) {
      this.repSalesOrderTypecount = 1;
      this.repname = repname;
      this.ordertype = ordertype;
      this.amount = amount;
      this.discount = discount;
      this.qty = qty;
      this.accqty = accqty;
    }
  
    function OrderTypeSales(ordertype, amount, discount, qty, accqty) {
      this.orderTypeSalescount = 1;
      this.ordertype = ordertype;
      this.amount = amount;
      this.discount = discount;
      this.qty = qty;
      this.accqty = accqty;
    }
  
    function OrderTypeSalesChange(ordertype) {
      switch (ordertype) {
        case 1:
          return "Ship To Home";
          break;
        case 2:
          return "Ship To Installer";
          break;
        case 3:
          return "Accessories/Other";
          break;
        default:
          return "No Selection";
          break;
      }
    }
  
  
    // Public methods and properties
    var obj = {};
  
    obj.addByRep = function(repname, amount, discount, qty, accqty) {
      for (var i in repsalescart) {
        if (repsalescart[i].repname === repname) {
          var countrepSalesOrders = 1;
          repsalescart[i].repSalesOrdercount += countrepSalesOrders;
          repsalescart[i].amount += amount;
          repsalescart[i].discount += discount;
          repsalescart[i].qty += qty;
          repsalescart[i].accqty += accqty;
          return;
        }
      }
      var salesrepname = new RepSales(repname, amount, discount, qty, accqty);
      repsalescart.push(salesrepname);
    };
  
    obj.addByOrderType = function(ordertype, amount, discount, qty, accqty) {
      for (var i in orderTypecart) {
        if (orderTypecart[i].ordertype === OrderTypeSalesChange(ordertype)) {
          var countorderTypeSalesc = 1;
          orderTypecart[i].orderTypeSalescount += countorderTypeSalesc;
          orderTypecart[i].amount += amount;
          orderTypecart[i].discount += discount;
          orderTypecart[i].qty += qty;
          orderTypecart[i].accqty += accqty;
          return;
        }
      }
      var item = new OrderTypeSales(OrderTypeSalesChange(ordertype), amount, discount, qty, accqty);
      orderTypecart.push(item);
    };
  
    obj.addByRepSalesByOrderType = function(repname, ordertype, amount, discount, qty, accqty) {
      for (var i in repordertypescart) {
        if (repordertypescart[i].repname === repname) {
          if (repordertypescart[i].ordertype === OrderTypeSalesChange(ordertype)) {
            var countrepSalesOrderType = 1;
            repordertypescart[i].repSalesOrderTypecount += countrepSalesOrderType;
            repordertypescart[i].repname = repname;
            repordertypescart[i].amount += amount;
            repordertypescart[i].discount += discount;
            repordertypescart[i].qty += qty;
            repordertypescart[i].accqty += accqty;
            return;
          }
        }
      }
      var item = new RepSalesOrderType(repname, OrderTypeSalesChange(ordertype), amount, discount, qty, accqty);
      repordertypescart.push(item);
    };
  
    obj.listRepSalesByOrderTypeCart = function() { 
      var rsTypeCartCopy = [];
      for (var i in repordertypescart) {
        var item = repordertypescart[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        rsTypeCartCopy.push(itemCopy);
      }
      return rsTypeCartCopy;
    };
  
    obj.listSalesCart = function() { 
      var sTypeCartCopy = [];
      for (var i in repsalescart) {
        var item = repsalescart[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        sTypeCartCopy.push(itemCopy);
      }
      return sTypeCartCopy;
    };
    obj.listOrderTypeCart = function() { 
      var oTypeCartCopy = [];
      for (var i in orderTypecart) {
        var item = orderTypecart[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        oTypeCartCopy.push(itemCopy);
      }
      return oTypeCartCopy;
    };
  
    // ----------------------------
    return obj;
  })();