/* ==========================================================================
   🎮 ENGINE DE JOGOS - BIOALERTA (Criadora: Giovana Diniz)
   ========================================================================== */

// Aguarda o HTML carregar para preparar a estrutura dos jogos
document.addEventListener("DOMContentLoaded", () => {
    criarEstruturaModal();
});

/* --- Janela Flutuante onde os jogos vão rodar --- */
function criarEstruturaModal() {
    const modal = document.createElement("div");
    modal.id = "modal-jogo";
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.75); display: none; justify-content: center;
        align-items: center; z-index: 1000; font-family: 'Fredoka', sans-serif;
        backdrop-filter: blur(4px);
    `;

    const conteudo = document.createElement("div");
    conteudo.id = "conteudo-modal";
    conteudo.style.cssText = `
        background: #fff; padding: 35px 25px; border-radius: 40px;
        max-width: 460px; width: 90%; text-align: center;
        box-shadow: 0 15px 0px rgba(0,0,0,0.3); position: relative; 
        animation: abrirPopup 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;

    modal.appendChild(conteudo);
    document.body.appendChild(modal);

    // Adiciona animação fofa de surgimento
    const estiloAnimacao = document.createElement("style");
    estiloAnimacao.innerHTML = `
        @keyframes abrirPopup { 0% { transform: scale(0.6); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(estiloAnimacao);
}

function fecharJogo() {
    document.getElementById("modal-jogo").style.display = "none";
}

// Função auxiliar para criar o botão fofo de fechar dentro do jogo
function obterBotaoFechar() {
    return `<button onclick="fecharJogo()" style="position: absolute; top: -15px; right: -15px; background: #FF5252; border: 4px solid #fff; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; box-shadow: 0 4px 0 #D32F2F; font-weight: bold; color: white;">❌</button>`;
}

/* ==========================================================================
   🎮 JOGO 1: DOSE CERTA (Quadro Vermelho)
   ========================================================================== */
function iniciarJogo1() {
    const container = document.getElementById("conteudo-modal");
    container.style.border = "6px solid #FF5252";
    
    container.innerHTML = `
        ${obterBotaoFechar()}
        <h2 style="color: #FF5252; margin-bottom: 12px; font-size: 2rem;">🌱 Dose Certa</h2>
        <p style="margin-bottom: 20px; font-weight: 600; color: #444;">Arraste a barra para aplicar o remédio apenas na área verde equilibrada!</p>
        
        <div id="planta-j1" style="font-size: 5rem; margin-bottom: 20px; filter: drop-shadow(2px 4px 0px rgba(0,0,0,0.1));">🤒</div>
        
        <input type="range" id="barra-dose" min="0" max="100" value="15" style="width: 85%; margin-bottom: 15px; accent-color: #FF5252; cursor: pointer;">
        
        <div style="display: flex; justify-content: space-between; width: 85%; margin: 0 auto 25px auto; font-size: 0.9rem; font-weight: 700;">
            <span style="color: #FF9800; background: #FFF3E0; padding: 4px 10px; border-radius: 10px;">Pouco 🪱</span>
            <span style="color: #4CAF50; background: #E8F5E9; padding: 4px 10px; border-radius: 10px;">Ideal (45-55) ✨</span>
            <span style="color: #E53935; background: #FFEBEE; padding: 4px 10px; border-radius: 10px;">Excesso ⚠️</span>
        </div>
        
        <button id="btn-verificar-j1" style="background: #FF5252; color: #fff; border: none; padding: 14px 30px; border-radius: 50px; font-size: 1.2rem; font-weight: bold; cursor: pointer; box-shadow: 0 6px 0 #C62828; width: 85%; text-transform: uppercase;">Aplicar Dose</button>
    `;

    document.getElementById("modal-jogo").style.display = "flex";

    const barra = document.getElementById("barra-dose");
    const planta = document.getElementById("planta-j1");
    const btn = document.getElementById("btn-verificar-j1");

    btn.onclick = () => {
        const dose = parseInt(barra.value);
        btn.style.display = "none";
        barra.disabled = true;

        if (dose >= 44 && dose <= 56) {
            planta.innerText = "🥰🌸";
            container.innerHTML += `<div style="background: #E8F5E9; border: 3px dashed #4CAF50; padding: 15px; border-radius: 20px; color: #2E7D32; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">Parabéns! Você usou o equilíbrio e salvou o brotinho sem poluir a terra! 🎉</div>`;
        } else if (dose < 44) {
            planta.innerText = "🍂🐛";
            container.innerHTML += `<div style="background: #FFF3E0; border: 3px dashed #FF9800; padding: 15px; border-radius: 20px; color: #E65100; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">Faltou remédio! As lagartas continuaram atacando a plantinha. 😢</div>`;
        } else {
            planta.innerText = "💀😵‍💫";
            container.innerHTML += `<div style="background: #FFEBEE; border: 3px dashed #EF5350; padding: 15px; border-radius: 20px; color: #C62828; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">Que perigo! O excesso de agrotóxico envenenou o solo e a plantinha! 😭</div>`;
        }
    };
}

/* ==========================================================================
   🎮 JOGO 2: RELÓGIO DA COLHEITA (Quadro Laranja)
   ========================================================================== */
function iniciarJogo2() {
    const container = document.getElementById("conteudo-modal");
    container.style.border = "6px solid #FF9800";

    container.innerHTML = `
        ${obterBotaoFechar()}
        <h2 style="color: #FF9800; margin-bottom: 12px; font-size: 2rem;">🍎 Dias de Carência</h2>
        <p style="margin-bottom: 20px; font-weight: 600; color: #444;">As maçãs receberam defensivos. Espere o relógio zerar para colher alimentos limpos!</p>
        
        <div id="tempo-j2" style="font-size: 1.6rem; color:#E65100; background: #FFF3E0; border: 3px dashed #FF9800; padding: 10px 25px; border-radius: 20px; display: inline-block; margin-bottom: 20px; font-weight: bold;">⏳ Faltam: 5 dias</div>
        
        <div id="maca-j2" style="font-size: 5rem; margin-bottom: 25px; filter: drop-shadow(2px 4px 0px rgba(0,0,0,0.1));">☣️🍎</div>
        
        <button id="btn-colher" style="background: #FF9800; color: #fff; border: none; padding: 14px 30px; border-radius: 50px; font-size: 1.2rem; font-weight: bold; cursor: pointer; box-shadow: 0 6px 0 #EF6C00; width: 85%; text-transform: uppercase;">Colher Agora! 🧺</button>
    `;

    document.getElementById("modal-jogo").style.display = "flex";

    let dias = 5;
    const tempoTxt = document.getElementById("tempo-j2");
    const maca = document.getElementById("maca-j2");
    const btnColher = document.getElementById("btn-colher");

    const intervalo = setInterval(() => {
        dias--;
        if (dias > 0) {
            tempoTxt.innerText = `⏳ Faltam: ${dias} dias`;
        } else {
            clearInterval(intervalo);
            tempoTxt.innerText = "✅ Prazo Seguro Concluído!";
            tempoTxt.style.background = "#E8F5E9";
            tempoTxt.style.borderColor = "#4CAF50";
            tempoTxt.style.color = "#2E7D32";
            maca.innerText = "✨🍎✨";
        }
    }, 1200);

    btnColher.onclick = () => {
        clearInterval(intervalo);
        btnColher.style.display = "none";
        
        if (dias > 0) {
            maca.innerText = "🤢🤮";
            container.innerHTML += `<div style="background: #FFEBEE; border: 3px dashed #EF5350; padding: 15px; border-radius: 20px; color: #C62828; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">Eita! Você colheu antes da hora. A fruta estava com resíduos de veneno perigosos! ❌</div>`;
        } else {
            maca.innerText = "😋🥧🍏";
            container.innerHTML += `<div style="background: #E8F5E9; border: 3px dashed #4CAF50; padding: 15px; border-radius: 20px; color: #2E7D32; font-weight: bold; margin-top: 15px; font-size: 1.1rem;">Sucesso total! Respeitar o tempo garante comida saudável na mesa de casa! 🍏🎉</div>`;
        }
    };
}

/* ==========================================================================
   🎮 JOGO 3: EQUIPANDO O TRABALHADOR (Quadro Roxo)
   ========================================================================== */
function iniciarJogo3() {
    const container = document.getElementById("conteudo-modal");
    container.style.border = "6px solid #9C27B0";

    container.innerHTML = `
        ${obterBotaoFechar()}
        <h2 style="color: #9C27B0; margin-bottom: 12px; font-size: 2rem;">👨‍🌾 Roupa de Proteção</h2>
        <p style="margin-bottom: 20px; font-weight: 600; color: #444;">Clique somente nas proteções obrigatórias (EPI) para vestir o fazendeiro!</p>
        
        <div id="avatar-j3" style="font-size: 5rem; margin-bottom: 20px; filter: drop-shadow(2px 4px 0px rgba(0,0,0,0.1));">👦</div>
        
        <div id="armario" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
            <button class="item-epi" data-certo="true" style="padding: 12px; font-size: 1rem; border: 3px solid #E0E0E0; border-radius: 20px; cursor: pointer; background: #FAFAFA; font-weight: 600; font-family:'Fredoka'; transition: 0.2s;">😷 Máscara Filtro</button>
            <button class="item-epi" data-certo="false" style="padding: 12px; font-size: 1rem; border: 3px solid #E0E0E0; border-radius: 20px; cursor: pointer; background: #FAFAFA; font-weight: 600; font-family:'Fredoka'; transition: 0.2s;">🩴 Chinelo Simples</button>