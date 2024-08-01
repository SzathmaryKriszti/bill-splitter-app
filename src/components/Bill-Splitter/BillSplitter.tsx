import AddFriend from './AddFriend';
import BillForm from './BillForm';
import FriendList from './FriendList';
import {useState} from "react";

export interface FriendInterface {
  id: number;
  name: string;
  image: string;
  balance: number;
}

const initialFriends: FriendInterface[] = [
  {
    id: 118838,
    name: 'Jane',
    image: 'https://i.pravatar.cc/48?u=118838',
    balance: -5,
  },
  {
    id: 933350,
    name: 'John',
    image: 'https://i.pravatar.cc/48?u=933350',
    balance: 30,
  },
  {
    id: 499440,
    name: 'Clare',
    image: 'https://i.pravatar.cc/48?u=499440',
    balance: 0,
  },
    ];

export default function BillSplitter() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div>
      <div className="card" style={{ width: '50rem' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-success">Bill Splitter</h3>
          <div className="container">
            <div className="row">
              <div className="card col-6 bg-primary-subtle">
                <FriendList friends={initialFriends}/>
              </div>
              <div className="card col-6 bg-secondary-subtle">
                <BillForm />
              </div>

              {showAddFriend ? (
                  <div className="card col-6 bg-success-subtle">
                    <AddFriend />
                  </div>
              ) : (
                  <div className="card col-6"></div>
              )}

              <div className="col-6 text-center mt-5">
                <button onClick={handleShowAddFriend} className="btn btn-success">
                  {showAddFriend ? ('Close') : ('Add friends')}
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
