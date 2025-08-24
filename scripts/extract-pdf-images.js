const fs = require('fs');
const path = require('path');
const pdf2pic = require('pdf2pic');

async function extractImagesFromPDF(pdfPath, outputDir) {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Convert PDF pages to images
    const convert = pdf2pic.fromPath(pdfPath, {
      density: 300,           // High quality
      saveFilename: "page",
      savePath: outputDir,
      format: "png",
      width: 2048,
      height: 2048,
      quality: 100
    });

    const results = await convert.bulk(-1); // Convert all pages
    
    console.log(`✅ Extracted ${results.length} pages from ${path.basename(pdfPath)}`);
    return results;
    
  } catch (error) {
    console.error(`❌ Error extracting images from ${pdfPath}:`, error.message);
    return [];
  }
}

async function main() {
  const pdfFiles = [
    '/Users/shri/Downloads/Golden Elegant Minimalist Jewelry Product Catalog Presentation.pdf',
    '/Users/shri/Downloads/Brown and Beige Minimalist Beauty Product with Logo Trifold Brochure (2).pdf.pdf'
  ];

  const baseOutputDir = './public/img/catalog';

  for (let i = 0; i < pdfFiles.length; i++) {
    const pdfPath = pdfFiles[i];
    const pdfName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '_');
    const outputDir = path.join(baseOutputDir, pdfName);
    
    console.log(`🔄 Processing: ${path.basename(pdfPath)}`);
    await extractImagesFromPDF(pdfPath, outputDir);
  }

  console.log('🎉 All PDF processing complete!');
  console.log('📁 Images saved to: ./public/img/catalog/');
}

main().catch(console.error);