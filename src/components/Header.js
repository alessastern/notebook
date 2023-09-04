export default function Header(props) {
  return (
    <>
      <div class="bg-gray-300">
        <div className="mx-auto min-h-screen px-4 py-3 ">{props.children}</div>
      </div>
    </>
  );
}
