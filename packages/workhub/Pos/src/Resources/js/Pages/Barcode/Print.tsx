import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import html2pdf from 'html2pdf.js';
import { formatCurrency } from '@/utils/helpers';
import JsBarcode from 'jsbarcode';

export default function Print() {
    const props = usePage().props as any;
    const products = props.products || [];
    const copies = props.copies || {};
    const [barcodeImages, setBarcodeImages] = useState<any>({});

    useEffect(() => {
        const images: any = {};
        products.forEach((product: any) => {
            const copyCount = copies[product.id] || 1;
            for (let i = 0; i < copyCount; i++) {
                const canvas = document.createElement('canvas');
                JsBarcode(canvas, product.sku, { format: "CODE128", width: 2, height: 50 });
                images[`${product.id}-${i}`] = canvas.toDataURL();
            }
        });
        setBarcodeImages(images);
        
        if (new URLSearchParams(window.location.search).get('download') === 'pdf') {
            setTimeout(async () => {
                const opt = {
                    margin: 0.5,
                    filename: 'product-barcodes.pdf',
                    image: { type: 'jpeg' as const, quality: 1.0 },
                    html2canvas: { scale: 3, useCORS: true, letterRendering: true },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                };
                await html2pdf().set(opt as any).from(document.querySelector('.barcode-container') as HTMLElement).save();
                if (window.opener) {
                    window.opener.location.reload();
                }
                window.close();
            }, 500);
        }
    }, []);

    return (
        <div className="barcode-container p-8">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                {products.map((product: any) => 
                    Array(copies[product.id] || 1).fill(0).map((_, i) => (
                        <div key={`${product.id}-${i}`} style={{border: '1px solid #ccc', padding: '8px', textAlign: 'center', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div style={{fontSize: '9px', fontWeight: 'bold', wordBreak: 'break-word', lineHeight: '1.1', height: '20px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{product.name}</div>
                            <img src={barcodeImages[`${product.id}-${i}`]} alt="Barcode" style={{maxWidth: '100%', height: '50px'}} />
                            <div style={{fontSize: '8px', color: '#666'}}>{formatCurrency(product.price)}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}