import React from "react";

// PUBLIC_INTERFACE
function Scoreboard({ scores, turn }) {
  /**
   * Displays the players' scores and indicates whose turn it is.
   */
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "2.5rem",
        marginBottom: "1.2rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{
          fontWeight: 700,
          color: turn === "X" ? "var(--primary)" : "#8a8f99",
          fontSize: "1.6rem",
          transition: "color 0.15s"
        }}>
          X
        </div>
        <div style={{
          background: "#fff",
          color: "#222",
          minWidth: 44,
          minHeight: 21,
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: "var(--shadow)",
          marginTop: 7,
          padding: "0.18rem 0.8rem",
          fontSize: "1.06rem",
        }}>
          {scores.X}
        </div>
      </div>
      <div style={{
        color: "#b0bac1",
        fontSize: "0.95rem",
        fontWeight: 400,
        paddingBottom: "0.7rem"
      }}>
        ▪ Score ▪
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{
          fontWeight: 700,
          color: turn === "O" ? "var(--secondary)" : "#8a8f99",
          fontSize: "1.6rem",
          transition: "color 0.15s"
        }}>
          O
        </div>
        <div style={{
          background:"#fff",
          color:"#222",
          minWidth: 44,
          minHeight: 21,
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: "var(--shadow)",
          marginTop: 7,
          padding: "0.18rem 0.8rem",
          fontSize: "1.06rem",
        }}>
          {scores.O}
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
