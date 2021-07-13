
const Modal = {
    modal:document.querySelector(".modal-overlay"),
    open(){
            this.modal
                .classList
                .add("active")
    },
    close(){
            this.modal
                .classList
                .remove("active")
    }
}
const Controler = {
   
    inputQte: document.querySelector("#content-qte"),

    increasesQte(){
        let qte = Number(Controler.inputQte.value) + 1
        Controler.inputQte.value = qte;
    },
    decreasesQte(){
        Controler.inputQte.value -=1;
    }
}
const Form = {
    password : document.querySelector("#input-password"),
    email : document.querySelector("#input-email"),
    validateField(){
        senha = Form.password.value
        email = Form.email.value
        if(senha.trim() === "" || email.trim() === ""){
            throw new Error("preencha os dados para logar")
        }
    },
    clearField(){
        
        Form.password.value = "";
        Form.email.value = "";
    },

    submit(event){
        try{
            event.preventDefault();
            Form.validateField();
            Form.clearField();
            Modal.close();

        }catch(error){
            alert(error.message)
        }
    },
}
window.onclick = function(event) {
    if(event.target == Modal.modal){
        Modal.close()
    }
}