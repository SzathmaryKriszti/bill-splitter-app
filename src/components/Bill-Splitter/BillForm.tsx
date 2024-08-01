export default function BillForm() {
  return (
    <div className="text-center mt-3" style={{ width: '22rem' }}>
      <h3 className="mb-4">Split a Bill Wiht Mark</h3>
      <form>
        <div className="row">
          <label className="col-8">Bill value</label>
          <input className="col-4" type="text" />
        </div>
        <div className="row mt-3">
          <label className="col-8">Your expense</label>
          <input className="col-4" type="text" />
        </div>
        <div className="row mt-3">
          <label className="col-8">Mark's expense:</label>
          <input className="col-4" type="text" />
        </div>
        <div className="row mt-3">
          <label className="col-8">Who is paying the bill?</label>
          <select className="col-4">
            <option>Mark</option>
            <option>You</option>
          </select>
        </div>
        <div className="m-2 mt-4">
          <button className="btn btn-success ms-4">Split BIll</button>
        </div>
      </form>
    </div>
  );
}
