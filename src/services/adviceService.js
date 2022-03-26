import { api } from './baseService'


export default {
    async getRandom() {
        return await api().get('advice')
    },
    async searchQuery(query) {
        return await api().get(`advice/search/${query}`)
    }
}
