export async function getProductsById(id: string) {
  const response = await fetch(`https://assign-api.piton.com.tr/api/rest/products/${id}`)

  return response.json()
}

export async function getProductImageByName(fileName: string) {
  const response = await fetch("https://assign-api.piton.com.tr/api/rest/cover_image",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fileName })
    }
  )

  return response.json()
}