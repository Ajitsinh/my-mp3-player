// pages/index.js
export default function Home() {
  const tracks = [
    { name: "Yaara-ogg", file: "yaara.ogg" },
    { name: "Yaara-mp3", file: "yaara.mp3" },
    { name: "Yaara-wav", file: "yaara.wav" },
    { name: "Yaara-wma", file: "yaara.wma" },
  ];

  const play = (src) => {
    const player = document.getElementById("player");
    player.src = `/songs/${src}`;
    player.play();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", background: "#111", color: "#0f0" }}>
      <h1>🎧 MP3 Playlist</h1>

      <audio id="player" controls style={{ width: "100%", marginBottom: "2rem" }}>
        <source src="/songs/yaara.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {tracks.map((track) => (
          <button
            key={track.file}
            onClick={() => play(track.file)}
            style={{
              background: "#333",
              color: "#0f0",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            ▶️ {track.name}
          </button>
        ))}
      </div>
    </div>
  );
}
