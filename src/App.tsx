import "./App.css";
import "./index.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "10vh",
          backgroundImage: 'url("/background_1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 42%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vh" }}>
          <a href="https://react.dev" target="_blank">
            <img
              src="/logo.png"
              alt="React logo"
              style={{
                height: "8vh",
                width: "auto",
              }}
            />
          </a>
          <h1
            style={{
              fontFamily: "Aleo-Italic",
              color: "white",
              fontSize: "42px",
            }}
          >
            Ilubio Lab
          </h1>
        </div>
      </div>

      {/* Rest of the content */}
      <div
        style={{
          flex: 1,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "2em" }}>
          <button
            style={{
              borderRadius: "8px",
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontSize: "1em",
              fontWeight: 500,
              backgroundColor: "white",
              cursor: "pointer",
              transition: "border-color 0.25s",
            }}
          >
            WELCOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
