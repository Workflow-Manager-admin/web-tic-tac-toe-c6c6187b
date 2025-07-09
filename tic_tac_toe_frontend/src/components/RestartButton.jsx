import React from "react";

// PUBLIC_INTERFACE
function RestartButton({ onRestart }) {
  /**
   * Button to restart/reset the game.
   */
  return (
    <button
      onClick={onRestart}
      style={{
        marginTop: "1.1rem",
        padding: "0.6rem 2.3rem",
        background: "var(--primary)",
        color: "#fff",
        fontWeight: 600,
        border: "none",
        borderRadius: "16px",
        fontSize: "1.14rem",
        letterSpacing: 0.6,
        cursor: "pointer",
        boxShadow: "var(--shadow)",
        transition: "background 0.13s, box-shadow 0.18s",
        outline: "none"
      }}
      onMouseDown={e => e.currentTarget.style.background = "var(--secondary)"}
      onMouseUp={e => e.currentTarget.style.background = "var(--primary)"}
      aria-label="Restart game"
    >
      Restart
    </button>
  );
}

export default RestartButton;
