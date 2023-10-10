// function for getting the users in searching in github
const searchUsers = () => {
    const form = document.getElementById('github-form')
    const searchUserData = document.getElementById('search')
    const usersList = document.getElementById('user-list')

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const username = searchUserData.value.trim()//removing unneeded space

    })

}
//document.querySelector()