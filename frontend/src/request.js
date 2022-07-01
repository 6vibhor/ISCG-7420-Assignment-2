import {create} from 'apisauce'

const apiClient = create({
    baseURL:'http://gradebook-project.herokuapp.com/api/'
})

export default apiClient;