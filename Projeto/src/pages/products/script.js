import { remedios } from "../../data/remedios.js";

// 2. Resgatar o elemento do HTML
const divRemedios = document.getElementById('div-remedios');

// 3. Criar todos os remédios dentro da DIV, utilizando uma estrutura de repetição. 
for (const item of remedios) {
    divRemedios.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div class="mb-4 mt-4">
                <h3>${item.nome}</h3>
                <p>${item.detalhes}</p>
                <p>Validade: ${item.validade}</p>
                <p>Quantidade: ${item.quantidade} - ${item.unidade} unidades</p>
                <p>Total: ${item.quantidade * item.unidade} comprimidos</p>
                <button class="btn btn-primary">Saiba mais</button>
            </div>
        </div>
    `;
};