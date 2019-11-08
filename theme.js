const colors = {
  text: "#111212",
  background: "#fff",
  primary: "#005CDD",
  secondary: "#6D59F0",
  muted: "#f6f6f9",
  gray: "#D3D7DA",
  highlight: "hsla(205, 100%, 40%, 0.125)",
  white: "#FFF",
  black: "#111212"
};

export const theme = {
  googleFont:
    "https://fonts.googleapis.com/css?family=Poppins:500,900|Roboto:400,400i,700&display=swap",
  fonts: {
    heading: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  colors,
  styles: {
    root: {
      textAlign: "left",
      fontSize: ["1.5em", null, "3em"]
    },
    h1: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    h2: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    h3: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    p: {
      fontWeight: 400
    },
    Slide: {
      display: "block",
      padding: "2em",
      textAlign: "left"
    }
  }
};
