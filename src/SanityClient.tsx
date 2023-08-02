import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'lfznary6',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: "sktcUbTSPxiEXE7tcVpD9mWPNiQoXX0OOrmT6YCAbVWiJ3aWetdkmQGJXVpS72Ulozp3OTlDd7mGNx1y5tgEXPToAK77apNVZe4QC3ZLzhpptCYatfa2ehACOL7nmyCBC8POpHP9tO8wImIF2sdUbrX13oCOLZNGJhnq2MswOrTLqF3bW8rD" // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function getPayments() {
  const payments = await client.fetch('*[_type == "payment"]')
  return payments
}


export async function getPaymentById(paymentId: string) {
  const payment = await client.fetch('*[_type == "payment" && _id == "'+paymentId+'"][0]{_id, type -> {title}, title, mainImage, paidBy -> {name}, amount, dateOfPayment }')
  return payment
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}