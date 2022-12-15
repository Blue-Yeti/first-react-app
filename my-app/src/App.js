import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";

const data = [
  { users: ["Anna", "Mashina", "Darina", "Frodo", "Fiera", "Slava", "Zina", "Groopy", "Maverick"], title: "SUX", id: "1" },
  { users: ["Anna", "Mashina", "Darina", "Frodo", "Fiera", "Slava", "Zina", "Groopy"], title: "ROCKS", id: "2" },
  { users: ["Anna", "Tory", "Darina", "Frodo", "Baboon", "Slava", "Zina", "Groopy", "Lala"], title: "ME", id: "3" },
];

function makeFakeID(arrOfObjects) {
  for (let i = 0; i < arrOfObjects.length; i++) {
    arrOfObjects[i]["fakeID"] = i;
  }
  console.log(arrOfObjects);
}
makeFakeID(data);

function FakeFooter(props) {
  console.log(props);
  return <footer>{props.children}</footer>;
}

function App() {
  // const loveOutput = data.map(item => <Hero key={item.fakeID} props={item} />)

  const someArr = [];
  const isOnline = true;
  return (
    <div className="App">
      {someArr[0] && <Header title={"Hello"} />}
      {/* {loveOutput} */}
      {data.map((item) => (
        <Hero key={item.fakeID} props={item} />
      ))}
      <FakeFooter>
        BEST FOOTER EVER! Thinking Love Sucks!
        <p>lala land</p>
        <Hero key="alibaba" props={data[0]} />
      </FakeFooter>
    </div>
  );
}

export default App;
