import './App.css';
import Footer from './component/Footer';
import FourthView from './component/FourthView';
import HealthAware from './component/HealthAware';
import ImageView from './component/ImageView';
import LearnCooking from './component/LearnCooking';
import NavTopView from './component/NavTopView';
import ReviewView from './component/ReviewView';
import SecondView from './component/SecondView';
import ThirdView from './component/ThirdView';

function App() {
  return (
    <div className="App">
        <NavTopView/>


        <SecondView/>
   
        <ThirdView/>

       <FourthView/>

       <HealthAware/>
      
       <ReviewView/>

       <LearnCooking/>

       <ImageView/>

       <Footer/>
      
        
       
    </div>
  );
}

export default App;
