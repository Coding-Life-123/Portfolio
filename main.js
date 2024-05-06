$(document).ready(function(){
    var data;

    async function loadData(){
        $("html").attr("lang") === "en" ? data = await $.getJSON("./langs/en.json") : data = await $.getJSON("./langs/es.json")

        document.title = data.DocumentTitle
        $("#greetingTitle").html(data.Greeting)
        $("#greetingDesc").html(data.GreetingText)
        $("#contactButton").html( `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>` + data.MailContact)
        $("#skillsTitle").html(data.SkillsTitle)
        $("#projectsTitle").html(data.ProjectsTitle)


        for( i=0; i<data.Projects.length; i++){
            $("#projects").append(`
                <div class="project-container">
                    <div class="project-image-container">
                        <img src=${data.Projects[i].AppImage} class="project-image" alt=""/>
                    </div>
                    <div class="project-text-container">
                        <h1 class="project-title">${data.Projects[i].AppTitle}</h1>
                        <p class="project-quick-desc">${data.Projects[i].AppQuickDesc}</p>
                        <a class="project-button" href=${"./Projects/"+data.Projects[i].AppProjectLink + ".html"}>See More...</a>
                    </div>
                </div>
            `)
        }

        $("#aboutMeTitle").html(data.AboutMeTitle)
        for( i = 0; i < data.AboutMe.length; i++){
            let aboutData = data.AboutMe[i].split(':')
            $("#aboutMeTexts").append(`<p>${aboutData[0]}<span>${aboutData[1]}</span>${aboutData[2]}</p>`)
        }
    }
    loadData()
});

