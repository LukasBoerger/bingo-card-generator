import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportToPNG() {
    const el = document.getElementById("bingo-card-export");
    if (!el) throw new Error("bingo-card-export element not found");

    const canvas = await html2canvas(el, {
        backgroundColor: '#ffffff',
        scale: 3,
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
    });

    const link = document.createElement("a");
    link.download = "bingo-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

export async function exportToPDF() {
    const el = document.getElementById("bingo-card-export");
    if (!el) throw new Error("bingo-card-export element not found");

    const canvas = await html2canvas(el, {
        backgroundColor: '#ffffff',
        scale: 3,
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const marginX = 10;
    const marginY = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", marginX, marginY, imgWidth, imgHeight);
    pdf.save("bingo-card.pdf");
}
