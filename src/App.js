import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
	return (
		<UserLoader id='456'>
            <UserInfo />
        </UserLoader>
	);
}

export default App;
