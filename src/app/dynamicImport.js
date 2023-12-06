import { useEffect, useState } from "react";

export function useDynamicImport(importPromise) {
  const [imported, setImported] = useState({});

  useEffect(() => {
    let cancelled = false;
    const awaitImport = async () => {
      const result = await importPromise;
      if (!cancelled && result && Object.keys(imported).length === 0) {
        setImported(() => result);
      }
    };
    awaitImport();
    return () => {
      cancelled = true;
    };
  }, [importPromise, imported]);

  return imported;
}
