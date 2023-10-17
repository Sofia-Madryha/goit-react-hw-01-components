import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json";
import data  from "../components/Statistic/data.json";
import { Statistics } from "./Statistic/Statistics";
import  friends  from "./FriendList/friends.json";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./Transactions/Transactions";
import transactions from "./Transactions/transactions.json";

export const App = () => {
  return <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
     <Statistics stats={data}/>
     <FriendList friends={friends}/>
     <TransactionHistory transactions={transactions}/>
  </div>
};