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
        paraNome.textContent = "Nome: " + pedidos.nome;

        const paraData = document.createElement("p");
        paraData.textContent = "Data: " + pedidos.data;

        const paraContato = document.createElement("p");
        paraContato.textContent = "Contato: " + pedidos.contato;

        const paraTamanho = document.createElement("p");
        paraTamanho.textContent = "Tamanho: " + pedidos.tamanho;

        const paraQuantidade = document.createElement("p");
        paraQuantidade.textContent = "Quantidade: " +pedidos.quantidade;

        const paraEntrega = document.createElement("p");
        paraEntrega.textContent = "Data Entrega: " +pedidos.data_entrega;

        const paraEscola = document.createElement("p");
        paraEscola.textContent = "Escola: " + pedidos.escola;

        const paraPagamento = document.createElement("p");
        paraPagamento.textContent = "Pagamento: " + pedidos.pagamento;

        const paraTipoPedido = document.createElement("p");
        paraTipoPedido.textContent = "Tipo do Pedido: " + pedidos.tipo_pedido;

        const paraSuperior = document.createElement("p");
        paraSuperior.textContent = "Parte Superior: " + pedidos.superior;

        const paraInferior = document.createElement("p");
        paraInferior.textContent = "Parte Inferior: " + pedidos.inferior;

        const paraObservacao = document.createElement("p");
        paraObservacao.textContent = "Obs: " + pedidos.obs;

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
