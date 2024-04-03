export default {
	getTaskUrl (task) {
		var process = getProcurementProcesses.data[0];

		if (process?.length && task?.length) {
			return "/bonita/portal/resource/taskInstance/"+ encodeURI(process.name) +"/"+ encodeURI(process.version) +"/"+ encodeURI(task.name) +"/content/?id="+ task.id +"&senderUrl="+ window.top.location.href;
		}
	},
}