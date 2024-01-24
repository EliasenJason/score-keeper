"use client"
import { useState, useEffect } from "react"

export default function Page() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener('swipeup', () => {
      setCount(count + 1);
    });
    window.addEventListener('swipedown', () => {
      setCount(count - 1);
    });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}