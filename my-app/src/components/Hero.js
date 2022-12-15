export default function Hero({ props }) {
  console.log(props);
  return (
    <>
      <h2>Love {props.title}</h2>
      <p>
        falks agreed with the statement:{" "}
        {props.users.map((user) => (
          <a href="#" key={user} className="users">
            {user}
          </a>
        ))}
      </p>
    </>
  );
}
// code spell checker
