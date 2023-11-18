export async function getCategories() {
  const response = await fetch('https://assign-api.piton.com.tr/api/rest/categories')

  return response.json()
}