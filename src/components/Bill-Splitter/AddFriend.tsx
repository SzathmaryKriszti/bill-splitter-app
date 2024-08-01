export default function AddFriend() {
  return (
    <div className="text-center mt-3" style={{ width: '22rem' }}>
      <form>
        <div className="row">
          <label className="col-4">Friend name</label>
          <input className="col-8" type="text" />
        </div>
        <div className="row mt-3">
          <label className="col-4">Image URL</label>
          <input className="col-8" type="text" />
        </div>
        <div className="row m-2 text-center">
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  );
}
