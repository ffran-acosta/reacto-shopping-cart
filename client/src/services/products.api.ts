export const testingService = async () => {
    const url = 'http://localhost:7011/api/railway/products'
    const res = await fetch(url)
    return res.json()
}