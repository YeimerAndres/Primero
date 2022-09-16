export default function Posts() {
  return (
    <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
    }}>
        Traer datos
    </button>
  );
}
