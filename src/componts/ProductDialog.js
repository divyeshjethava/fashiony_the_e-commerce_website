
import React, { useEffect,useState } from 'react'

export default function ProductDialog(productId, onClose) {
    useEffect(() => {
        // Disable scrolling when the dialog is open
        document.body.style.overflow = "hidden";
    
        return () => {
          // Re-enable scrolling when the dialog is closed
          document.body.style.overflow = "auto";
        };
      }, []);
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        
      </div>
    </div>
  )
}
