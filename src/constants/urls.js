export const urls = {
    categories: {
        getList: '/categories'
    },
    Products: {
        getList: '/products',
        saleProductsList: `/products?is_sale=true`,
        bestSelling: `/products?is_popular=true`,
        getOne: (id) => `/products/${id}?_relations = categories`
    },
    Brends: {
    getList: '/brands'
    },
    auth: {
    register: '/register',
    login: '/auth'
    }
}