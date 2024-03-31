async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/tiburcioMartim/myPortfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}