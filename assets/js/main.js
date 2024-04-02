function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkedin
    linkedin.href = profileData.linkLinkedin

    const github = document.getElementById('profile.github')
    github.innerText = profileData.github
    github.href = profileData.linkGithub

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateBio(profileData) {
    const bio = document.getElementById('profile.bio')
    bio.innerHTML = profileData.bio.map(b => `
        <h1 class="title">${b.title}</h1>
        <span class="paragraph-info">
            ${b.content}
        </span>
    `)
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skills => `<li class="paragraph-info">${skills}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skills => `
        <li class="mt-list-img">
            <img src="${skills.logo}" alt="${skills.name}">
        </li>
    `).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(lang => `<li class="paragraph-info">${lang}</li>`).join('')
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
    education.innerHTML = profileData.education.map(educ => `
            <li>
            <a class="title" href="${educ.href}" target="_blank">${educ.name}</a>
            <p class="paragraph-info-sub date">
                ${educ.date}
            </p>
            <p class="paragraph-info">
                ${educ.content}
            </p>
        </li>
    `).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')    
    portfolio.innerHTML = profileData.portfolio.map(portf => `
        <li>
            <a class="title github" href="${portf.urlGithub}" target="_blank" rel="external">${portf.name}</a>

            <a href="${portf.urlProject}" target="_blank" rel="external" class="paragraph-info-sub ico-globe-solid">
                Link to ${portf.name} view
            </a>

            <span class="paragraph-info">
                ${portf.content}
            </span>
        </li>
    `).join('')
}

function updateExperienceProfessional(profileData) {
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(e => `
        <li>
            <span class="title">${e.office}</span>
            <p class="list-medio">
                ${e.name}
            </p>
            <p class="paragraph-info-sub date">
                ${e.period}
            </p>
            <p class="paragraph-info">
                ${e.description}
            </p>
        </li>
    `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateEducation(profileData)
    updatePortfolio(profileData)
    updateBio(profileData)
    updateExperienceProfessional(profileData)
})()