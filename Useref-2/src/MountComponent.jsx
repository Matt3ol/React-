import { useEffect, useRef } from "react";

export function MountComponent() {
  const isMountComponent = useRef(false);
  useEffect(() => {
    if (!isMountComponent.current) {
      console.log("componente montato");
    }
    isMountComponent.current = true;
  }, []);
  return <div>Componente</div>;
}
