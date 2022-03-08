const encloseUrlInAnchorNoFollow = (text) => {
  return text.replace(/(\b(https?|ftp|file|http):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z09+&@#/%=~_|])/img, '<a rel="nofollow" href="$1">$1</a>')
}

export default encloseUrlInAnchorNoFollow
