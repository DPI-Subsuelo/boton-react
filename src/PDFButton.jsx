import { jsPDF } from "jspdf";
import "./App.css"; // Importamos los estilos

export default function PDFButton() {
  const generarPDF = () => {
    // Crear una nueva instancia de jsPDF
    const doc = new jsPDF();

    // Agregar texto al PDF en la posición (x=20, y=20)
    doc.text("¡Hola! Este es un PDF generado en React.", 20, 20);

    // Guardar y descargar el archivo con el nombre "documento.pdf"
    doc.save("documento.pdf");
  };

  return (
    <button onClick={generarPDF} className="pdf-button">
      Descargar PDF
    </button>
  );
}
