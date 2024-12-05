import { axiosInstance } from '../../Shared/lib/axiosInstance'

class AnimalApi {
    static async getAnimals() {
        try {
            const {data} = await axiosInstance.get('/animals')
            return data
        } catch (error) {
            return error.response.data
        }
    }
    static async updateAnimal(id) {
        try {
            const {data} = await axiosInstance.post(`/animals/:${id}`)
            return data
        } catch (error) {
            return error.response.data
        }
    }
}

export default AnimalApi