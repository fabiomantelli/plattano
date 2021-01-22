export const GTM_ID = 'GTM-P4CF9TP'
export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}