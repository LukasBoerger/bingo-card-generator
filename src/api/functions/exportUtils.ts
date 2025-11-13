import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportToPNG() {
    const el = document.getElementById("bingo-card-export");
    if (!el) throw new Error("bingo-card-export element not found");
    const canvas = await html2canvas(el);
    const link = document.createElement("a");
    link.download = "bingo-card-export.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

export async function exportToPDF() {
    const el = document.getElementById("bingo-card-export");
    if (!el) throw new Error("bingo-card-export element not found");
    const canvas = await html2canvas(el);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("bingo-card-export.pdf");
}
