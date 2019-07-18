export default {
  URL: 'https://randomuser.me/api/',
  SEED: 'DME',
  RESULTS: 50,

  isFetchedAtleastOnce: false,

  async getUsers () {
    const url = `${this.URL}?results=${this.RESULTS}&seed=${this.SEED}`
    const r = await fetch(url)
    const j = await r.json()
    return j.results
  }
}
