var schedule = require('node-schedule');
var vsprintf = require("sprintf-js").vsprintf;
var sendMail = require('./common/mailerconfig');
var connection = require('./common/mysqlconfig');
var templates = require('./common/mailertemplates');

// var rule = new scheduler.RecurrenceRule();
// rule.hour = 7
// rule.dayOfWeek = new schedule.Range(0, 6)

// var dailyJob = schedule.scheduleJob(date, function () {
// 	console.log('I run on days at 7:00');
// });

// schedule.scheduleJob(rule, task);

var j = schedule.scheduleJob('*/1 * * * *', function () {
	console.log('!!!!!!!!!!!!!!!!!!!!!!!');
	console.log('Task Running per Minute');

	contractExpiration();
	pmSchedDue();
	hcSchedDue();
});

function contractExpiration() {
	connection.query("SELECT c.id, \
datediff(curdate(), start_date) as days_before_start, \
cd.start_date, cd.end_date, datediff(cd.end_date, curdate()) as contract_remaining_days, \
gi.customer_name, gi.customer_address, gi.contract_reference, gi.sales_order_number, \
gi.account_manager, gi.business_group \
FROM cms.contracts as c \
LEFT JOIN contracts_detail as cd ON cd.id = c.contract_details_id \
LEFT JOIN gen_info as gi ON gi.id = c.gen_info_id", function (err, results) {

			var resultsArr = results || [];

			for (var i = 0; i < resultsArr.length; i++) {
				var contract_data = {
					contract_id: results[i].id,
					customer_name: results[i].customer_name,
					customer_address: results[i].customer_address,
					contract_reference: results[i].contract_reference,
					sales_order_number: results[i].sales_order_number,
					account_manager: results[i].account_manager,
					business_group: results[i].business_group
				}

				var days_before_start = results[i].days_before_start;
				var contract_remaining_days = results[i].contract_remaining_days;

				if (days_before_start == 0) {

					if (contract_remaining_days == 15) {
						console.log('15 Days Remaining');

						var data = {
							email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
							subject: 'Contract Expiring <test>',
							message: vsprintf(templates.contract_expiration,
								[contract_data.sales_order_number, 15, contract_data.customer_name,
								contract_data.customer_address, contract_data.contract_reference,
								contract_data.account_manager, contract_data.business_group])
						}

						sendMail(data);
					} else if (contract_remaining_days == 30) {
						console.log('30 Days Remaining');

						var data = {
							email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
							subject: 'Contract Expiring <test>',
							message: vsprintf(templates.contract_expiration,
								[contract_data.sales_order_number, 30, contract_data.customer_name,
								contract_data.customer_address, contract_data.contract_reference,
								contract_data.account_manager, contract_data.business_group])
						}

						sendMail(data);
					} else if (contract_remaining_days == 60) {
						console.log('60 Days Remaining');

						var data = {
							email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
							subject: 'Contract Expiring <test>',
							message: vsprintf(templates.contract_expiration,
								[contract_data.sales_order_number, 60, contract_data.customer_name,
								contract_data.customer_address, contract_data.contract_reference,
								contract_data.account_manager, contract_data.business_group])
						}

						sendMail(data);
					} else if (contract_remaining_days == 90) {
						console.log('90 Days Remaining');

						var data = {
							email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
							subject: 'Contract Expiring <test>',
							message: vsprintf(templates.contract_expiration,
								[contract_data.sales_order_number, 90, contract_data.customer_name,
								contract_data.customer_address, contract_data.contract_reference,
								contract_data.account_manager, contract_data.business_group])
						}

						sendMail(data);
					} else if (contract_remaining_days == 120) {
						console.log('120 Days Remaining');

						var data = {
							email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
							subject: 'Contract Expiring <test>',
							message: vsprintf(templates.contract_expiration,
								[contract_data.sales_order_number, 120, contract_data.customer_name,
								contract_data.customer_address, contract_data.contract_reference,
								contract_data.account_manager, contract_data.business_group])
						}

						sendMail(data);
					}
				}

			}
		});
}


function pmSchedDue() {
	connection.query("SELECT c.id, \
	datediff(pm_schedule_start,curdate()) as days_before_pm_start, \
	pm_schedules.pm_schedule_start, pm_schedules.pm_schedule_end \
FROM cms.contracts as c \
LEFT JOIN scope_of_work as sow ON sow.id = c.scope_of_work_id \
LEFT JOIN pm_schedules on pm_schedules.sow_id = sow.id;", function (err, results) {
	
			var resultsArr = results || [];

			for (var i = 0; i < resultsArr.length; i++) {
				var days_before_pm_start = results[i].days_before_pm_start;

				if (days_before_pm_start == 20) {
					console.log('PM Sched 20 Days Remaining!');

					var data = {
						email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
						subject: 'PM Schedule Due <test>',
						message: vsprintf(templates.due_date)
					}

					sendMail(data);
				}
			}

		});
}

function hcSchedDue() {
	connection.query("SELECT c.id, \
	gi.sales_order_number, \
	datediff(health_check_start,curdate()) as days_before_hc_start, \
	health_check_schedules.health_check_start, health_check_schedules.health_check_end \
FROM cms.contracts as c \
LEFT JOIN scope_of_work as sow ON sow.id = c.scope_of_work_id \
LEFT JOIN health_check_schedules on health_check_schedules.sow_id = sow.id \
LEFT JOIN gen_info as gi ON gi.id = c.gen_info_id;", function (err, results) {

			var resultsArr = results || [];

			for (var i = 0; i < resultsArr.length; i++) {
				var days_before_hc_start = results[i].days_before_hc_start;

				if (days_before_hc_start == 20) {
					console.log('HC Sched 20 Days Remaining!');

					var data = {
						email: '"CMS-Reminder-Bot 👻" <accesscodenodemailer@gmail.com>',
						subject: 'HC Schedule Due <test>',
						message: vsprintf(templates.due_date)
					}

					sendMail(data);
				}
			}
		});
}





