document.getElementById("btnGenerar").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const form = document.getElementById("inscripcionForm");
  const datos = new FormData(form);

  doc.setFontSize(14);
  doc.text("Formulario de Inscripción - EETP 681", 20, 20);

  let y = 40;

  for (let [campo, valor] of datos.entries()) {
    if (valor.trim() !== "") {
      doc.setFontSize(11);
      doc.text(`${campo}: ${valor}`, 20, y);
      y += 7;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    }
  }

  doc.save("Inscripcion_Completada.pdf");
});
