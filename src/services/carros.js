import { http } from "./config"

export default {
    listar:() => {
        return http.get('carros')
    },

    salvar:(carro) => {
        return http.post('carros', carro)
    },

    atualizar:(carro) => {
        return http.put('carros', carro)
    },

    apagar:(carro) => {
        return http.delete('carros', { data: carro })
    }

}