class conectarApi{

    url = "http://localhost:3333/pedidos"

    async listarItems(){
        const res = await fetch(this.url)

        const dados = await res.json()
        return dados
    }

    async cadastrarPedido(pedido){
        const res = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(pedido),
            headers: {"Content-Type": "application/json"}
        });    
    }

    async deletarPedido(id){
        const res = await fetch(this.url + "/" + id, {
            method: "DELETE"
        });
    }

    async atualizarPedido(id, pedidoAtualizado){
        const res = await fetch(this.url + "/" + id, {
            method:"PUT",
            body: JSON.stringify(pedidoAtualizado),
            headers: {"Content-Type": "application/json"}
        });
    }
}

export default conectarApi;