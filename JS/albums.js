const {createApp} = Vue

createApp({
    data(){
        return {
            //INTRODUCIR LA URL, YA SEA DE PYTHONANYWHERE O LA DE FLASK
            //url:"........"
            albums: [],
            error: false,
            cargando: true
        }
    },

    created(){
        this.fetchdata(this.url)
    },

    methods: {
        fetchdata(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.producto = data;
                this.cargando = false
            })

            .catch(err => {
                console.error(err);
                this.error = true
            })
        },

        eliminar(producto {
            //INTRODUCIR LA URL, YA SEA DE PYTHONANYWHERE O LA DE FLASK
            //const url:"........ + producto;
            var options = {
                method: 'DELETE',
            }
            
            fetch(url, options)
            .then(res => res.text())
            .then(res => {
                alert("Eliminado correctamente")
                location.reload();
            })
        })
    },
}).mount('#app')
