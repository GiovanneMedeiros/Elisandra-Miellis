// Função para mostrar mensagens (sucesso/erro)
function showMessage(msg, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = msg;
    messageBox.className = `message-box ${type} show`;
    setTimeout(() => {
        messageBox.className = 'message-box'; // Esconde após 5 segundos
    }, 5000);
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    try {
        // Aqui você faria a chamada para o seu backend
        // Por enquanto, vamos simular uma resposta de sucesso
        const response = await new Promise(resolve => setTimeout(() => resolve({
            ok: true,
            json: () => Promise.resolve({ message: "Sua solicitação foi enviada com sucesso! Em breve entrarei em contato para um atendimento exclusivo." })
        }), 1000)); // Simula um atraso de 1 segundo

        if (response.ok) {
            const data = await response.json();
            showMessage(data.message, 'success');
            form.reset(); // Limpa o formulário
        } else {
            const errorData = await response.json();
            showMessage(errorData.message || "Erro ao enviar solicitação. Por favor, tente novamente.", 'error');
        }
    } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        showMessage("Não foi possível enviar a solicitação. Verifique sua conexão e tente novamente.", 'error');
    }
});

// Atualizar o link do WhatsApp com o número correto
document.addEventListener('DOMContentLoaded', () => {
    const whatsappLink = document.querySelector('.whatsapp-float');
    // Substitua 'DDDISEUNUMERO' pelo seu DDD e número de telefone, ex: 11999999999
    whatsappLink.href = 'https://wa.me/5511999999999'; // Exemplo: Substitua pelo seu número
});

// Função de debounce para otimizar o evento de scroll
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Script para o header que encolhe ao rolar, usando debounce
window.addEventListener('scroll', debounce(() => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 120) { // Ajustado o valor para 120 para uma transição potencialmente mais suave
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 50)); // Atraso de 50ms para o debounce
