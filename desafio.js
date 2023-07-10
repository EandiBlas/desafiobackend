class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return "Error campos vacios"
        }
        const verifyCode = this.products.find(c => c.code === code)
        if (verifyCode) {
            return "El codigo se repite"
        }
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1
        const product = { id, title, description, price, thumbnail, code, stock }
        this.products.push(product)
        return "El codigo no se esta repitiendo"
    }

    getProductById(id) {
        const verifyId = this.products.find(i => i.id === id)
        if (verifyId) {
            return "Se encontro el producto"
        }
        return "No se encuentra el producto"
    }

}
const productManager = new ProductManager();
console.log(productManager.getProducts());
console.log(productManager.addProduct("hola", "mamaduk", 150, 'none', 2010, 25));
console.log(productManager.addProduct("holi", "recopado", 13250, 'nada', 1547, 235));
console.log(productManager.getProducts());
console.log(productManager.getProductById(2));
