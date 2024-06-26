export const preventForm = (event : any) : void => {
    event.preventDefault();
}

// * Poderia fazer em uma função só, mas quero utilizar assim para praticar.

export const SingUpUser = () : void => {
    console.log("Cadastrou usuário!");
    ShowUsernameAndPassword();
}

function ShowUsernameAndPassword() {
    const textInput = document.getElementById('Itext') as HTMLInputElement | null;
    const passwordInput = document.getElementById('Ipassword') as HTMLInputElement | null;
    
    if(textInput) {
        const pickUsername = textInput.value;
        if(passwordInput) {
            const pickPassword = passwordInput.value;
            if(pickUsername != "" && pickPassword != "") {
                alert(`Username: ${pickUsername}\nPassword: ${passwordInput}`);
            } else {
                console.log("Erro");
            }
        } else {
            console.log("Password does not exist!");
        }
    } else {
        console.log("Username does not exist!");
    }
}