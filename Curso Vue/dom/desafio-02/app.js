new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Exibindo alerta no botão')
        },
        valorInput(event) {
            this.valor = event.target.value
        }
    }
})