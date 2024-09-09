// Initialize the QR code variable
let qrCodeInstance = null;

document.getElementById('generateBtn').addEventListener('click', generateQRCode);
document.getElementById('downloadBtn').addEventListener('click', downloadQRCode);

function generateQRCode() {
    const qrText = document.getElementById('qrText').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const statusMessage = document.getElementById('statusMessage');
    const downloadBtn = document.getElementById('downloadBtn');

    // Clear the previous QR code and status messages
    qrcodeContainer.innerHTML = '';
    statusMessage.textContent = '';
    downloadBtn.classList.add('hidden');

    // Validate input
    if (qrText.trim() === '') {
        statusMessage.textContent = 'Please enter a valid text or URL';
        return;
    }

    // Generate the QR code
    qrCodeInstance = new QRCode(qrcodeContainer, {
        text: qrText,
        width: 200,
        height: 200,
    });

    // Wait for a short delay to allow QR code to generate
    setTimeout(() => {
        downloadBtn.classList.remove('hidden'); // Show the download button
    }, 200);
}

function downloadQRCode() {
    const canvas = document.querySelector('#qrcode canvas');
    const qrText = document.getElementById('qrText').value;

    // If canvas exists, trigger download
    if (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `QR_Code_${qrText}.png`;
        link.click();
    } else {
        alert('Please generate a QR code first.');
    }
}
