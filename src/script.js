import conectarApi from "./apiPedidos.js"; 
const apiPedidos = new conectarApi();

async function exibirInformacoes(){
    const container = document.querySelector("#principal");
    container.innerHTML = "";

    const dados = await apiPedidos.listarItems();

    dados.forEach(pedidos => {
        const div = document.createElement("div");
        div.classList.add("teste");

        const paraNome = document.createElement("p");
        paraNome.textContent = pedidos.nome;

        const paraData = document.createElement("p");
        paraData.textContent = pedidos.data;

        const paraContato = document.createElement("p");
        paraContato.textContent = pedidos.contato;

        const paraTamanho = document.createElement("p");
        paraTamanho.textContent = pedidos.tamanho;

        const paraQuantidade = document.createElement("p");
        paraQuantidade.textContent = pedidos.quantidade;

        const paraEntrega = document.createElement("p");
        paraEntrega.textContent = pedidos.data_entrega;

        const paraEscola = document.createElement("p");
        paraEscola.textContent = pedidos.escola;

        const paraPagamento = document.createElement("p");
        paraPagamento.textContent = pedidos.pagamento;

        const paraTipoPedido = document.createElement("p");
        paraTipoPedido.textContent = pedidos.tipo_pedido;

        const paraSuperior = document.createElement("p");
        paraSuperior.textContent = pedidos.superior;

        const paraInferior = document.createElement("p");
        paraInferior.textContent = pedidos.inferior;

        const paraObservacao = document.createElement("p");
        paraObservacao.textContent = pedidos.obs;

        const parauuid = document.createElement("p");
        parauuid.textContent = pedidos.uuid;

        div.appendChild(paraNome);
        div.appendChild(paraData);
        div.appendChild(paraContato);
        div.appendChild(paraTamanho);
        div.appendChild(paraQuantidade);
        div.appendChild(paraEntrega);
        div.appendChild(paraEscola);
        div.appendChild(paraPagamento);
        div.appendChild(paraTipoPedido);
        div.appendChild(paraSuperior);
        div.appendChild(paraInferior);
        div.appendChild(paraObservacao);
        div.appendChild(parauuid);
        console.log(div)

        container.appendChild(div);
    });
}

exibirInformacoes()
