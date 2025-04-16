function alternarTema() {
  document.body.classList.toggle('dark-theme');
}

async function baixarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Currículo - Seu Nome", 10, 20);
  
  doc.setFontSize(12);
  doc.text("Desenvolvedor Web | UX/UI Designer", 10, 30);
  doc.text("Email: seuemail@email.com", 10, 40);
  doc.text("Telefone: (11) 99999-9999", 10, 50);

  doc.setFontSize(14);
  doc.text("Experiência:", 10, 70);
  doc.setFontSize(12);
  doc.text("- Empresa X: Desenvolvedor Front-end (2022 - atual)", 10, 80);
  doc.text("- Empresa Y: Estagiário em TI (2021 - 2022)", 10, 90);

  doc.save("curriculo.pdf");
}
