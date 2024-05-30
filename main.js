$(document).ready(function(){
    var data;
    var show = false
    var links = [
        "icons/HTML5.svg",
        "icons/CSS3.svg",
        "icons/TailwindCSS.svg",
        "icons/JavaScript.svg",
        "icons/jQuery.svg",
        "icons/ReactJS.svg",
        "icons/NodeJS.svg",
        "icons/ExpressJS.svg",
        "icons/MySQL.svg",
        "icons/MongoDB.svg"
    ];
    
    var names = [
        "HTML5",
        "CSS3",
        "Tailwind",
        "JavaScript",
        "jQuery",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySQL",
        "MongoDB"
    ];
    

    $("#languagesContainer").hide();

    $("#language").on('click', () => {
        $("#languagesContainer").toggle();
        show = !show
        $("#languagesContainer").toggleClass("show")
    })



    $("#languagesContainer").on('focusout', ()=>{
        $("#languagesContainer").hide();
    })

    $(".navbar-container>a").on('click', ()=>{
        if($("#languagesContainer").hasClass("show")){
            $("#languagesContainer").removeClass("show")
            $("#languagesContainer").hide()
        } 
    })

    async function loadData(){
        $("html").attr("lang", localStorage.getItem('lang'))
        $("html").attr("lang") === "en" ? data = await $.getJSON("./langs/en.json") : data = await $.getJSON("./langs/es.json")
        //var langs = await $.getJSON("./langs.json")


        document.title = data.DocumentTitle
        $("#skillsNav").html(data.SkillsTitle)
        $("#projectsNav").html(data.ProjectsTitle)
        $("#aboutMeNav").html(data.AboutMeTitle)
        $("#languagesTexts").html(`
            <a href="#" onclick="switchLang('en')">English</a>
            <a href="#" onclick="switchLang('es')">Español</a>
            `
        )
        
        
        $("#greetingTitle").html(data.Greeting)
        $("#greetingDesc").html(data.GreetingText)
        $("#contactButton").html( `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>` + data.MailContact)
        $("#skillsTitle").html(data.SkillsTitle)
        $("#projectsTitle").html(data.ProjectsTitle)

        $("#skillsContainer").empty();

        for( i=0; i<names.length; i++){
            $("#skillsContainer").append(`
                <div>
                    <img src="${links[i]}"/>
                    <p>${names[i]}</p>
                </div>
            `)
        }

        $("#projects").empty();

        for( i=0; i<data.Projects.length; i++){
            $("#projects").append(`
                <div key=${i} class="project-container">
                    <div class="project-image-container">
                        <img src=${data.Projects[i].AppImage} class="project-image" alt=""/>
                    </div>
                    <div class="project-text-container">
                        <h1 class="project-title">${data.Projects[i].AppTitle}</h1>
                        <p class="project-quick-desc">${data.Projects[i].AppQuickDesc}</p>
                        <div id="${"projectLangsContainer" + i}" class="project-langs-container"></div>
                        <a class="project-button" href=${"./Projects/"+data.Projects[i].AppProjectLink + ".html"}>${data.SeeMoreText}...</a>
                    </div>
                </div>
            `)


            for(j=0; j<data.Projects[i].Langs.length; j++){
                $("#projectLangsContainer" + i).append(`<img src="./icons/${data.Projects[i].Langs[j]}.svg"/>`)                
            }
        }     

        $("#aboutMeTitle").html(data.AboutMeTitle)
        $("#aboutMeTexts").empty()
        for( i = 0; i < data.AboutMe.length; i++){
            let aboutData = data.AboutMe[i].split(':')
            $("#aboutMeTexts").append(`<p>${aboutData[0]}<span>${aboutData[1]}</span>${aboutData[2]}</p>`)
        }
    }

    window.switchLang = function(lang) {
        $("html").attr("lang", lang);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden')
        });
        localStorage.setItem('lang', lang)
        loadData();
    }
    loadData()

});


