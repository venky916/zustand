import { useEffect } from 'react';
import './App.css';
import { useCounterStore } from './app/countStore';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import PropCard from './components/PropCard';

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count",count)
}


const setCount = () => {
  useCounterStore.setState({count :1})
  // console.log("count", count)
}

function App() {
  // const count = useCounterStore((state) => state.count);
  // const incrementAsync = useCounterStore((state) => state.incrementAsync)
  // const decrement = useCounterStore((state) => state.decrement)

  // useEffect(() => {
  //   setCount();
  // },[])
  // return (
  //   <div className="main-container">

  //     <h1 style={ {
  //       fontSize: "2.5rem",
  //       marginBottom :"2rem"
  //     } }>My Course List</h1>
  //     <div>
  //       <h6 style={ { color: "white", fontWeight: 700 } }>{ count }</h6>
  //       <div>
  //         <button onClick={ incrementAsync }>IncrementAsync</button>
  //         <button onClick={decrement}>Decrement</button>
  //       </div>
  //     </div>
  //     <CourseForm />
  //     <CourseList />
  //   </div>
  // );

  return (
    <div className='w-screen min-h-screen flex gap-10 flex-col items-center justify-center py-4'>
      <PropCard
        name='John Doe'
        role='UX Specialist'
        imageSrc='https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8'
        imageAlt='Profile image'
        onBackClick={ () => { } }
        onOptionsClick={ () => { } }
        onCallClick={ () => { } }
        onMessageClick={ () => { } }
      />
    </div>
  )
}

export default App;
