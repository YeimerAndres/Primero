export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, points, address }) {
  console.log(name);
  return (
      <div>
      <h1>{name}</h1>
      <p>Dinero: {amount}</p>
      <p>{married ? "esta casao" : "no esta casasdo"}</p>
      <p>puntos: {points}</p>
      <ul>
        <li>Ciudad: {address.city}</li>
        <li>Barrio: {address.street}</li>
      </ul>
    </div>
  );
}
