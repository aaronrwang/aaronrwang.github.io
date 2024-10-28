function getImageURL(name) {
  return new URL(`../assets/Experience/${name}`, import.meta.url).href
}

export { getImageURL };