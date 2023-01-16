const br = "%0D%0A";
const hifen = "%20-%20";

function sendContactMail() {

    const emailTo = "jobs@agilefactor.pt";

    const name = encodeURIComponent(document.getElementById("Name").value);
    const subject = "CONTACTO" + hifen + name;
    const message = encodeURIComponent(document.getElementById("validationTextarea").value);
   
    const mailto_link = 'mailto:' + emailTo + '?subject=' + subject + '&body=' + message;

    window.open(mailto_link);
    location.reload();
}

function sendRecruitmentMail() {

    const emailTo = "jobs@agilefactor.pt";

    const select = document.getElementById("recruitment-select");
    const job = encodeURIComponent(select.options[select.selectedIndex].text);

    const name = encodeURIComponent(document.getElementById("Name").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const phone = encodeURIComponent(document.getElementById("phone").value);
    const linkedin = encodeURIComponent(document.getElementById("linkedin").value);
    const address = encodeURIComponent(document.getElementById("inputAddress").value);
    const local = encodeURIComponent(document.getElementById("Local").value);
    const zipCode = encodeURIComponent(document.getElementById("inputZip").value);
    const presentationLetter = encodeURIComponent(document.getElementById("validationTextarea").value);

    const subject = "RECRUTAMENTO" + hifen + job + hifen + name;
    const message = "Posição: " + job + br
        + "Nome: " + name + br
        + "E-mail: " + email + br
        + "Contacto Telefónico: " + phone + br
        + "LinkdIn: " + linkedin + br
        + "Morada: " + address + br
        + "Localidade: " + local + br
        + "Código Postal: " + zipCode + br
        + "Carta de Apresentação: " + presentationLetter + br;

    const mailto_link = 'mailto:' + emailTo + '?subject=' + subject + '&body=' + message;

    window.open(mailto_link);
    location.reload();
}