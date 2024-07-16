import "./Body.css";
export default function Body({ theme }) {
  return (
    <>
      <div className="des" style={{ color: theme === "dark" && "white" }}>
        <h1>Unlimited Movies and Tv Shows </h1>
        <p>Download Now OR Watch Online</p>
      </div>
    </>
  );
}
