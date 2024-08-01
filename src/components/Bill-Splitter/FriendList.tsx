import Friend from './Friend';
import {FriendInterface} from "./BillSplitter";


export default function FriendList({friends} : {friends: FriendInterface[]}) {
  return (
    <>
      {
        friends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
        ))
      }
    </>
  );
}
