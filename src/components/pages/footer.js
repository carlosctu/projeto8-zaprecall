export default function Footer({wasClicked}) {
  let queAnswered = 0;
  return (
    <div className={wasClicked? "footer" : "hidden"}>
      <p>{queAnswered}/4 CONCLUÍDOS</p>
    </div>
  );
}
