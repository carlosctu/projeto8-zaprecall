// prop drilling
export default function Body({ wasClicked }, { setClicked }) {
  return (
    <div className={wasClicked ? "hidden" : "home-page"}>
      <img
        src="../assets/images/logo.png"
        alt="ZapRecall"
        className="home-logo"
      />
      <h1 className="title">ZapRecall</h1>
      <button
        className="home-button"
        onClick={() => {
          setClicked(true);
        }}
      >
        <p>Iniciar Recall!</p>
      </button>
    </div>
  );
}
