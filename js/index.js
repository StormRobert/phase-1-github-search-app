// function for getting the users in searching in github
const searchUsers = () => {
    const form = document.getElementById('github-form')
    const searchUserData = document.getElementById('search')
    const usersList = document.getElementById('user-list')

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const username = searchUserData.value.trim()//removing unneeded space
        if(username === ""){
            alert("Please enter a valid user name")
            return


        } try {
            //getting data from api fetch()
            let response = await fetch(`https://api.github.com/users/${username}`)
            const userData = await response.json()

            //fetching the repo
            let reposResponse =  await fetch(`https://api.github.com/users/${username}`)
            if(reposResponse.ok){
                alert(`Repos are not found`)
                return

            }

            const repoData = await reposResponse.json()

            //now to get a refresh of the page
            usersList.innerHTML = ''

            //appending user info
            const usersListDetails = document.createElement(`li`)

           // usersListDetails.innerText=`${userData.name} has ${repoData.public_repos} public repositories`
           usersListDetails.innerHTML = `
           <img src = ${userData.avatar_url} alt = ${userData.login}/>
           <h3> ${userData.login}</h3>
           <a href= ${userData.html_url} target =' _blank'  >View Profile</a>`;
           usersList.appendChild(usersListDetails)//adding it to list

           //creating repo-list
           const repoList = document.getElementById('repos-list')
           repoList.innerHTML='';
           repoData.forEach
           document.createElement(`ul`)


         } catch(error) {

         }


    })

}
//document.querySelector()