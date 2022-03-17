function maFonction(){
    alert(`Votre demande d'inscription a été prise en compte`)
}

function sendJSON(){
    const lastname = document.getElementById('lastname').value
    const firstname = document.getElementById('firstname').value
    const mail = document.getElementById('mail').value
    const group = document.getElementById('group').value

    if(lastname === '' || firstname === '' || mail === '' || group === ''){
        alert('Tous les champs doivent être remplis !')
    }else if(group === "admin"){
        document.getElementById('group').remove
        alert("Vous ne pouvez pas vous inscrire en temps qu'administrateur !")
    }else{
        const signInJSON = JSON.stringify({'firstname':firstname, 'lastname':lastname, 'mail':mail, 'group':group})
        const signIn = JSON.parse(signInJSON)

        // alert(signInJSON)
        alert(signIn.lastname + ' ' + signIn.firstname + ' ' + signIn.mail + ' ' + signIn.group)
    }
}