$(document).ready(function(){
  var lang = document.documentElement.lang;

  var url = document.URL.split("/")
  var search = (url[url.length-1].split('.'))[0]

  console.log(url)
  console.log(search)
  console.log(lang)

  async function getData() {
    let data = await $.getJSON(`../langs/${search}/${lang}.json`);

    $("#appTitle").html(data.AppTitle)

    $("#appFirstImage").attr("src", data.AppImagesLink[0])
    $("#appDesc").html(data.AppDesc)
    $("#appSecondImage").attr("src", data.AppImagesLink[1])
    $("#searchISO").html(data.AppSearchBy[0])
    $("#appThirdImage").attr("src", data.AppImagesLink[2])
    $("#searchCountry").html(data.AppSearchBy[1])
    $("#appFourthImage").attr("src", data.AppImagesLink[3])
    $("#searchCity").html(data.AppSearchBy[2])
    $("#appFifthImage").attr("src", data.AppImagesLink[4])
    $("#langButton").html(data.AppSearchBy[3])
    $("#langEffectDesc").html(data.AppSearchBy[4])
    data.Link === null ? null : $("#tryIt").html(`<a class="try-button" href="${data.Link}" target="_blank">${data.TryText}</a>`)

  }
  getData()
});
