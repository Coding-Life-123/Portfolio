$(document).ready(function(){
  var lang = document.documentElement.lang;

  var url = document.URL.split("/")
  var search = (url[url.length-1].split('.'))[0]

  console.log(url)
  console.log(search)

  async function getData() {
    let data = await $.getJSON(`../langs/${search}/${lang}.json`);

    $("#appTitle").html(data.AppTitle)

    $("#appDesc").html(data.AppDesc)
    $("#searchISO").html(data.AppSearchBy[0])
    $("#searchCountry").html(data.AppSearchBy[1])
    $("#searchCity").html(data.AppSearchBy[2])
    $("#langButton").html(data.AppSearchBy[3])
    $("#langEffectDesc").html(data.AppSearchBy[4])
  }
  getData()
});
