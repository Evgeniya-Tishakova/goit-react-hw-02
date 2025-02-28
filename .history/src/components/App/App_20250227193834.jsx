import Profile from "../Profile/Profile.jsx";
import TransactionHistory from "../Transaction/TransactionHistory.jsx";
import FriendList from "../FreindList/FriendList.jsx";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export default function App() {
  return (
    <>
      <Profile person={userData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
