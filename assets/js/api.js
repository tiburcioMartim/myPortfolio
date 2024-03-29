async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/tiburcioMartim/myPortfolio/main/date/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()    
}