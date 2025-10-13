import React from "react";

export default function Page(): any {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem", display: "grid", placeItems: "center" }}>
      <div style={{ maxWidth: 900, width: "100%" }}>
        <h1 style={{ fontSize: "2.25rem", margin: 0 }}>AnyCarousal Docs</h1>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Welcome — this is the documentation entry page for AnyCarousal.
        </p>
      </div>
    </main>
  );
}