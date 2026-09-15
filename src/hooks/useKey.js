import { useEffect } from "react";


export default function useKey(key, action, active = true) {
  useEffect(() => {
    if (!active) return;

    function handleKeyDown(event) {
      if (event.key === key) {
        action(); 
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Event Listener Removed Successfully!");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, action, active]);
}