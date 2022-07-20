
export default function Home() {
  return (
      <div className="home-page">
        <img
          src="../assets/images/logo.png"
          alt="ZapRecall"
          className="home-logo"
        />
        <h1 className="home-title">ZapRecall</h1>
        <button className="home-button">
          <p>Iniciar Recall!</p>
        </button>
      </div>
  );
}
