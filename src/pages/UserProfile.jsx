import ListSlider from "../components/listSlider/ListSlider";
import Statistics from "../features/profile/Statistics";
import UserCard from "../features/profile/UserCard";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const recentlyList = JSON.parse(sessionStorage.getItem("recentlyViewed"));

  
  return <main className={styles.profileContainer}>
    <UserCard/>
    <Statistics/>
    {<ListSlider label="Recently Viewed" list={recentlyList} category={{type:"recently"}} />}
 </main>;
}
