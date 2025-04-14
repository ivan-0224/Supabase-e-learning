
export const ComputeFileHash = async (file:File)=>{
    // Read the file into an ArrayBuffer.
  const arrayBuffer = await file.arrayBuffer();
  
  // Compute the SHA‑256 digest.
  const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
  
  // Convert the ArrayBuffer into a byte array.
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  
  // Convert bytes to a hexadecimal string.
  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
    
  return hashHex;
}


