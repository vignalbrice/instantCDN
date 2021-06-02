export const persons = {
    namespaced: true,
    state: () => ({
        persons: [{
            id: 1,
            name: 'Loris'
        }, {
            id: 2,
            name: 'Boris'
        }, {
            id: 3,
            name: 'Florian'
        }, {
            id: 4,
            name: 'Harry'
        }]
    }),
    mutations: {

    },
    actions: {

    },
    getters: {
        getPersons(state) {
            return state.persons
        }
    }
}