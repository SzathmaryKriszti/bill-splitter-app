import {FriendInterface} from "./BillSplitter";

export default function Friend({friend} : {friend: FriendInterface}) {
  return (
    <div>
      <div className="card" style={{ width: '22rem' }}>
        <div className="card-body d-flex justify-content-evenly ">
          <img
            src={friend.image}
            alt={friend.name}
            className="rounded"
          />
          <div>
            <h5 className="card-title">{friend.name}</h5>

            {friend.balance < 0 && (
                <p className="card-text text-danger">You owe {friend.name} {Math.abs(friend.balance)}$</p>
            )}
            {friend.balance > 0 && (
                <p className="card-text text-success">{friend.name} owes you {Math.abs(friend.balance)}$</p>
            )}
            {friend.balance === 0 && (
                <p className="card-text text-warning">You and {friend.name} are even.</p>
            )}

          </div>
          <button className="btn btn-success">Select</button>
        </div>
      </div>
    </div>
  );
}
