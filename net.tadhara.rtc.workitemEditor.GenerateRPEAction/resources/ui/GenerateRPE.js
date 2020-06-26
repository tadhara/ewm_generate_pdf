dojo.provide("net.tadhara.rtc.workitemEditor.GenerateRPEAction.ui.GenerateRPE");
dojo.require("com.ibm.team.workitem.web.ui2.internal.action.AbstractAction");
dojo.require("com.ibm.team.repository.web.transport.ServiceResponseHandler"); 
dojo.require("com.ibm.team.reports.web.client.internal.ReportsClient");

var ReportsClient = com.ibm.team.reports.web.client.internal.ReportsClient;
var ServiceResponseHandler = com.ibm.team.repository.web.transport.ServiceResponseHandler;
var REPORT_NAME = "GenerateRPE";
var PARM_NAME = "RTC Workitems";

(function() {

	dojo.declare(
			"net.tadhara.rtc.workitemEditor.GenerateRPEAction.ui.GenerateRPE",
			com.ibm.team.workitem.web.ui2.internal.action.AbstractAction, {

				run : function(parms) {
					var paramWIURL = window.location.protocol + "//" + window.location.host + net.jazz.ajax._contextRoot + "/";
					paramWIURL = paramWIURL + "rpt/repository/workitem/workItem/id/" + this.workingCopy.getId();
					

					var serviceObject = {
							self: this,
						success : function(results) {
							if (results && results.length > 0) {
								this.self._openPDF(results[0],paramWIURL);
							} else {
								this.self._showMessage("There is no results");
							}

						},
						failure : function(error) {
							this.self._showMessage(error);
							// TODO
							// dojo.publish(com.ibm.team.dashboard.web.ui.internal.Constants.serverError,
							// [error]);
						}
					};
					var srh = new ServiceResponseHandler(serviceObject,
							"success", "failure"); 
					var args = {
						sortByName : true
					};
					args.filter = REPORT_NAME;
					ReportsClient.getReportDescriptors(srh, args);

				},

				isEnabled : function() {
			        return !this.workingCopy.isNew() && !this.workingCopy.isChanged();
				},

				isVisible : function(parms) {
					return true;
				},
				
				_openPDF: function(param,encodedParmWIURL){
					var serviceObject = {
							self: this,
						success : function(results) {
							if (results) {
								var pdfService = window.location.protocol + "//" + window.location.host + net.jazz.ajax._contextRoot + "/";
								pdfService = pdfService + "service/com.ibm.team.reports.service.internal.IReportViewerService?&__format=pdf";
								pdfService = pdfService + "&__queryUUID=" + results;
								pdfService = pdfService + "&__showArchived=false";
								window.open(pdfService,"_blank");
								//https://local.jkebanking.net/ccm/service/com.ibm.team.reports.service.internal.IReportViewerService?__format=pdf&__queryUUID=_fHSPMJ50EeqSeZzqWa8HWQ&__showArchived=false
							} else {
								this.self._showMessage("There is no results");
							}

						},
						failure : function(error) {
							this.self._showMessage(error);

						}
					};
					var srh = new ServiceResponseHandler(serviceObject,
							"success", "failure"); 
					var args = {
							queryUUID: "",
							reportUUID : "",
							parameterName: PARM_NAME,
							parameterValue: encodedParmWIURL,
					};
					args.reportUUID= param.reportUUID;
					ReportsClient.postSaveQueryParameters(srh,args);
				},
				
				_openReport: function(param,id){

					var reportURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
					reportURL = reportURL + "#action=com.ibm.team.reports.viewReport";
					reportURL = reportURL + "&reportUUID=" + param.reportUUID;
					reportURL = reportURL + "&parameterName=" + encodeURI(PARM_NAME);

					//https://local.jkebanking.net/ccm/resource/itemName/com.ibm.team.workitem.WorkItem/355
					//"RTC Workitems"
					//"https://local.jkebanking.net/ccm/rpt/repository/workitem/workItem/id/1"
					var paramWIURL = window.location.protocol + "//" + window.location.host + net.jazz.ajax._contextRoot + "/";
					paramWIURL = paramWIURL + "rpt/repository/workitem/workItem/id/" + id;
					var encodedParmWIURL = encodeURI(paramWIURL);
					
					reportURL = reportURL + "&parameterValue=" + encodedParmWIURL;
					
					window.open(reportURL,"_self");//_blank	
				},

			});

})();