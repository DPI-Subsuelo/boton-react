import { jsPDF } from "jspdf";
import "./App.css"; // Importamos los estilos
import logoSanJuan from "./assets/logoSanJuan.png"; // Asegúrate de que la ruta sea correcta

export default function PDFButton() {
  const generarPDF = () => {
    // Crear una nueva instancia de jsPDF
    const doc = new jsPDF();

    const lineas = ["prueba linea1", "prueba linea2", "prueba linea3"];

    // Configurar el título en negrita y con una letra más grande
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Titulo: Generador de PDF en React", 40, 10);

    // Agregar el logo de San Juan a la izquierda del título
    const img = new Image();
    img.src = logoSanJuan;
    img.onload = () => {
      doc.addImage(img, "PNG", 10, 5, 25, 10); // Ajusta las coordenadas y el tamaño según sea necesario

      // Configurar el texto normal
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      lineas.map((linea, index) => {
        doc.text(linea, 20, 30 + (index * 10)); // Ajusta la posición vertical para dejar espacio al logo
      });

      // Guardar y descargar el archivo con el nombre "documento.pdf"
      doc.save("docReact.pdf");
    };
  };

  return (
    <button onClick={generarPDF} className="pdf-button">
      Descargar PDF
    </button>
  );
}
