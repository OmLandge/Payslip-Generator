
export const imports = `
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="http://choiceenterprises.atwebpages.com/assets/css/style_pdf.css">
<link rel="stylesheet" href="http://choiceenterprises.atwebpages.com/assets/css/mobile.css">
`

export const css = `
* {
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  transition-duration: 0.5s;
}
.info {
  border-color: #0d6efd;
  color: dodgerblue
}
.info:hover {
  background: #0d6efd;
  color: white;
}
.mainTable table {
  width: 90vw;
}

.mainTable table tr{
    height: 30px;
}

.txt h5{
    font-size: 10px;
}

@media screen and (max-width: 520px) {
  .txt {
    overflow: hidden;
  }
  .mainTable {
    overflow: scroll;
  }
}
`;