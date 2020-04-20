'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Home Page
|--------------------------------------------------------------------------
*/
Route.on('/').render('index')
Route.get('/getActiveReturns', 'TborderController.getActiveReturns')

/*
|--------------------------------------------------------------------------
| User Auth Pages
|--------------------------------------------------------------------------
*/

Route.on('/signup').render('user-auth.signup')
Route.post('/signup', 'UserController.create').validator('CreateUser');

Route.on('/login').render('user-auth.login')
Route.post('/login', 'UserController.login').validator('LoginUser');
Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});

/*
|--------------------------------------------------------------------------
| TB Orders Pages
|--------------------------------------------------------------------------
*/ 
//customemail

Route.on('/customemail').render('tborders.customemail')
Route.post('/customemail', 'TborderController.customemail')
Route.post('/notificationemail', 'TborderController.notificationemail')



Route.get('/tborders', 'TborderController.index')
Route.get('/tborders/show/:id', 'TborderController.show')
Route.get('/tborders/search', 'TborderController.search')
Route.get('/tborders/create/:ordernumber', 'TborderController.newEntry');
Route.post('/tborders', 'TborderController.create');
Route.get('/tborders/edit/:id', 'TborderController.edit');
Route.post('/tborders/delete/:id', 'TborderController.delete');
Route.post('/tborders/update/:id', 'TborderController.update')

/*
|--------------------------------------------------------------------------
| Priority returns pages
|--------------------------------------------------------------------------
*/

Route.get('/priority-returns', 'PriorityreturnController.index')
Route.get('/priority-returns/show/:id', 'PriorityreturnController.show')
Route.get('/priority-returns/search', 'PriorityreturnController.search')
Route.get('/tborders/:id/priority-returns/create', 'PriorityreturnController.newEntry');
Route.post('/priority-returns', 'PriorityreturnController.create');
Route.get('/priority-returns/edit/:id', 'PriorityreturnController.edit');
Route.post('/priority-returns/delete/:id', 'PriorityreturnController.delete');
Route.post('/priority-returns/update/:id', 'PriorityreturnController.update')
Route.get('/team-priority-returns', 'PriorityreturnController.team');



/*
|--------------------------------------------------------------------------
| Sales Pages
|--------------------------------------------------------------------------
*/
Route.get('/sales', 'SaleController.index')
Route.get('/sales/show/:id', 'SaleController.show')
Route.on('/sales/search').render('sales.search')
Route.on('/sales-today').render('sales.daily')

Route.get('/api/sales/search', 'SaleController.search')
Route.get('/api/sales/dailysales', 'SaleController.dailysales')

Route.get('/tborders/:id/sales/create', 'SaleController.newEntry');
Route.post('/sales', 'SaleController.create');
Route.get('/sales/edit/:id', 'SaleController.edit');
Route.post('/sales/delete/:id', 'SaleController.delete');
Route.post('/sales/update/:id', 'SaleController.update')


/*
|--------------------------------------------------------------------------
| Warranty Pages
|--------------------------------------------------------------------------
*/
Route.get('/warranties', 'WarrantyController.index')
Route.get('/warranties/show/:id', 'WarrantyController.show')
Route.get('/warranties/search', 'WarrantyController.search')
Route.get('/tborders/:id/warranties/create', 'WarrantyController.newEntry');
Route.post('/warranties', 'WarrantyController.create');
Route.get('/warranties/edit/:id', 'WarrantyController.edit');
Route.post('/warranties/delete/:id', 'WarrantyController.delete');
Route.post('/warranties/update/:id', 'WarrantyController.update')
Route.get('/team-warranties', 'WarrantyController.team');


/*
|--------------------------------------------------------------------------
| Credit Pages
|--------------------------------------------------------------------------
*/
Route.get('/credits', 'CreditController.index')
Route.get('/credits/show/:id', 'CreditController.show')
Route.get('/credits/search', 'CreditController.search')
Route.get('/tborders/:id/credits/create', 'CreditController.newEntry');
Route.post('/credits', 'CreditController.create');
Route.get('/credits/edit/:id', 'CreditController.edit');
Route.post('/credits/delete/:id', 'CreditController.delete');
Route.post('/credits/update/:id', 'CreditController.update')
Route.get('/team-credits', 'CreditController.team');


/*
|--------------------------------------------------------------------------
| Refunds Pages
|--------------------------------------------------------------------------
*/

Route.get('/daily-refunds', 'DailyrefundController.index');
Route.post('/daily-refunds/:id', 'DailyrefundController.refundsUpdateCredit');
Route.post('/daily-refunds/priorityreturns/:id', 'DailyrefundController.refundsUpdatePriorityreturn');
Route.post('/daily-refunds/warranties/:id', 'DailyrefundController.refundsUpdateWarranty');