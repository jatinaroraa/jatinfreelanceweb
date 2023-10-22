function importAll(r) {
  return r.keys().map(r);
}

export const images = importAll(
  require.context("../assets/appdemo", false, /\.(png|jpe?g|gif)$/)
);
