async function getDynamicRoutesFromApi() {
    const { data } = await axios.get('https://jalyuzi.com/api/products')
    return data.map(product => `/product/${product.id}`)
}
  