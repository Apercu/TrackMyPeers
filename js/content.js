$(".peering").css("width", "39%");
$(".final_note").css("width", "24%");

$(".peering ul:even a").each(function(){

	var remove = $(this).parent().parent().prev().find("a").last();
	$(this).text($(this).text().replace("noter le groupe " + remove.text(), "noter"));
	var link = $(this);
	var text = link.text().replace("devez noter ", "");
	if (text != "avez donné la note")
	{
		$.ajax({
			url: "https://dashboard.42.fr/crawler/pull/" + text + "/",
			dataType: "json",
			success: function(result){
				link.after(' (<span style="color: #01824A;font-weight:bold;">' + result.last_host.replace(".42.fr", "") + "</span>)");
			},
			error: function(result){
				link.after(' (<span style="color: #F5634A;font-weight:bold;">Logout</span>)');
			}
		});
	}
});

$(".peering ul:odd a[title]").each(function(){

	var link = $(this);
	$.ajax({
		url: "https://dashboard.42.fr/crawler/pull/" + link.text() + "/",
		dataType: "json",
		success: function(result){
			link.after(' (<span style="color: #01824A;font-weight:bold;">' + result.last_host.replace(".42.fr", "") + "</span>)");
		},
		error: function(result){
			link.after(' (<span style="color: #F5634A;font-weight:bold;">Logout</span>)');
		}
	});
});