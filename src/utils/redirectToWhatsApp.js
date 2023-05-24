const RedirectToWhatsApp = (text = null) =>
{
    const messageText = text ? `Deseo agendar una cita para la especialidad ${text}.` : '';
    const phone = '5492234212380'
    window.location.href = `https://wa.me/${phone}?text=${messageText} `;
}
export default RedirectToWhatsApp;
