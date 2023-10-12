function Pagination(props) {
  return (
    <div className="pagination">
      {props.previous && <a onClick={() => props.setUrl(props.previous)}>❮</a>}
      {props.next && <a onClick={() => props.setUrl(props.next)}>❯</a>}
    </div>
  );
}

export default Pagination;
