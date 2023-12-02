import CreateLogin from "./components/CreateLoginArea/CreateLoginArea";
import Login from "./components/LoginArea/LoginArea";

const App = () => {
  return (
    <main className="flex h-screen w-full flex-col p-5 md:flex-row">
      <Login />

      <CreateLogin />
    </main>
  );
};

export default App;
