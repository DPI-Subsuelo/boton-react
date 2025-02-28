import { jsPDF } from "jspdf";
import "./App.css"; // Importamos los estilos
import logoSanJuan from "./assets/logoSanJuan.png"; // Asegúrate de que la ruta sea correcta

export default function PDFButton() {
  const generarPDF = () => {
    // Crear una nueva instancia de jsPDF
    const doc = new jsPDF();

    const lineas = ["Constitucion de cooperativas en la Provincia", "Autorización de actuación en San Juan", "Rubrica de libros sociales y contables", "Prorroga", "Certificado de vigencia", "Nota Tipo", "Pre-Asamblea", "Post-Asamblea", "Informe institucional","Anulación de folios","Legalización de copias","Descargos pendientes AGO/AGE","Renuncia en calidad de asociado y/o cargo de cooperativa"];
    const nombreCooperativa = "Nombre de la Cooperativa";
    const fechaActual = new Date().toLocaleDateString();

    // Agregar el logo de San Juan y el texto de la cabecera
    const img = new Image();
    img.src = logoSanJuan;
    img.onload = () => {
      doc.addImage(img, "PNG", 10, 10, 40, 15); // Ajusta las coordenadas y el tamaño según sea necesario
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Dirección General de Cooperativas", 60, 20);

      // Configurar el título en negrita y con una letra más grande
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Titulo: Generador de PDF en React", 40, 40);

      // Configurar el texto normal
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      lineas.map((linea, index) => {
        doc.text(linea, 20, 50 + (index * 10)); // Ajusta la posición vertical para dejar espacio al logo
      });

      // Agregar el pie de página con el nombre de la cooperativa y la fecha actual
      doc.setFontSize(10);
      doc.text(`${nombreCooperativa} - ${fechaActual}`, 20, 280); // Ajusta la posición según sea necesario
      doc.text("Este documento es confidencial y solo para uso interno.", 20, 285);

      // Agregar área para sello y firma sin recuadro
      doc.setFontSize(12);
      doc.text("Sello", 20, 250);
      doc.text("Firma", 120, 250);

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
