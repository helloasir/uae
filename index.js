import templete from './templete'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  
  return new Response(templete(), {
    headers: { 'content-type': 'text/html' },
  })
}
